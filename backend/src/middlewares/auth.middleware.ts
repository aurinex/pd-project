import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../src/generated/prisma';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'skypatrol-secret-key';

// Расширяем типы для Request
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
        role: string;
      };
    }
  }
}

// Middleware для проверки аутентификации
export const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Получаем токен из заголовка Authorization
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        success: false,
        message: 'Требуется авторизация'
      });
      return;
    }
    
    const token = authHeader.split(' ')[1];
    
    // Проверяем токен
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: number;
      email: string;
      role: string;
    };
    
    // Добавляем пользователя в объект запроса
    req.user = decoded;
    
    next();
  } catch (error) {
    console.error('Ошибка аутентификации:', error);
    res.status(401).json({
      success: false,
      message: 'Недействительный токен'
    });
  }
};

// Middleware для проверки роли
export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: 'Требуется авторизация'
      });
      return;
    }
    
    // Преобразуем роли к верхнему регистру для сравнения независимо от регистра
    const userRole = req.user.role.toUpperCase();
    const allowedRoles = roles.map(role => role.toUpperCase());
    
    if (!allowedRoles.includes(userRole)) {
      res.status(403).json({
        success: false,
        message: 'Доступ запрещен'
      });
      return;
    }
    
    next();
  };
};

// Middleware для проверки владельца ресурса
export const checkOwnership = (resourceType: 'drone' | 'route') => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (!req.user) {
        res.status(401).json({
          success: false,
          message: 'Требуется авторизация'
        });
        return;
      }
      
      const resourceId = parseInt(req.params.id);
      
      if (isNaN(resourceId)) {
        res.status(400).json({
          success: false,
          message: 'Некорректный ID ресурса'
        });
        return;
      }
      
      // Если пользователь администратор, разрешаем доступ
      if (req.user.role.toUpperCase() === 'ADMIN') {
        next();
        return;
      }
      
      let isOwner = false;
      
      if (resourceType === 'drone') {
        const drone = await prisma.drone.findUnique({
          where: { id: resourceId }
        });
        
        isOwner = drone?.ownerId === req.user.id;
      } else if (resourceType === 'route') {
        const route = await prisma.route.findUnique({
          where: { id: resourceId }
        });
        
        isOwner = route?.createdBy === req.user.id;
      }
      
      if (!isOwner) {
        res.status(403).json({
          success: false,
          message: 'Доступ запрещен: вы не являетесь владельцем ресурса'
        });
        return;
      }
      
      next();
    } catch (error) {
      console.error('Ошибка при проверке владельца ресурса:', error);
      res.status(500).json({
        success: false,
        message: 'Внутренняя ошибка сервера'
      });
    }
  };
}; 