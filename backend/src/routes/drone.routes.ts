import { Router } from 'express';
import {
  getAllDrones,
  getDroneById,
  createDrone,
  updateDrone,
  deleteDrone
} from '../controllers/drone.controller';
import { authenticate, authorize, checkOwnership } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @route GET /api/drones
 * @desc Получение всех дронов
 * @access Private
 */
router.get('/', authenticate, getAllDrones);

/**
 * @route GET /api/drones/:id
 * @desc Получение дрона по ID
 * @access Private
 */
router.get('/:id', authenticate, getDroneById);

/**
 * @route POST /api/drones
 * @desc Создание нового дрона
 * @access Private (только для админа и оператора)
 */
router.post('/', authenticate, authorize(['ADMIN', 'OPERATOR']), createDrone);

/**
 * @route PUT /api/drones/:id
 * @desc Обновление данных дрона
 * @access Private (только для владельца или админа)
 */
router.put('/:id', authenticate, checkOwnership('drone'), updateDrone);

/**
 * @route DELETE /api/drones/:id
 * @desc Удаление дрона
 * @access Private (только для владельца или админа)
 */
router.delete('/:id', authenticate, checkOwnership('drone'), deleteDrone);

export default router; 