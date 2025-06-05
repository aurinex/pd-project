import api from './axios';
import type { Route } from './routeService';

// Типы для событий
export interface Event {
  id: number;
  type: string;
  severity: string;
  message: string;
  droneId?: number;
  userId?: number;
  routeId?: number;
  createdAt: Date;
  updatedAt: Date;
}

// Типы для данных дронов
export interface Drone {
  id: number;
  name: string;
  model: string;
  serialNumber: string;
  status: 'ACTIVE' | 'IDLE' | 'MAINTENANCE' | 'OFFLINE';
  batteryLevel: number;
  latitude?: number;
  longitude?: number;
  altitude?: number;
  speed?: number;
  ownerId: number;
  createdAt: Date;
  updatedAt: Date;
  owner?: {
    id: number;
    username: string;
    email: string;
  };
  routes?: Route[];
  events?: Event[];
}

export interface DroneCreateData {
  name: string;
  model: string;
  serialNumber: string;
  status?: 'ACTIVE' | 'IDLE' | 'MAINTENANCE' | 'OFFLINE';
}

export interface DroneUpdateData {
  name?: string;
  model?: string;
  status?: 'ACTIVE' | 'IDLE' | 'MAINTENANCE' | 'OFFLINE';
  batteryLevel?: number;
  latitude?: number;
  longitude?: number;
  altitude?: number;
  speed?: number;
}

// Класс для работы с API дронов
class DroneService {
  // Метод для получения всех дронов
  async getAllDrones(): Promise<Drone[]> {
    const response = await api.get<{ success: boolean; count: number; data: Drone[] }>('/drones');
    return response.data.data;
  }
  
  // Метод для получения дрона по ID
  async getDroneById(id: number): Promise<Drone> {
    const response = await api.get<{ success: boolean; data: Drone }>(`/drones/${id}`);
    return response.data.data;
  }
  
  // Метод для создания нового дрона
  async createDrone(data: DroneCreateData): Promise<Drone> {
    const response = await api.post<{ success: boolean; message: string; data: Drone }>('/drones', data);
    return response.data.data;
  }
  
  // Метод для обновления данных дрона
  async updateDrone(id: number, data: DroneUpdateData): Promise<Drone> {
    const response = await api.put<{ success: boolean; message: string; data: Drone }>(`/drones/${id}`, data);
    return response.data.data;
  }
  
  // Метод для удаления дрона
  async deleteDrone(id: number): Promise<void> {
    await api.delete<{ success: boolean; message: string }>(`/drones/${id}`);
  }
}

export default new DroneService(); 