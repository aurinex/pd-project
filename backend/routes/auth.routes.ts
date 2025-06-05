import { Router } from 'express';
import prisma from '../database';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'skypatrol-secret-key';

// Маршрут для входа пользователя
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Проверка наличия обязательных полей
    if (!username || !password) {
      return res.status(400).json({ message: 'Необходимо указать имя пользователя и пароль' });
    }

    // Поиск пользователя в базе данных
    const user = await prisma.user.findUnique({
      where: { username },
      include: { role: true }
    });

    // Проверка существования пользователя
    if (!user) {
      return res.status(401).json({ message: 'Неверное имя пользователя или пароль' });
    }

    // Проверка активности пользователя
    if (!user.isActive) {
      return res.status(403).json({ message: 'Учетная запись деактивирована' });
    }

    // Проверка пароля
    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Неверное имя пользователя или пароль' });
    }

    // Обновление времени последнего входа
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }
    });

    // Создание JWT токена
    const token = jwt.sign(
      { 
        userId: user.id, 
        username: user.username,
        role: user.role.name 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Отправка ответа с токеном и информацией о пользователе
    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        role: user.role.name
      }
    });
  } catch (error) {
    console.error('Ошибка при входе:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

// Маршрут для регистрации пользователя (только для администраторов)
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, fullName, roleId } = req.body;

    // Проверка наличия обязательных полей
    if (!username || !email || !password || !roleId) {
      return res.status(400).json({ 
        message: 'Необходимо указать имя пользователя, email, пароль и роль' 
      });
    }

    // Проверка существования пользователя с таким именем или email
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username },
          { email }
        ]
      }
    });

    if (existingUser) {
      return res.status(409).json({ 
        message: 'Пользователь с таким именем или email уже существует' 
      });
    }

    // Хеширование пароля
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Создание нового пользователя
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        passwordHash,
        fullName,
        roleId,
        isActive: true
      },
      include: { role: true }
    });

    res.status(201).json({
      message: 'Пользователь успешно зарегистрирован',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        fullName: newUser.fullName,
        role: newUser.role.name
      }
    });
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

// Маршрут для проверки токена
router.get('/me', async (req, res) => {
  try {
    // Получение токена из заголовка
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Требуется авторизация' });
    }

    const token = authHeader.split(' ')[1];

    // Проверка токена
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    
    // Получение информации о пользователе
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: { role: true }
    });

    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: 'Учетная запись деактивирована' });
    }

    // Отправка информации о пользователе
    res.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        role: user.role.name
      }
    });
  } catch (error) {
    console.error('Ошибка при проверке токена:', error);
    res.status(401).json({ message: 'Недействительный токен' });
  }
});

export default router; 