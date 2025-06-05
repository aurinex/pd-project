import axios from 'axios';

// Базовый URL для API
const API_URL = 'http://localhost:3000/api';

// Создаем экземпляр axios с базовыми настройками
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Добавляем интерцептор для обработки запросов
api.interceptors.request.use(
  (config) => {
    // Получаем токен из localStorage
    const token = localStorage.getItem('token');
    
    // Если токен существует, добавляем его в заголовки
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Добавляем интерцептор для обработки ответов
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Обработка ошибки 401 (Unauthorized)
    if (error.response && error.response.status === 401) {
      // Если токен недействителен, удаляем его и перенаправляем на страницу входа
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export default api; 