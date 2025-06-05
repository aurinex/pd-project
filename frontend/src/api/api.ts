import axios from 'axios';

// Базовый URL API
const API_URL = 'http://localhost:5000/api';

// Создаем экземпляр axios с базовыми настройками
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Интерцептор для добавления токена авторизации к запросам
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Типы данных
export interface User {
  username: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface Drone {
  id: number;
  name: string;
  status: 'active' | 'returning' | 'standby' | 'maintenance';
  battery: number;
  speed: number;
  altitude: number;
  location: [number, number];
  mission: string;
}

export interface Event {
  id: number;
  type: 'alert' | 'detection' | 'system';
  message: string;
  time: string;
}

export interface Stats {
  activeDrones: number;
  totalMissions: number;
  detections: number;
  alerts: number;
  availableDrones: number;
  maintenanceDrones: number;
}

// API методы
export const authAPI = {
  login: async (username: string, password: string): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', { username, password });
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('token');
  },
};

export const dronesAPI = {
  getAll: async (): Promise<Drone[]> => {
    const response = await api.get<Drone[]>('/drones');
    return response.data;
  },
  getById: async (id: number): Promise<Drone> => {
    const response = await api.get<Drone>(`/drones/${id}`);
    return response.data;
  },
  sendCommand: async (id: number, command: string, params?: any): Promise<any> => {
    const response = await api.post(`/drones/${id}/command`, { command, ...params });
    return response.data;
  },
};

export const eventsAPI = {
  getRecent: async (): Promise<Event[]> => {
    const response = await api.get<Event[]>('/events');
    return response.data;
  },
};

export const statsAPI = {
  getOverview: async (): Promise<Stats> => {
    const response = await api.get<Stats>('/stats');
    return response.data;
  },
};

export const alertsAPI = {
  send: async (data: any): Promise<any> => {
    const response = await api.post('/alerts', data);
    return response.data;
  },
};

export default api; 