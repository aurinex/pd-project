import api from './axios';

export interface Event {
  id: number;
  droneId: number;
  type: 'warning' | 'error' | 'info' | 'critical';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: Date;
  resolved: boolean;
  location?: [number, number]; // [lng, lat]
  createdAt: Date;
  updatedAt: Date;
  drone?: {
    id: number;
    name: string;
    model: string;
  };
}

export interface EventCreateData {
  droneId: number;
  type: 'warning' | 'error' | 'info' | 'critical';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  resolved?: boolean;
  location?: [number, number]; // [lng, lat]
}

export interface EventUpdateData {
  type?: 'warning' | 'error' | 'info' | 'critical';
  severity?: 'low' | 'medium' | 'high' | 'critical';
  message?: string;
  resolved?: boolean;
}

export interface EventFilterParams {
  droneId?: number;
  type?: string;
  severity?: string;
  resolved?: boolean;
  startDate?: Date;
  endDate?: Date;
}

class EventService {
  // Получить все события
  async getAllEvents(filters?: EventFilterParams): Promise<Event[]> {
    const response = await api.get<{ success: boolean; count: number; data: Event[] }>('/events', {
      params: filters
    });
    return response.data.data;
  }

  // Получить события для конкретного дрона
  async getEventsByDroneId(droneId: number): Promise<Event[]> {
    const response = await api.get<{ success: boolean; count: number; data: Event[] }>(`/drones/${droneId}/events`);
    return response.data.data;
  }

  // Получить событие по ID
  async getEventById(id: number): Promise<Event> {
    const response = await api.get<{ success: boolean; data: Event }>(`/events/${id}`);
    return response.data.data;
  }

  // Создать новое событие
  async createEvent(data: EventCreateData): Promise<Event> {
    const response = await api.post<{ success: boolean; message: string; data: Event }>('/events', data);
    return response.data.data;
  }

  // Обновить событие
  async updateEvent(id: number, data: EventUpdateData): Promise<Event> {
    const response = await api.put<{ success: boolean; message: string; data: Event }>(`/events/${id}`, data);
    return response.data.data;
  }

  // Пометить событие как решенное
  async resolveEvent(id: number): Promise<Event> {
    return this.updateEvent(id, { resolved: true });
  }

  // Удалить событие
  async deleteEvent(id: number): Promise<void> {
    await api.delete<{ success: boolean; message: string }>(`/events/${id}`);
  }
}

export default new EventService(); 