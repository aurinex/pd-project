import { Router } from 'express';
import {
  getAllRoutes,
  getRouteById,
  createRoute,
  updateRoute,
  deleteRoute
} from '../controllers/route.controller';
import { authenticate, authorize, checkOwnership } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @route GET /api/routes
 * @desc Получение всех маршрутов
 * @access Private
 */
router.get('/', authenticate, getAllRoutes);

/**
 * @route GET /api/routes/:id
 * @desc Получение маршрута по ID
 * @access Private
 */
router.get('/:id', authenticate, getRouteById);

/**
 * @route POST /api/routes
 * @desc Создание нового маршрута
 * @access Private
 */
router.post('/', authenticate, createRoute);

/**
 * @route PUT /api/routes/:id
 * @desc Обновление маршрута
 * @access Private (только для владельца или админа)
 */
router.put('/:id', authenticate, checkOwnership('route'), updateRoute);

/**
 * @route DELETE /api/routes/:id
 * @desc Удаление маршрута
 * @access Private (только для владельца или админа)
 */
router.delete('/:id', authenticate, checkOwnership('route'), deleteRoute);

export default router; 