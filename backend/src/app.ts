import express from 'express';
import cors from 'cors';
import path from 'path';
import { connectDB, seedDB } from './database';
import apiRoutes from './routes';

// Импорт маршрутов API
// import apiRoutes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Статические файлы
app.use('/uploads', express.static(path.join(__dirname, '../../..', 'uploads')));
app.use('/static', express.static(path.join(__dirname, '../../..', 'static')));

// API маршруты
app.use('/api', apiRoutes);

// Корневой маршрут для проверки работоспособности
app.get('/', (req, res) => {
  res.json({ message: 'SkyPatrol API работает' });
});

// Обработка ошибок
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Внутренняя ошибка сервера',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Запуск сервера
async function startServer() {
  try {
    // Подключаемся к базе данных
    await connectDB();
    
    // Заполняем базу данных начальными данными
    await seedDB();
    
    // Запускаем сервер
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  } catch (error) {
    console.error('Ошибка при запуске сервера:', error);
    process.exit(1);
  }
}

startServer();

export default app; 