import api from './axios';

// Типы для данных аутентификации
export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  username: string;
  password: string;
  fullName?: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  fullName?: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AuthResponse {
  token: string;
  user: User;
  message?: string;
}

// Класс для работы с API аутентификации
class AuthService {
  // Метод для входа пользователя
  async login(data: LoginData): Promise<AuthResponse> {
    console.log('AuthService.login - отправляемые данные:', data);
    const response = await api.post<AuthResponse>('/auth/login', data);
    
    // Сохраняем токен и данные пользователя в localStorage
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    
    return response.data;
  }
  
  // Метод для регистрации пользователя
  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/register', data);
    
    // Сохраняем токен и данные пользователя в localStorage
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    
    return response.data;
  }
  
  // Метод для получения данных текущего пользователя
  async getCurrentUser(): Promise<User> {
    const response = await api.get<{ success: boolean; user: User }>('/auth/me');
    return response.data.user;
  }
  
  // Метод для выхода пользователя
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  
  // Метод для проверки, авторизован ли пользователь
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  
  // Метод для получения текущего пользователя из localStorage
  getUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }
  
  // Метод для проверки, имеет ли пользователь определенную роль
  hasRole(role: string): boolean {
    const user = this.getUser();
    return user ? user.role === role : false;
  }
}

export default new AuthService(); 