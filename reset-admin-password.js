// Скрипт для сброса пароля администратора
const { PrismaClient } = require('./backend/src/generated/prisma');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function resetPassword() {
  try {
    const email = 'admin@skypatrol.ru';
    const newPassword = 'admin123';
    
    console.log(`Сброс пароля для пользователя с email ${email}...`);
    
    // Проверяем существование пользователя
    const user = await prisma.user.findUnique({
      where: { email }
    });
    
    if (!user) {
      console.log(`Пользователь с email ${email} не найден`);
      return;
    }
    
    // Хешируем новый пароль
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(newPassword, saltRounds);
    
    // Обновляем пароль
    await prisma.user.update({
      where: { email },
      data: { passwordHash }
    });
    
    console.log(`Пароль для пользователя ${user.username} (${email}) успешно обновлен на '${newPassword}'`);
    
    // Проверяем, что пароль действительно работает
    const hashedPassword = await prisma.user.findUnique({
      where: { email },
      select: { passwordHash: true }
    });
    
    const isValid = await bcrypt.compare(newPassword, hashedPassword.passwordHash);
    console.log(`Проверка нового пароля: ${isValid ? 'успешно' : 'ошибка'}`);
  } catch (error) {
    console.error('Ошибка при сбросе пароля:', error);
  } finally {
    await prisma.$disconnect();
  }
}

resetPassword()
  .catch(e => {
    console.error(e);
    process.exit(1);
  }); 