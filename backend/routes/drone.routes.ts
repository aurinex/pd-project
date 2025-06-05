import { Router } from 'express';
import prisma from '../database';

const router = Router();

// Получение списка всех дронов
router.get('/', async (req, res) => {
  try {
    const drones = await prisma.drone.findMany({
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            fullName: true
          }
        }
      }
    });
    
    res.json(drones);
  } catch (error) {
    console.error('Ошибка при получении списка дронов:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

// Получение информации о конкретном дроне по ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const droneId = parseInt(id);
    
    if (isNaN(droneId)) {
      return res.status(400).json({ message: 'Некорректный ID дрона' });
    }
    
    const drone = await prisma.drone.findUnique({
      where: { id: droneId },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            fullName: true
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
      return res.status(404).json({ message: 'Дрон не найден' });
    }
    
    res.json(drone);
  } catch (error) {
    console.error('Ошибка при получении информации о дроне:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

// Создание нового дрона
router.post('/', async (req, res) => {
  try {
    const { name, model, serialNumber, ownerId } = req.body;
    
    // Проверка обязательных полей
    if (!name || !model || !serialNumber || !ownerId) {
      return res.status(400).json({ 
        message: 'Необходимо указать название, модель, серийный номер и владельца дрона' 
      });
    }
    
    // Проверка существования пользователя
    const owner = await prisma.user.findUnique({
      where: { id: ownerId }
    });
    
    if (!owner) {
      return res.status(404).json({ message: 'Указанный пользователь не найден' });
    }
    
    // Проверка уникальности серийного номера
    const existingDrone = await prisma.drone.findUnique({
      where: { serialNumber }
    });
    
    if (existingDrone) {
      return res.status(409).json({ message: 'Дрон с таким серийным номером уже существует' });
    }
    
    // Создание нового дрона
    const newDrone = await prisma.drone.create({
      data: {
        name,
        model,
        serialNumber,
        status: 'IDLE',
        batteryLevel: 100,
        ownerId
      }
    });
    
    res.status(201).json(newDrone);
  } catch (error) {
    console.error('Ошибка при создании дрона:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

// Обновление информации о дроне
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const droneId = parseInt(id);
    
    if (isNaN(droneId)) {
      return res.status(400).json({ message: 'Некорректный ID дрона' });
    }
    
    const { name, model, status, batteryLevel, latitude, longitude, altitude, speed } = req.body;
    
    // Проверка существования дрона
    const existingDrone = await prisma.drone.findUnique({
      where: { id: droneId }
    });
    
    if (!existingDrone) {
      return res.status(404).json({ message: 'Дрон не найден' });
    }
    
    // Обновление информации о дроне
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
    
    res.json(updatedDrone);
  } catch (error) {
    console.error('Ошибка при обновлении информации о дроне:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

// Удаление дрона
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const droneId = parseInt(id);
    
    if (isNaN(droneId)) {
      return res.status(400).json({ message: 'Некорректный ID дрона' });
    }
    
    // Проверка существования дрона
    const existingDrone = await prisma.drone.findUnique({
      where: { id: droneId }
    });
    
    if (!existingDrone) {
      return res.status(404).json({ message: 'Дрон не найден' });
    }
    
    // Удаление дрона
    await prisma.drone.delete({
      where: { id: droneId }
    });
    
    res.json({ message: 'Дрон успешно удален' });
  } catch (error) {
    console.error('Ошибка при удалении дрона:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

export default router; 