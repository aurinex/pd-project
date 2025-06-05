import { Request, Response } from 'express';
import { PrismaClient } from '../../src/generated/prisma';

const prisma = new PrismaClient();

// Получение всех дронов
export const getAllDrones = async (req: Request, res: Response): Promise<void> => {
  try {
    const drones = await prisma.drone.findMany({
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    });

    res.status(200).json({
      success: true,
      count: drones.length,
      data: drones
    });
  } catch (error) {
    console.error('Ошибка при получении списка дронов:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при получении списка дронов'
    });
  }
};

// Получение одного дрона по ID
export const getDroneById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const droneId = parseInt(id);

    if (isNaN(droneId)) {
      res.status(400).json({
        success: false,
        message: 'Некорректный ID дрона'
      });
      return;
    }

    const drone = await prisma.drone.findUnique({
      where: { id: droneId },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            email: true
          }
        },
        routes: true,
        events: {
          take: 10,
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });

    if (!drone) {
      res.status(404).json({
        success: false,
        message: 'Дрон не найден'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: drone
    });
  } catch (error) {
    console.error('Ошибка при получении данных дрона:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при получении данных дрона'
    });
  }
};

// Создание нового дрона
export const createDrone = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, model, serialNumber, status } = req.body;

    // Проверка обязательных полей
    if (!name || !model || !serialNumber) {
      res.status(400).json({
        success: false,
        message: 'Имя, модель и серийный номер обязательны'
      });
      return;
    }

    // @ts-ignore - пользователь добавляется через middleware
    const ownerId = req.user.id;

    // Проверка уникальности серийного номера
    const existingDrone = await prisma.drone.findUnique({
      where: { serialNumber }
    });

    if (existingDrone) {
      res.status(400).json({
        success: false,
        message: 'Дрон с таким серийным номером уже существует'
      });
      return;
    }

    const drone = await prisma.drone.create({
      data: {
        name,
        model,
        serialNumber,
        status: status || 'IDLE',
        batteryLevel: 100,
        ownerId
      }
    });

    res.status(201).json({
      success: true,
      message: 'Дрон успешно создан',
      data: drone
    });
  } catch (error) {
    console.error('Ошибка при создании дрона:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при создании дрона'
    });
  }
};

// Обновление данных дрона
export const updateDrone = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const droneId = parseInt(id);
    const { name, model, status, batteryLevel, latitude, longitude, altitude, speed } = req.body;

    if (isNaN(droneId)) {
      res.status(400).json({
        success: false,
        message: 'Некорректный ID дрона'
      });
      return;
    }

    // Проверка существования дрона
    const existingDrone = await prisma.drone.findUnique({
      where: { id: droneId }
    });

    if (!existingDrone) {
      res.status(404).json({
        success: false,
        message: 'Дрон не найден'
      });
      return;
    }

    // Обновление данных дрона
    const updatedDrone = await prisma.drone.update({
      where: { id: droneId },
      data: {
        name: name !== undefined ? name : undefined,
        model: model !== undefined ? model : undefined,
        status: status !== undefined ? status : undefined,
        batteryLevel: batteryLevel !== undefined ? batteryLevel : undefined,
        latitude: latitude !== undefined ? latitude : undefined,
        longitude: longitude !== undefined ? longitude : undefined,
        altitude: altitude !== undefined ? altitude : undefined,
        speed: speed !== undefined ? speed : undefined
      }
    });

    res.status(200).json({
      success: true,
      message: 'Данные дрона успешно обновлены',
      data: updatedDrone
    });
  } catch (error) {
    console.error('Ошибка при обновлении данных дрона:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при обновлении данных дрона'
    });
  }
};

// Удаление дрона
export const deleteDrone = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const droneId = parseInt(id);

    if (isNaN(droneId)) {
      res.status(400).json({
        success: false,
        message: 'Некорректный ID дрона'
      });
      return;
    }

    // Проверка существования дрона
    const existingDrone = await prisma.drone.findUnique({
      where: { id: droneId }
    });

    if (!existingDrone) {
      res.status(404).json({
        success: false,
        message: 'Дрон не найден'
      });
      return;
    }

    // Удаление дрона
    await prisma.drone.delete({
      where: { id: droneId }
    });

    res.status(200).json({
      success: true,
      message: 'Дрон успешно удален'
    });
  } catch (error) {
    console.error('Ошибка при удалении дрона:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при удалении дрона'
    });
  }
}; 