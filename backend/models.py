from datetime import datetime
from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Text, Boolean, JSON, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash

Base = declarative_base()

# Промежуточная таблица для связи many-to-many между пользователями и ролями
user_roles = Table('user_roles', Base.metadata,
    Column('user_id', Integer, ForeignKey('users.id'), primary_key=True),
    Column('role_id', Integer, ForeignKey('roles.id'), primary_key=True)
)

# Модель роли пользователя
class Role(Base):
    __tablename__ = 'roles'

    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True, nullable=False)
    description = Column(String(255))
    
    # Связь с пользователями
    users = relationship('User', secondary=user_roles, back_populates='roles')

    def __repr__(self):
        return f"<Role {self.name}>"

# Модель пользователя
class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String(64), unique=True, nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    password_hash = Column(String(128))
    first_name = Column(String(64))
    last_name = Column(String(64))
    is_active = Column(Boolean, default=True)
    last_login = Column(DateTime, default=datetime.utcnow)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Связь с ролями
    roles = relationship('Role', secondary=user_roles, back_populates='users')

    def __repr__(self):
        return f"<User {self.username}>"
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'is_active': self.is_active,
            'last_login': self.last_login.isoformat() if self.last_login else None,
            'roles': [role.name for role in self.roles]
        }

# Модель дрона
class Drone(Base):
    __tablename__ = 'drones'

    id = Column(Integer, primary_key=True)
    name = Column(String(64), nullable=False)
    model = Column(String(64))
    serial_number = Column(String(64), unique=True)
    status = Column(String(20), default='standby')  # active, standby, returning, maintenance
    battery = Column(Integer, default=100)  # процент заряда батареи
    altitude = Column(Float, default=0)  # высота в метрах
    speed = Column(Float, default=0)  # скорость в км/ч
    location = Column(JSON)  # [longitude, latitude]
    mission = Column(String(255))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Связь с историей полетов
    flight_history = relationship('FlightHistory', back_populates='drone')
    
    # Связь с маршрутом (если назначен)
    route_id = Column(Integer, ForeignKey('routes.id'), nullable=True)
    route = relationship('Route', back_populates='drones')

    def __repr__(self):
        return f"<Drone {self.name}>"
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'model': self.model,
            'serial_number': self.serial_number,
            'status': self.status,
            'battery': self.battery,
            'altitude': self.altitude,
            'speed': self.speed,
            'location': self.location,
            'mission': self.mission,
            'route_id': self.route_id,
            'updated_at': self.updated_at.isoformat()
        }

# Модель маршрута
class Route(Base):
    __tablename__ = 'routes'

    id = Column(Integer, primary_key=True)
    name = Column(String(64), nullable=False)
    description = Column(Text)
    coordinates = Column(JSON)  # массив точек маршрута [[longitude, latitude], ...]
    is_active = Column(Boolean, default=True)
    created_by = Column(Integer, ForeignKey('users.id'))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Связь с создателем маршрута
    author = relationship('User')
    
    # Связь с дронами, назначенными на этот маршрут
    drones = relationship('Drone', back_populates='route')

    def __repr__(self):
        return f"<Route {self.name}>"
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'coordinates': self.coordinates,
            'is_active': self.is_active,
            'created_by': self.created_by,
            'created_at': self.created_at.isoformat(),
            'drones': [drone.id for drone in self.drones]
        }

# Модель истории полетов
class FlightHistory(Base):
    __tablename__ = 'flight_history'

    id = Column(Integer, primary_key=True)
    drone_id = Column(Integer, ForeignKey('drones.id'), nullable=False)
    route_id = Column(Integer, ForeignKey('routes.id'))
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime)
    max_altitude = Column(Float)
    max_speed = Column(Float)
    distance = Column(Float)  # в километрах
    battery_used = Column(Integer)  # процент использованной батареи
    status = Column(String(20), default='in_progress')  # in_progress, completed, aborted
    notes = Column(Text)
    
    # Связи с дроном и маршрутом
    drone = relationship('Drone', back_populates='flight_history')
    route = relationship('Route')

    def __repr__(self):
        return f"<Flight {self.id} - Drone {self.drone_id}>"
    
    def to_dict(self):
        return {
            'id': self.id,
            'drone_id': self.drone_id,
            'route_id': self.route_id,
            'start_time': self.start_time.isoformat(),
            'end_time': self.end_time.isoformat() if self.end_time else None,
            'max_altitude': self.max_altitude,
            'max_speed': self.max_speed,
            'distance': self.distance,
            'battery_used': self.battery_used,
            'status': self.status,
            'notes': self.notes
        }

# Модель событий (уведомлений, тревог)
class Event(Base):
    __tablename__ = 'events'

    id = Column(Integer, primary_key=True)
    type = Column(String(20), nullable=False)  # alert, detection, system
    message = Column(Text, nullable=False)
    severity = Column(String(20), default='info')  # info, warning, error, critical
    drone_id = Column(Integer, ForeignKey('drones.id'))
    location = Column(JSON)  # [longitude, latitude]
    handled = Column(Boolean, default=False)
    handled_by = Column(Integer, ForeignKey('users.id'))
    handled_at = Column(DateTime)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Связи с дроном и пользователем, обработавшим событие
    drone = relationship('Drone')
    handler = relationship('User')

    def __repr__(self):
        return f"<Event {self.id} - {self.type}>"
    
    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
            'message': self.message,
            'severity': self.severity,
            'drone_id': self.drone_id,
            'location': self.location,
            'handled': self.handled,
            'handled_by': self.handled_by,
            'handled_at': self.handled_at.isoformat() if self.handled_at else None,
            'created_at': self.created_at.isoformat()
        }

# Модель для хранения обнаруженных объектов
class Detection(Base):
    __tablename__ = 'detections'

    id = Column(Integer, primary_key=True)
    drone_id = Column(Integer, ForeignKey('drones.id'), nullable=False)
    object_type = Column(String(50), nullable=False)  # person, vehicle, animal, etc.
    confidence = Column(Float)  # уровень уверенности распознавания (0-1)
    location = Column(JSON)  # [longitude, latitude]
    image_url = Column(String(255))  # URL к изображению с обнаруженным объектом
    bounding_box = Column(JSON)  # координаты рамки обнаружения [x, y, width, height]
    metadata = Column(JSON)  # дополнительные данные о обнаружении
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Связь с дроном
    drone = relationship('Drone')

    def __repr__(self):
        return f"<Detection {self.id} - {self.object_type}>"
    
    def to_dict(self):
        return {
            'id': self.id,
            'drone_id': self.drone_id,
            'object_type': self.object_type,
            'confidence': self.confidence,
            'location': self.location,
            'image_url': self.image_url,
            'bounding_box': self.bounding_box,
            'metadata': self.metadata,
            'created_at': self.created_at.isoformat()
        } 