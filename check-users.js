// Скрипт для проверки пользователей в базе данных
const { PrismaClient } = require('./backend/src/generated/prisma');
const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Пользователи в базе данных:');
    const users = await prisma.user.findMany();
    console.log(JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  }); 