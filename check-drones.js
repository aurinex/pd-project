// Скрипт для проверки дронов в базе данных
const { PrismaClient } = require('./backend/src/generated/prisma');
const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Дроны в базе данных:');
    const drones = await prisma.drone.findMany();
    console.log(JSON.stringify(drones, null, 2));
    
    console.log('\nМаршруты в базе данных:');
    const routes = await prisma.route.findMany();
    console.log(JSON.stringify(routes, null, 2));
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  }); 