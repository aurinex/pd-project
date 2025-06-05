import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Card, 
  CardContent, 
  CardHeader,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
  Badge,
  Avatar,
  IconButton,
  CircularProgress
} from '@mui/material';
import {
  FlightTakeoff as FlightIcon,
  FlightLand as LandIcon,
  Battery90 as BatteryIcon,
  Speed as SpeedIcon,
  LocationOn as LocationIcon,
  Refresh as RefreshIcon,
  Warning as WarningIcon,
  CheckCircle as CheckIcon,
  Info as InfoIcon,
  ErrorOutline as ErrorIcon
} from '@mui/icons-material';
import droneService from '../api/droneService';
import eventService from '../api/eventService';
import type { Drone } from '../api/droneService';
import type { Event } from '../api/eventService';

const Dashboard = () => {
  // Состояние для данных о дронах
  const [drones, setDrones] = useState<Drone[]>([]);
  const [recentEvents, setRecentEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState({
    drones: false,
    events: false
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);

  // Статистика
  const [stats, setStats] = useState({
    activeDrones: 0,
    totalMissions: 0,
    detections: 0,
    alerts: 0,
    availableDrones: 0,
    maintenanceDrones: 0
  });

  // Загрузка данных о дронах и событиях при монтировании
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(prev => ({ ...prev, drones: true }));
        const dronesData = await droneService.getAllDrones();
        setDrones(dronesData);
        
        // Обновляем статистику на основе полученных данных
        const activeCount = dronesData.filter(drone => drone.status === 'ACTIVE').length;
        const idleCount = dronesData.filter(drone => drone.status === 'IDLE').length;
        const maintenanceCount = dronesData.filter(drone => drone.status === 'MAINTENANCE').length;
        
        setStats(prev => ({
          ...prev,
          activeDrones: activeCount,
          availableDrones: idleCount,
          maintenanceDrones: maintenanceCount
        }));
        
        setLoading(prev => ({ ...prev, drones: false }));
        
        // Загрузка последних событий
        setLoading(prev => ({ ...prev, events: true }));
        
        // Загружаем события из API
        const eventsData = await eventService.getAllEvents({
          resolved: false,  // Только нерешенные события
        });
        
        // Сортируем события по времени (сначала новые)
        const sortedEvents = eventsData.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        
        setRecentEvents(sortedEvents);
        
        // Обновляем статистику событий
        const warningsCount = eventsData.filter(event => 
          event.type === 'warning' || event.type === 'error'
        ).length;
        
        const criticalCount = eventsData.filter(event => 
          event.severity === 'high' || event.severity === 'critical'
        ).length;
        
        setStats(prev => ({
          ...prev,
          detections: warningsCount,
          alerts: criticalCount,
          totalMissions: dronesData.reduce((count, drone) => {
            return count + (drone.routes ? drone.routes.length : 0);
          }, 0)
        }));
        
        setLoading(prev => ({ ...prev, events: false }));
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setError('Ошибка при загрузке данных. Пожалуйста, попробуйте позже.');
        setLoading({ drones: false, events: false });
      }
    };
    
    fetchData();
  }, []);

  // Функция для получения цвета статуса дрона
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'ACTIVE': return 'success.main';
      case 'IDLE': return 'info.main';
      case 'MAINTENANCE': return 'error.main';
      case 'OFFLINE': return 'text.secondary';
      default: return 'text.secondary';
    }
  };

  // Функция для получения текста статуса дрона на русском
  const getStatusText = (status: string) => {
    switch(status) {
      case 'ACTIVE': return 'Активен';
      case 'IDLE': return 'Ожидание';
      case 'MAINTENANCE': return 'Обслуживание';
      case 'OFFLINE': return 'Не в сети';
      default: return 'Неизвестно';
    }
  };

  // Функция для получения иконки для события
  const getEventIcon = (type: string) => {
    switch(type) {
      case 'critical': return <ErrorIcon color="error" />;
      case 'error': return <WarningIcon color="error" />;
      case 'warning': return <WarningIcon color="warning" />;
      case 'info': return <InfoIcon color="info" />;
      default: return <CheckIcon color="success" />;
    }
  };

  // Функция для получения цвета в зависимости от важности события
  const getEventSeverityColor = (severity: string) => {
    switch(severity) {
      case 'critical': return 'error.main';
      case 'high': return 'error.main';
      case 'medium': return 'warning.main';
      case 'low': return 'info.main';
      default: return 'text.secondary';
    }
  };

  // Функция для форматирования времени события
  const formatEventTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Панель управления SkyPatrol
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
        Обзор системы управления БПЛА МВД России
      </Typography>

      {/* Статистика */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
        <Box sx={{ flex: '1 1 calc(25% - 16px)', minWidth: '200px' }}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" color="text.secondary">Активные БПЛА</Typography>
            <Typography variant="h3" color="primary.main">{stats.activeDrones}</Typography>
            <Typography variant="body2">из {stats.activeDrones + stats.availableDrones + stats.maintenanceDrones} в парке</Typography>
          </Paper>
        </Box>
        <Box sx={{ flex: '1 1 calc(25% - 16px)', minWidth: '200px' }}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" color="text.secondary">Всего миссий</Typography>
            <Typography variant="h3" color="primary.main">{stats.totalMissions}</Typography>
            <Typography variant="body2">выполнено успешно</Typography>
          </Paper>
        </Box>
        <Box sx={{ flex: '1 1 calc(25% - 16px)', minWidth: '200px' }}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" color="text.secondary">Распознаваний</Typography>
            <Typography variant="h3" color="info.main">{stats.detections}</Typography>
            <Typography variant="body2">за последние 24 часа</Typography>
          </Paper>
        </Box>
        <Box sx={{ flex: '1 1 calc(25% - 16px)', minWidth: '200px' }}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" color="text.secondary">Оповещения</Typography>
            <Typography variant="h3" color="error.main">{stats.alerts}</Typography>
            <Typography variant="body2">требуют внимания</Typography>
          </Paper>
        </Box>
      </Box>

      {/* Основное содержимое */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {/* Активные дроны */}
        <Box sx={{ flex: '1 1 auto', minWidth: '60%' }}>
          <Card>
            <CardHeader 
              title="Активные БПЛА" 
              action={
                <Button 
                  variant="contained" 
                  color="primary" 
                  startIcon={<FlightIcon />}
                  onClick={() => window.location.href = '/map'}
                >
                  Новая миссия
                </Button>
              } 
            />
            <Divider />
            <CardContent>
              {loading.drones ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                  <CircularProgress />
                </Box>
              ) : drones.length === 0 ? (
                <Typography variant="body2" sx={{ p: 2, textAlign: 'center' }}>
                  Нет доступных БПЛА. Добавьте новые дроны в систему.
                </Typography>
              ) : (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {drones.map(drone => (
                    <Box key={drone.id} sx={{ flex: '1 1 calc(50% - 16px)', minWidth: '250px' }}>
                      <Paper 
                        elevation={2} 
                        sx={{ 
                          p: 2, 
                          borderLeft: 4, 
                          borderColor: getStatusColor(drone.status),
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="h6">{drone.name}</Typography>
                          <Badge 
                            color={
                              drone.status === 'ACTIVE' ? 'success' : 
                              drone.status === 'IDLE' ? 'info' : 
                              drone.status === 'MAINTENANCE' ? 'error' : 'default'
                            } 
                            variant="dot"
                          >
                            <Typography variant="body2">{getStatusText(drone.status)}</Typography>
                          </Badge>
                        </Box>
                        
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {drone.model}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          <Box sx={{ flex: '1 1 50%' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <BatteryIcon sx={{ mr: 0.5, color: drone.batteryLevel < 30 ? 'error.main' : 'success.main' }} />
                              <Typography variant="body2">{drone.batteryLevel}%</Typography>
                            </Box>
                          </Box>
                          <Box sx={{ flex: '1 1 50%' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <SpeedIcon sx={{ mr: 0.5 }} />
                              <Typography variant="body2">{drone.speed || 0} км/ч</Typography>
                            </Box>
                          </Box>
                          <Box sx={{ flex: '1 1 100%' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <LocationIcon sx={{ mr: 0.5 }} />
                              <Typography variant="body2" noWrap>
                                {drone.latitude && drone.longitude 
                                  ? `${drone.latitude.toFixed(4)}, ${drone.longitude.toFixed(4)}`
                                  : 'Нет данных о местоположении'
                                }
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                          {drone.status === 'ACTIVE' && (
                            <Button 
                              variant="outlined" 
                              size="small" 
                              startIcon={<LandIcon />}
                              color="warning"
                            >
                              Вернуть на базу
                            </Button>
                          )}
                          {drone.status === 'IDLE' && (
                            <Button 
                              variant="outlined" 
                              size="small" 
                              startIcon={<FlightIcon />}
                              color="success"
                              onClick={() => window.location.href = '/map'}
                            >
                              Запустить
                            </Button>
                          )}
                        </Box>
                      </Paper>
                    </Box>
                  ))}
                </Box>
              )}
            </CardContent>
          </Card>
        </Box>
        
        {/* Последние события */}
        <Box sx={{ flex: '1 1 auto', minWidth: '250px', maxWidth: '400px' }}>
          <Card sx={{ height: '100%' }}>
            <CardHeader 
              title="Последние события" 
              action={
                <IconButton onClick={() => window.location.href = '/notifications'}>
                  <RefreshIcon />
                </IconButton>
              } 
            />
            <Divider />
            {loading.events ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                <CircularProgress />
              </Box>
            ) : (
              <List sx={{ overflow: 'auto', maxHeight: 400 }}>
                {recentEvents.map(event => (
                  <React.Fragment key={event.id}>
                    <ListItem>
                      <Avatar sx={{ 
                        bgcolor: 'background.paper', 
                        mr: 2,
                        border: 1, 
                        borderColor: getEventSeverityColor(event.severity)
                      }}>
                        {getEventIcon(event.type)}
                      </Avatar>
                      <ListItemText 
                        primary={
                          <Typography 
                            variant="body1" 
                            color={event.severity === 'high' || event.severity === 'critical' ? 'error' : 'textPrimary'}
                          >
                            {event.message}
                          </Typography>
                        }
                        secondary={
                          <>
                            {event.drone && <Typography variant="caption" display="block">{event.drone.name}</Typography>}
                            <Typography variant="caption">{formatEventTime(event.createdAt)}</Typography>
                          </>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                ))}
              </List>
            )}
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard; 