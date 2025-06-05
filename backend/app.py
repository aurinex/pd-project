from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
import uvicorn

from config import CORS_ORIGINS, PORT, HOST, DEBUG, STATIC_DIR
from database import get_db, init_db, seed_db
from routes import api_router

# Создаем приложение FastAPI
app = FastAPI(
    title="SkyPatrol API",
    description="API для системы управления БПЛА",
    version="1.0.0",
)

# Добавляем middleware для CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Монтируем статические файлы
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

# Подключаем API роуты
app.include_router(api_router, prefix="/api")

# Корневой роут для проверки работоспособности API
@app.get("/")
def read_root():
    return {"message": "SkyPatrol API работает"}

# Инициализируем базу данных при запуске
@app.on_event("startup")
def startup_db_client():
    init_db()
    seed_db()

if __name__ == "__main__":
    uvicorn.run("app:app", host=HOST, port=PORT, reload=DEBUG) 