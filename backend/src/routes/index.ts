import { Router } from 'express';
import authRoutes from './auth.routes';
import droneRoutes from './drone.routes';
import routeRoutes from './route.routes';
// Другие маршруты будут добавлены позже
// import userRoutes from './user.routes';
// import eventRoutes from './event.routes';

const router = Router();

// Подключаем маршруты
router.use('/auth', authRoutes);
router.use('/drones', droneRoutes);
router.use('/routes', routeRoutes);
// router.use('/users', userRoutes);
// router.use('/events', eventRoutes);

export default router; 