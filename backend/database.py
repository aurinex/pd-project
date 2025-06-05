from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, scoped_session

from config import DATABASE_URL

# Создаем подключение к базе данных
engine = create_engine(DATABASE_URL)

# Создаем фабрику сессий
session_factory = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Создаем скоупированную сессию для многопоточной работы
Session = scoped_session(session_factory)

# Базовый класс для моделей
Base = declarative_base()

# Функция для получения сессии базы данных
def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()

# Функция для инициализации базы данных
def init_db():
    # Импортируем модели, чтобы они были зарегистрированы
    from models import User, Role, Drone, Route, FlightHistory, Event, Detection
    
    # Создаем все таблицы
    Base.metadata.create_all(bind=engine)

# Функция для заполнения тестовыми данными
def seed_db():
    from models import User, Role, Drone, Route
    from datetime import datetime
    import json
    
    db = Session()
    
    # Проверяем, есть ли уже данные
    if db.query(User).first() is not None:
        db.close()
        return
    
    # Создаем роли
    admin_role = Role(name="admin", description="Администратор системы")
    operator_role = Role(name="operator", description="Оператор БПЛА")
    viewer_role = Role(name="viewer", description="Наблюдатель (только просмотр)")
    
    db.add_all([admin_role, operator_role, viewer_role])
    db.commit()
    
    # Создаем пользователей
    admin_user = User(
        username="admin",
        email="admin@skypatrol.ru",
        first_name="Администратор",
        last_name="Системы",
        is_active=True
    )
    admin_user.set_password("admin123")
    admin_user.roles.append(admin_role)
    
    operator_user = User(
        username="operator",
        email="operator@skypatrol.ru",
        first_name="Оператор",
        last_name="БПЛА",
        is_active=True
    )
    operator_user.set_password("operator123")
    operator_user.roles.append(operator_role)
    
    viewer_user = User(
        username="viewer",
        email="viewer@skypatrol.ru",
        first_name="Наблюдатель",
        last_name="Системы",
        is_active=True
    )
    viewer_user.set_password("viewer123")
    viewer_user.roles.append(viewer_role)
    
    db.add_all([admin_user, operator_user, viewer_user])
    db.commit()
    
    # Создаем маршруты
    route_arbat = Route(
        name="Патруль Арбат",
        description="Маршрут патрулирования района Арбат",
        coordinates=json.dumps([
            [37.5898, 55.7516],
            [37.5998, 55.7532],
            [37.6067, 55.7517],
            [37.6056, 55.7472],
            [37.5921, 55.7489],
            [37.5898, 55.7516]
        ]),
        is_active=True,
        created_by=admin_user.id
    )
    
    route_vdnh = Route(
        name="Маршрут ВДНХ",
        description="Маршрут патрулирования территории ВДНХ",
        coordinates=json.dumps([
            [37.6320, 55.8260],
            [37.6390, 55.8280],
            [37.6410, 55.8240],
            [37.6360, 55.8210],
            [37.6320, 55.8260]
        ]),
        is_active=True,
        created_by=operator_user.id
    )
    
    db.add_all([route_arbat, route_vdnh])
    db.commit()
    
    # Создаем дроны
    drone1 = Drone(
        name="БПЛА-101",
        model="Квадрокоптер X-500",
        serial_number="SN001122334455",
        status="active",
        battery=78,
        altitude=120,
        speed=42,
        location=json.dumps([37.5998, 55.7532]),
        mission="Патрулирование района Арбат",
        route_id=route_arbat.id
    )
    
    drone2 = Drone(
        name="БПЛА-102",
        model="Квадрокоптер X-500",
        serial_number="SN001122334456",
        status="returning",
        battery=23,
        altitude=90,
        speed=35,
        location=json.dumps([37.6159, 55.7522]),
        mission="Возвращение на базу (низкий заряд)"
    )
    
    drone3 = Drone(
        name="БПЛА-103",
        model="Квадрокоптер X-500",
        serial_number="SN001122334457",
        status="standby",
        battery=100,
        altitude=0,
        speed=0,
        location=json.dumps([37.6208, 55.7539]),
        mission="Готов к вылету"
    )
    
    drone4 = Drone(
        name="БПЛА-104",
        model="Квадрокоптер X-500",
        serial_number="SN001122334458",
        status="maintenance",
        battery=45,
        altitude=0,
        speed=0,
        location=json.dumps([37.6208, 55.7539]),
        mission="Техническое обслуживание"
    )
    
    db.add_all([drone1, drone2, drone3, drone4])
    db.commit()
    
    db.close() 