// Скрипт для проверки авторизации
const { PrismaClient } = require('./backend/src/generated/prisma');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function testAuth(email, password) {
  try {
    console.log(`\nПроверка авторизации для email: ${email}, password: ${password}`);
    
    // Поиск пользователя
    console.log('Поиск пользователя по email...');
    const user = await prisma.user.findUnique({
      where: { email },
      include: { role: true }
    });

    if (!user) {
      console.log('❌ Пользователь не найден');
      return;
    }

    console.log('✅ Пользователь найден:', { 
      id: user.id, 
      email: user.email, 
      username: user.username,
      role: user.role.name
    });

    // Проверка пароля
    console.log('Проверка пароля...');
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      console.log('❌ Неверный пароль');
      return;
    }

    console.log('✅ Пароль верный, авторизация успешна');
    return user;
  } catch (error) {
    console.error('Ошибка при проверке авторизации:', error);
  }
}

async function main() {
  try {
    // Тест 1: email "admin", password "admin123"
    await testAuth('admin', 'admin123');
    
    // Тест 2: email "admin@skypatrol.ru", password "admin123"
    await testAuth('admin@skypatrol.ru', 'admin123');
    
    // Тест 3: email "admin@skypatrol.ru", password "wrong"
    await testAuth('admin@skypatrol.ru', 'wrong');
  } catch (error) {
    console.error('Ошибка при выполнении тестов:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  }); 