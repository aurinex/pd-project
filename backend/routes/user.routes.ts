import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken, isAdmin } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

/**
 * @route GET /api/users
 * @desc Получить всех пользователей
 * @access Private (только для администраторов)
 */
router.get('/', authenticateToken, isAdmin, async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            drones: true,
            routes: true
          }
        }
      }
    });
    
    res.json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при получении пользователей',
      error: (error as Error).message
    });
  }
});

/**
 * @route GET /api/users/:id
 * @desc Получить пользователя по ID
 * @access Private
 */
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = Number(id);
    
    // Проверка прав: пользователь может получить только свои данные или админ может получить любые данные
    if (req.user?.id !== userId && req.user?.role !== 'ADMIN') {
      return res.status(403).json({
        success: false,
        message: 'Недостаточно прав для просмотра данных другого пользователя'
      });
    }
    
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        drones: {
          select: {
            id: true,
            name: true,
            model: true,
            status: true
          }
        },
        routes: {
          select: {
            id: true,
            name: true,
            status: true
          }
        }
      }
    });
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Пользователь не найден'
      });
    }
    
    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Ошибка при получении пользователя:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при получении пользователя',
      error: (error as Error).message
    });
  }
});

/**
 * @route PUT /api/users/:id
 * @desc Обновить данные пользователя
 * @access Private
 */
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = Number(id);
    const { username, email, role } = req.body;
    
    // Проверка прав: пользователь может изменить только свои данные или админ может изменить любые данные
    if (req.user?.id !== userId && req.user?.role !== 'ADMIN') {
      return res.status(403).json({
        success: false,
        message: 'Недостаточно прав для изменения данных другого пользователя'
      });
    }
    
    // Только админ может изменить роль
    if (role && req.user?.role !== 'ADMIN') {
      return res.status(403).json({
        success: false,
        message: 'Недостаточно прав для изменения роли пользователя'
      });
    }
    
    // Проверяем, существует ли пользователь
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Пользователь не найден'
      });
    }
    
    // Обновляем данные пользователя
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        username: username || user.username,
        email: email || user.email,
        role: role || user.role
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    res.json({
      success: true,
      message: 'Данные пользователя успешно обновлены',
      data: updatedUser
    });
  } catch (error) {
    console.error('Ошибка при обновлении пользователя:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при обновлении пользователя',
      error: (error as Error).message
    });
  }
});

/**
 * @route DELETE /api/users/:id
 * @desc Удалить пользователя
 * @access Private (только для администраторов)
 */
router.delete('/:id', authenticateToken, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = Number(id);
    
    // Проверяем, существует ли пользователь
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Пользователь не найден'
      });
    }
    
    // Удаляем пользователя
    await prisma.user.delete({
      where: { id: userId }
    });
    
    res.json({
      success: true,
      message: 'Пользователь успешно удален'
    });
  } catch (error) {
    console.error('Ошибка при удалении пользователя:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при удалении пользователя',
      error: (error as Error).message
    });
  }
});

export default router; 