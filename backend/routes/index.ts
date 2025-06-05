import { Router } from 'express';
import authRoutes from './auth.routes';
import droneRoutes from './drone.routes';
import routeRoutes from './route.routes';
import userRoutes from './user.routes';
import eventRoutes from './event.routes';

const router = Router();

// Регистрируем маршруты
router.use('/auth', authRoutes);
router.use('/drones', droneRoutes);
router.use('/routes', routeRoutes);
router.use('/users', userRoutes);
router.use('/events', eventRoutes);

export default router; 