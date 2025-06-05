import { Router } from 'express';
import { register, login, getCurrentUser } from '../controllers/auth.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @route POST /api/auth/register
 * @desc Регистрация нового пользователя
 * @access Public
 */
router.post('/register', register);

/**
 * @route POST /api/auth/login
 * @desc Авторизация пользователя
 * @access Public
 */
router.post('/login', login);

/**
 * @route GET /api/auth/me
 * @desc Получение данных текущего пользователя
 * @access Private
 */
router.get('/me', authenticate, getCurrentUser);

export default router; 