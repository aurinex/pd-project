import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

/**
 * @route GET /api/events
 * @desc Получить все события с возможностью фильтрации
 * @access Private
 */
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { droneId, type, severity, resolved, startDate, endDate } = req.query;
    
    // Формируем объект фильтрации для Prisma
    const filter: any = {};
    
    // Добавляем условия фильтрации, если они заданы
    if (droneId) filter.droneId = Number(droneId);
    if (type) filter.type = type as string;
    if (severity) filter.severity = severity as string;
    if (resolved !== undefined) filter.resolved = resolved === 'true';
    
    // Фильтрация по дате
    if (startDate || endDate) {
      filter.createdAt = {};
      if (startDate) filter.createdAt.gte = new Date(startDate as string);
      if (endDate) filter.createdAt.lte = new Date(endDate as string);
    }
    
    // Получаем события с учетом фильтров
    const events = await prisma.event.findMany({
      where: filter,
      include: {
        drone: {
          select: {
            id: true,
            name: true,
            model: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    res.json({
      success: true,
      count: events.length,
      data: events
    });
  } catch (error) {
    console.error('Ошибка при получении событий:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при получении событий',
      error: (error as Error).message
    });
  }
});

/**
 * @route GET /api/events/:id
 * @desc Получить событие по ID
 * @access Private
 */
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    
    const event = await prisma.event.findUnique({
      where: { id: Number(id) },
      include: {
        drone: {
          select: {
            id: true,
            name: true,
            model: true
          }
        }
      }
    });
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Событие не найдено'
      });
    }
    
    res.json({
      success: true,
      data: event
    });
  } catch (error) {
    console.error('Ошибка при получении события:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при получении события',
      error: (error as Error).message
    });
  }
});

/**
 * @route POST /api/events
 * @desc Создать новое событие
 * @access Private
 */
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { droneId, type, severity, message, resolved, location } = req.body;
    
    // Проверяем, существует ли дрон
    const drone = await prisma.drone.findUnique({
      where: { id: droneId }
    });
    
    if (!drone) {
      return res.status(404).json({
        success: false,
        message: 'Дрон не найден'
      });
    }
    
    // Создаем новое событие
    const newEvent = await prisma.event.create({
      data: {
        droneId,
        type,
        severity,
        message,
        resolved: resolved || false,
        location: location ? JSON.stringify(location) : null
      }
    });
    
    res.status(201).json({
      success: true,
      message: 'Событие успешно создано',
      data: newEvent
    });
  } catch (error) {
    console.error('Ошибка при создании события:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при создании события',
      error: (error as Error).message
    });
  }
});

/**
 * @route PUT /api/events/:id
 * @desc Обновить событие
 * @access Private
 */
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { type, severity, message, resolved } = req.body;
    
    // Проверяем, существует ли событие
    const event = await prisma.event.findUnique({
      where: { id: Number(id) }
    });
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Событие не найдено'
      });
    }
    
    // Обновляем событие
    const updatedEvent = await prisma.event.update({
      where: { id: Number(id) },
      data: {
        type: type || event.type,
        severity: severity || event.severity,
        message: message || event.message,
        resolved: resolved !== undefined ? resolved : event.resolved
      }
    });
    
    res.json({
      success: true,
      message: 'Событие успешно обновлено',
      data: updatedEvent
    });
  } catch (error) {
    console.error('Ошибка при обновлении события:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при обновлении события',
      error: (error as Error).message
    });
  }
});

/**
 * @route DELETE /api/events/:id
 * @desc Удалить событие
 * @access Private
 */
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    
    // Проверяем, существует ли событие
    const event = await prisma.event.findUnique({
      where: { id: Number(id) }
    });
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Событие не найдено'
      });
    }
    
    // Удаляем событие
    await prisma.event.delete({
      where: { id: Number(id) }
    });
    
    res.json({
      success: true,
      message: 'Событие успешно удалено'
    });
  } catch (error) {
    console.error('Ошибка при удалении события:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при удалении события',
      error: (error as Error).message
    });
  }
});

export default router; 