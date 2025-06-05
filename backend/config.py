import os
from dotenv import load_dotenv

# Загружаем переменные окружения из .env файла
load_dotenv()

# Настройки базы данных
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./skypatrol.db")

# Настройки JWT аутентификации
SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key_here")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Настройки CORS
CORS_ORIGINS = [
    "http://localhost:5173",  # Frontend Dev Server
    "http://localhost:8000",  # Backend Dev Server
    "http://localhost:4173",  # Frontend Prod Server
]

# Настройки API
API_PREFIX = "/api"
API_VERSION = "v1"
API_TITLE = "SkyPatrol API"
API_DESCRIPTION = "API для системы управления БПЛА SkyPatrol"

# Настройки приложения
DEBUG = os.getenv("DEBUG", "true").lower() == "true"
PORT = int(os.getenv("PORT", "8000"))
HOST = os.getenv("HOST", "0.0.0.0")

# Пути к директориям
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UPLOAD_DIR = os.path.join(BASE_DIR, "uploads")
STATIC_DIR = os.path.join(BASE_DIR, "static")

# Создаем директории, если они не существуют
os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(STATIC_DIR, exist_ok=True) 