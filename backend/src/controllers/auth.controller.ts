import { Request, Response } from 'express';
import { PrismaClient } from '../../src/generated/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'skypatrol-secret-key';

// Регистрация нового пользователя
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, username, fullName } = req.body;

    // Проверка наличия обязательных полей
    if (!email || !password || !username) {
      res.status(400).json({
        success: false,
        message: 'Email, пароль и имя пользователя обязательны для заполнения'
      });
      return;
    }

    // Проверка существования пользователя
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      res.status(400).json({
        success: false,
        message: 'Пользователь с таким email уже существует'
      });
      return;
    }

    // Получение роли "VIEWER" по умолчанию
    const viewerRole = await prisma.role.findFirst({
      where: { name: 'VIEWER' }
    });

    if (!viewerRole) {
      res.status(500).json({
        success: false,
        message: 'Роль VIEWER не найдена'
      });
      return;
    }

    // Хеширование пароля
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Создание пользователя
    const user = await prisma.user.create({
      data: {
        email,
        username,
        fullName,
        passwordHash: hashedPassword,
        roleId: viewerRole.id
      },
      include: {
        role: true
      }
    });

    // Создание JWT токена
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role.name },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      success: true,
      message: 'Пользователь успешно зарегистрирован',
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        fullName: user.fullName,
        role: user.role.name
      }
    });
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при регистрации пользователя'
    });
  }
};

// Авторизация пользователя
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Получен запрос на авторизацию:', req.body);
    const { email, password } = req.body;

    // Проверка наличия обязательных полей
    if (!email || !password) {
      console.log('Отсутствуют обязательные поля:', { email, password });
      res.status(400).json({
        success: false,
        message: 'Email и пароль обязательны'
      });
      return;
    }

    // Поиск пользователя
    console.log('Поиск пользователя по email:', email);
    const user = await prisma.user.findUnique({
      where: { email },
      include: { role: true }
    });

    if (!user) {
      console.log('Пользователь не найден');
      res.status(401).json({
        success: false,
        message: 'Неверный email или пароль'
      });
      return;
    }

    console.log('Пользователь найден:', { id: user.id, email: user.email, username: user.username });

    // Проверка пароля
    console.log('Проверка пароля...');
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      console.log('Неверный пароль');
      res.status(401).json({
        success: false,
        message: 'Неверный email или пароль'
      });
      return;
    }

    console.log('Пароль верный, создание токена...');

    // Создание JWT токена
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role.name },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    console.log('Токен создан, отправка ответа...');

    res.status(200).json({
      success: true,
      message: 'Авторизация успешна',
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        fullName: user.fullName,
        role: user.role.name
      }
    });
  } catch (error) {
    console.error('Ошибка при авторизации:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при авторизации пользователя'
    });
  }
};

// Получение данных текущего пользователя
export const getCurrentUser = async (req: Request, res: Response): Promise<void> => {
  try {
    // @ts-ignore - добавим пользователя в req через middleware
    const userId = req.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { role: true }
    });

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'Пользователь не найден'
      });
      return;
    }

    res.status(200).json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        fullName: user.fullName,
        role: user.role.name,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    });
  } catch (error) {
    console.error('Ошибка при получении данных пользователя:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при получении данных пользователя'
    });
  }
}; 