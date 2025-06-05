import api from './axios';

// Типы для данных телеметрии
export interface Telemetry {
  timestamp: number;
  position: [number, number, number]; // [lat, lng, altitude]
  speed: number;
  batteryLevel: number;
  heading: number;
  [key: string]: unknown; // Дополнительные данные телеметрии
}

// Типы для данных маршрутов
export interface Route {
  id: number;
  name: string;
  description?: string;
  coordinates: [number, number][]; // Массив координат [lat, lng]
  createdBy: number;
  droneId?: number;
  createdAt: Date;
  updatedAt: Date;
  user?: {
    id: number;
    username: string;
    email: string;
  };
  drone?: {
    id: number;
    name: string;
    model: string;
    status: string;
  };
  flights?: FlightHistory[];
}

export interface FlightHistory {
  id: number;
  droneId: number;
  routeId?: number;
  pilotId: number;
  startTime: Date;
  endTime?: Date;
  distance?: number;
  maxAltitude?: number;
  maxSpeed?: number;
  telemetry?: Telemetry[]; // Данные телеметрии
  createdAt: Date;
  updatedAt: Date;
}

export interface RouteCreateData {
  name: string;
  description?: string;
  coordinates: [number, number][]; // Массив координат [lat, lng]
  droneId?: number;
}

export interface RouteUpdateData {
  name?: string;
  description?: string;
  coordinates?: [number, number][]; // Массив координат [lat, lng]
  droneId?: number;
}

// Класс для работы с API маршрутов
class RouteService {
  // Метод для получения всех маршрутов
  async getAllRoutes(): Promise<Route[]> {
    const response = await api.get<{ success: boolean; count: number; data: Route[] }>('/routes');
    return response.data.data;
  }
  
  // Метод для получения маршрута по ID
  async getRouteById(id: number): Promise<Route> {
    const response = await api.get<{ success: boolean; data: Route }>(`/routes/${id}`);
    return response.data.data;
  }
  
  // Метод для создания нового маршрута
  async createRoute(data: RouteCreateData): Promise<Route> {
    const response = await api.post<{ success: boolean; message: string; data: Route }>('/routes', data);
    return response.data.data;
  }
  
  // Метод для обновления данных маршрута
  async updateRoute(id: number, data: RouteUpdateData): Promise<Route> {
    const response = await api.put<{ success: boolean; message: string; data: Route }>(`/routes/${id}`, data);
    return response.data.data;
  }
  
  // Метод для удаления маршрута
  async deleteRoute(id: number): Promise<void> {
    await api.delete<{ success: boolean; message: string }>(`/routes/${id}`);
  }
}

export default new RouteService(); 