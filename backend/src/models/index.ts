// Типы данных для моделей, соответствующие схеме Prisma

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  roleId: string;
  role?: Role;
  createdAt: Date;
  updatedAt: Date;
  routes?: Route[];
  events?: Event[];
}

export interface Role {
  id: string;
  name: string;
  users?: User[];
}

export interface Drone {
  id: string;
  name: string;
  model: string;
  status: string;
  batteryLevel: number;
  latitude: number;
  longitude: number;
  altitude: number;
  createdAt: Date;
  updatedAt: Date;
  routes?: Route[];
  events?: Event[];
}

export interface Route {
  id: string;
  name: string;
  description: string;
  coordinates: string; // JSON строка с координатами
  userId: string;
  droneId: string;
  user?: User;
  drone?: Drone;
  createdAt: Date;
  updatedAt: Date;
  events?: Event[];
}

export interface Event {
  id: string;
  type: string;
  severity: string;
  message: string;
  latitude: number;
  longitude: number;
  droneId?: string;
  userId?: string;
  routeId?: string;
  drone?: Drone;
  user?: User;
  route?: Route;
  createdAt: Date;
  updatedAt: Date;
}

// Перечисления для статусов и типов
export enum DroneStatus {
  IDLE = 'IDLE',
  FLYING = 'FLYING',
  CHARGING = 'CHARGING',
  MAINTENANCE = 'MAINTENANCE',
  OFFLINE = 'OFFLINE'
}

export enum EventType {
  INFO = 'INFO',
  WARNING = 'WARNING',
  ALERT = 'ALERT',
  ERROR = 'ERROR'
}

export enum EventSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum RoleName {
  ADMIN = 'ADMIN',
  OPERATOR = 'OPERATOR',
  VIEWER = 'VIEWER'
} 