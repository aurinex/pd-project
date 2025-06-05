from fastapi import APIRouter
from backend.routes.auth import auth_router
from backend.routes.drones import drone_router
from backend.routes.routes import route_router
from backend.routes.users import user_router
from backend.routes.events import event_router

# Создаем главный роутер API
api_router = APIRouter()

# Подключаем роутеры для различных ресурсов
api_router.include_router(auth_router, prefix="/auth", tags=["Аутентификация"])
api_router.include_router(drone_router, prefix="/drones", tags=["Дроны"])
api_router.include_router(route_router, prefix="/routes", tags=["Маршруты"])
api_router.include_router(user_router, prefix="/users", tags=["Пользователи"])
api_router.include_router(event_router, prefix="/events", tags=["События"]) 