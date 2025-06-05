import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Chip,
  Button,
  IconButton
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

interface User {
  id: number;
  username: string;
  fullName: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

const UsersPage: React.FC = () => {
  // Заглушка для списка пользователей
  const users: User[] = [
    { 
      id: 1, 
      username: 'admin', 
      fullName: 'Администратор Системы', 
      email: 'admin@skypatrol.ru', 
      role: 'admin', 
      status: 'active',
      lastLogin: '2023-08-15 10:30' 
    },
    { 
      id: 2, 
      username: 'operator1', 
      fullName: 'Иванов Иван Иванович', 
      email: 'ivanov@skypatrol.ru', 
      role: 'operator', 
      status: 'active',
      lastLogin: '2023-08-15 09:45' 
    },
    { 
      id: 3, 
      username: 'operator2', 
      fullName: 'Петров Петр Петрович', 
      email: 'petrov@skypatrol.ru', 
      role: 'operator', 
      status: 'active',
      lastLogin: '2023-08-14 16:20' 
    },
    { 
      id: 4, 
      username: 'viewer1', 
      fullName: 'Сидоров Сидор Сидорович', 
      email: 'sidorov@skypatrol.ru', 
      role: 'viewer', 
      status: 'active',
      lastLogin: '2023-08-15 08:10' 
    },
    { 
      id: 5, 
      username: 'user5', 
      fullName: 'Смирнов Алексей Петрович', 
      email: 'smirnov@skypatrol.ru', 
      role: 'viewer', 
      status: 'inactive',
      lastLogin: '2023-08-10 11:15' 
    }
  ];

  // Функция для получения цвета чипа роли
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'error';
      case 'operator':
        return 'primary';
      case 'viewer':
        return 'info';
      default:
        return 'default';
    }
  };

  // Функция для получения текста роли
  const getRoleText = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Администратор';
      case 'operator':
        return 'Оператор';
      case 'viewer':
        return 'Наблюдатель';
      default:
        return role;
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Пользователи
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Добавить пользователя
        </Button>
      </Box>
      
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
        Управление пользователями системы
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Имя пользователя</TableCell>
              <TableCell>ФИО</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Роль</TableCell>
              <TableCell>Статус</TableCell>
              <TableCell>Последний вход</TableCell>
              <TableCell align="right">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Chip 
                    label={getRoleText(user.role)} 
                    color={getRoleColor(user.role) as "error" | "primary" | "info" | "default"}
                    size="small" 
                  />
                </TableCell>
                <TableCell>
                  <Chip 
                    label={user.status === 'active' ? 'Активен' : 'Неактивен'} 
                    color={user.status === 'active' ? 'success' : 'default'}
                    size="small" 
                  />
                </TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell align="right">
                  <IconButton size="small" color="primary">
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersPage; 