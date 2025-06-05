import { PrismaClient } from '../src/generated/prisma';

// Инициализация клиента Prisma
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
});

// Функция для подключения к базе данных
export async function connectDB() {
  try {
    await prisma.$connect();
    console.log('База данных успешно подключена');
    return prisma;
  } catch (error) {
    console.error('Ошибка подключения к базе данных:', error);
    process.exit(1);
  }
}

// Функция для отключения от базы данных
export async function disconnectDB() {
  await prisma.$disconnect();
  console.log('Соединение с базой данных закрыто');
}

// Функция для заполнения базы данных начальными данными
export async function seedDB() {
  try {
    // Проверяем, есть ли уже роли в базе
    const rolesCount = await prisma.role.count();
    
    if (rolesCount === 0) {
      console.log('Заполнение базы данных начальными данными...');
      
      // Создаем роли
      const adminRole = await prisma.role.create({
        data: {
          name: 'ADMIN',
          description: 'Администратор системы',
        },
      });
      
      const operatorRole = await prisma.role.create({
        data: {
          name: 'OPERATOR',
          description: 'Оператор дронов',
        },
      });
      
      const viewerRole = await prisma.role.create({
        data: {
          name: 'VIEWER',
          description: 'Наблюдатель с ограниченным доступом',
        },
      });
      
      // Создаем тестового администратора
      const adminUser = await prisma.user.create({
        data: {
          username: 'admin',
          email: 'admin@skypatrol.ru',
          passwordHash: '$2b$10$mLEI4YT0rZLvXzW8FS4Xc.uLtPXQQZGxdC5YjQs7LWKlkCJ9bQAjG', // admin123
          fullName: 'Администратор Системы',
          roleId: adminRole.id,
          isActive: true,
        },
      });
      
      // Создаем тестовых операторов
      await prisma.user.create({
        data: {
          username: 'operator1',
          email: 'operator1@skypatrol.ru',
          passwordHash: '$2b$10$mLEI4YT0rZLvXzW8FS4Xc.uLtPXQQZGxdC5YjQs7LWKlkCJ9bQAjG', // admin123
          fullName: 'Иванов Иван Иванович',
          roleId: operatorRole.id,
          isActive: true,
        },
      });
      
      await prisma.user.create({
        data: {
          username: 'operator2',
          email: 'operator2@skypatrol.ru',
          passwordHash: '$2b$10$mLEI4YT0rZLvXzW8FS4Xc.uLtPXQQZGxdC5YjQs7LWKlkCJ9bQAjG', // admin123
          fullName: 'Петров Петр Петрович',
          roleId: operatorRole.id,
          isActive: true,
        },
      });
      
      // Создаем тестового наблюдателя
      await prisma.user.create({
        data: {
          username: 'viewer1',
          email: 'viewer1@skypatrol.ru',
          passwordHash: '$2b$10$mLEI4YT0rZLvXzW8FS4Xc.uLtPXQQZGxdC5YjQs7LWKlkCJ9bQAjG', // admin123
          fullName: 'Сидоров Сидор Сидорович',
          roleId: viewerRole.id,
          isActive: true,
        },
      });
      
      // Создаем тестовые дроны
      const drone1 = await prisma.drone.create({
        data: {
          name: 'Патрульный-1',
          model: 'DJI Mavic 3',
          serialNumber: 'DJI1234567890',
          status: 'ACTIVE',
          batteryLevel: 78,
          latitude: 55.751244,
          longitude: 37.618423,
          altitude: 120,
          speed: 15,
          ownerId: adminUser.id,
        },
      });
      
      const drone2 = await prisma.drone.create({
        data: {
          name: 'Разведчик-2',
          model: 'Autel EVO II',
          serialNumber: 'AUTEL9876543210',
          status: 'IDLE',
          batteryLevel: 92,
          latitude: 55.755814,
          longitude: 37.617635,
          ownerId: adminUser.id,
        },
      });
      
      // Создаем тестовый маршрут
      await prisma.route.create({
        data: {
          name: 'Маршрут патрулирования №1',
          description: 'Патрулирование центральной части города',
          coordinates: [
            [55.751244, 37.618423],
            [55.752, 37.619],
            [55.753, 37.620],
            [55.754, 37.621],
            [55.755, 37.622],
            [55.756, 37.623],
            [55.757, 37.624]
          ],
          createdBy: adminUser.id,
          droneId: drone1.id,
        },
      });
      
      // Создаем тестовые события
      await prisma.event.create({
        data: {
          type: 'ALERT',
          message: 'Обнаружено массовое скопление людей в районе Пушкинской площади',
          severity: 'HIGH',
          droneId: drone1.id,
          userId: adminUser.id,
        },
      });
      
      await prisma.event.create({
        data: {
          type: 'DETECTION',
          message: 'Распознан разыскиваемый автомобиль: A123BC',
          severity: 'MEDIUM',
          droneId: drone1.id,
        },
      });
      
      await prisma.event.create({
        data: {
          type: 'SYSTEM',
          message: 'БПЛА-102 возвращается на базу. Низкий заряд батареи.',
          severity: 'LOW',
          droneId: drone2.id,
        },
      });
      
      console.log('База данных успешно заполнена начальными данными');
    } else {
      console.log('База данных уже содержит данные, пропускаем заполнение');
    }
  } catch (error) {
    console.error('Ошибка при заполнении базы данных:', error);
  }
}

// Экспортируем экземпляр Prisma для использования в других модулях
export default prisma; 