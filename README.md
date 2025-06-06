# SkyPatrol МВД - Система управления БПЛА

SkyPatrol – веб-платформа для управления беспилотными летательными аппаратами в МВД России. Система позволяет оперативно управлять БПЛА в реальном времени, анализировать собираемые данные и автоматически распознавать объекты.

## Функциональные возможности

- Интерактивная карта с отображением всех БПЛА и их маршрутов
- Панель управления полетами (запуск, посадка, изменение маршрута)
- Модуль анализа данных (распознавание лиц, автомобильных номеров)
- Система оповещений о подозрительных действиях
- Интеграция с другими системами МВД

## Технологический стек

### Фронтенд
- React с TypeScript
- Material UI для компонентов интерфейса
- Mapbox GL для карт
- Chart.js для визуализации данных

### Бэкенд
- Python
- Flask REST API
- JWT для авторизации
- OpenCV для обработки видео и распознавания

## Запуск проекта

### Фронтенд

1. Перейдите в директорию `frontend`:
```
cd frontend
```

2. Установите зависимости:
```
npm install
```

3. Запустите сервер разработки:
```
npm run dev
```

Фронтенд будет доступен по адресу: `http://localhost:5173`

### Бэкенд

1. Перейдите в директорию `backend`:
```
cd backend
```

2. Создайте и активируйте виртуальное окружение Python:
```
python -m venv venv
```

На Windows:
```
venv\Scripts\activate
```

На macOS/Linux:
```
source venv/bin/activate
```

3. Установите зависимости:
```
pip install -r requirements.txt
```

4. Создайте файл `.env` с конфигурацией:
```
JWT_SECRET_KEY=skypatrol_secret_key_for_development
FLASK_APP=app.py
FLASK_ENV=development
PORT=5000
```

5. Запустите бэкенд:
```
flask run
```

Бэкенд будет доступен по адресу: `http://localhost:5000`

## Тестовые учетные записи

- Администратор: логин `admin`, пароль `admin123`
- Оператор: логин `operator`, пароль `operator123`

## Дополнительная информация

Проект разработан для образовательных целей и демонстрации возможностей современных технологий в области управления БПЛА. Для промышленного использования требуется дополнительная разработка и оптимизация.

## Специфика применения в ОВД

- Обеспечение информационной безопасности
- Возможность экстренного перехвата управления
- Система приоритезации задач при массовых мероприятиях
- Интеграция с другими полицейскими базами данных 