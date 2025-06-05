import { Request, Response } from 'express';
import { PrismaClient } from '../../src/generated/prisma';

const prisma = new PrismaClient();

// Получение всех маршрутов
export const getAllRoutes = async (req: Request, res: Response): Promise<void> => {
  try {
    const routes = await prisma.route.findMany({
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        },
        drone: {
          select: {
            id: true,
            name: true,
            model: true,
            status: true
          }
        }
      }
    });

    res.status(200).json({
      success: true,
      count: routes.length,
      data: routes
    });
  } catch (error) {
    console.error('Ошибка при получении списка маршрутов:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при получении списка маршрутов'
    });
  }
};

// Получение маршрута по ID
export const getRouteById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const routeId = parseInt(id);

    if (isNaN(routeId)) {
      res.status(400).json({
        success: false,
        message: 'Некорректный ID маршрута'
      });
      return;
    }

    const route = await prisma.route.findUnique({
      where: { id: routeId },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        },
        drone: {
          select: {
            id: true,
            name: true,
            model: true,
            status: true
          }
        },
        flights: {
          take: 5,
          orderBy: {
            startTime: 'desc'
          }
        }
      }
    });

    if (!route) {
      res.status(404).json({
        success: false,
        message: 'Маршрут не найден'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: route
    });
  } catch (error) {
    console.error('Ошибка при получении данных маршрута:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при получении данных маршрута'
    });
  }
};

// Создание нового маршрута
export const createRoute = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, coordinates, droneId } = req.body;

    // Проверка обязательных полей
    if (!name || !coordinates) {
      res.status(400).json({
        success: false,
        message: 'Имя и координаты маршрута обязательны'
      });
      return;
    }

    // @ts-ignore - пользователь добавляется через middleware
    const userId = req.user.id;

    // Проверка формата координат
    let parsedCoordinates;
    try {
      if (typeof coordinates === 'string') {
        parsedCoordinates = JSON.parse(coordinates);
      } else {
        parsedCoordinates = coordinates;
      }
      
      if (!Array.isArray(parsedCoordinates)) {
        throw new Error('Координаты должны быть массивом');
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Некорректный формат координат'
      });
      return;
    }

    // Проверка существования дрона, если указан
    if (droneId) {
      const drone = await prisma.drone.findUnique({
        where: { id: parseInt(droneId) }
      });

      if (!drone) {
        res.status(404).json({
          success: false,
          message: 'Указанный дрон не найден'
        });
        return;
      }
    }

    const route = await prisma.route.create({
      data: {
        name,
        description,
        coordinates: parsedCoordinates,
        createdBy: userId,
        droneId: droneId ? parseInt(droneId) : undefined
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        },
        drone: true
      }
    });

    res.status(201).json({
      success: true,
      message: 'Маршрут успешно создан',
      data: route
    });
  } catch (error) {
    console.error('Ошибка при создании маршрута:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при создании маршрута'
    });
  }
};

// Обновление маршрута
export const updateRoute = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const routeId = parseInt(id);
    const { name, description, coordinates, droneId } = req.body;

    if (isNaN(routeId)) {
      res.status(400).json({
        success: false,
        message: 'Некорректный ID маршрута'
      });
      return;
    }

    // Проверка существования маршрута
    const existingRoute = await prisma.route.findUnique({
      where: { id: routeId }
    });

    if (!existingRoute) {
      res.status(404).json({
        success: false,
        message: 'Маршрут не найден'
      });
      return;
    }

    // Проверка формата координат, если они предоставлены
    let parsedCoordinates;
    if (coordinates) {
      try {
        if (typeof coordinates === 'string') {
          parsedCoordinates = JSON.parse(coordinates);
        } else {
          parsedCoordinates = coordinates;
        }
        
        if (!Array.isArray(parsedCoordinates)) {
          throw new Error('Координаты должны быть массивом');
        }
      } catch (error) {
        res.status(400).json({
          success: false,
          message: 'Некорректный формат координат'
        });
        return;
      }
    }

    // Проверка существования дрона, если указан
    if (droneId) {
      const drone = await prisma.drone.findUnique({
        where: { id: parseInt(droneId) }
      });

      if (!drone) {
        res.status(404).json({
          success: false,
          message: 'Указанный дрон не найден'
        });
        return;
      }
    }

    const updatedRoute = await prisma.route.update({
      where: { id: routeId },
      data: {
        name: name !== undefined ? name : undefined,
        description: description !== undefined ? description : undefined,
        coordinates: coordinates ? parsedCoordinates : undefined,
        droneId: droneId ? parseInt(droneId) : undefined
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        },
        drone: true
      }
    });

    res.status(200).json({
      success: true,
      message: 'Маршрут успешно обновлен',
      data: updatedRoute
    });
  } catch (error) {
    console.error('Ошибка при обновлении маршрута:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при обновлении маршрута'
    });
  }
};

// Удаление маршрута
export const deleteRoute = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const routeId = parseInt(id);

    if (isNaN(routeId)) {
      res.status(400).json({
        success: false,
        message: 'Некорректный ID маршрута'
      });
      return;
    }

    // Проверка существования маршрута
    const existingRoute = await prisma.route.findUnique({
      where: { id: routeId }
    });

    if (!existingRoute) {
      res.status(404).json({
        success: false,
        message: 'Маршрут не найден'
      });
      return;
    }

    // Удаление маршрута
    await prisma.route.delete({
      where: { id: routeId }
    });

    res.status(200).json({
      success: true,
      message: 'Маршрут успешно удален'
    });
  } catch (error) {
    console.error('Ошибка при удалении маршрута:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при удалении маршрута'
    });
  }
}; 