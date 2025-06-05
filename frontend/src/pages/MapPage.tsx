import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  CardHeader, 
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  CircularProgress,
  Alert
} from '@mui/material';
import {
  Add as AddIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  MyLocation as MyLocationIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Flight as FlightIcon
} from '@mui/icons-material';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import droneService from '../api/droneService';
import routeService, { type Route, type RouteCreateData } from '../api/routeService';
import type { Drone } from '../api/droneService';

// Фикс для иконок Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Создаем иконки для разных статусов дронов
const createDroneIcon = (color: string) => {
  return L.divIcon({
    className: 'drone-icon',
    html: `<div style="
      background-color: ${color};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 2px 5px rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    "><svg viewBox="0 0 24 24" width="14" height="14"><path fill="white" d="M12,2L2,12H6V22H18V12H22L12,2Z"/></svg></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
};

const MapPage: React.FC = () => {
  // Состояние для дронов и маршрутов
  const [drones, setDrones] = useState<Drone[]>([]);
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState({
    drones: false,
    routes: false
  });
  const [error, setError] = useState<string | null>(null);
  
  // Состояние для центра карты
  const [mapCenter, setMapCenter] = useState<[number, number]>([55.7522, 37.6156]); // Москва
  const [mapZoom, setMapZoom] = useState(12);
  
  // Состояние для выбранного дрона и маршрута
  const [selectedDrone, setSelectedDrone] = useState<Drone | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  
  // Состояния для диалогов
  const [newRouteDialog, setNewRouteDialog] = useState(false);
  const [newRouteName, setNewRouteName] = useState('');
  const [newRouteDescription, setNewRouteDescription] = useState('');
  const [assignDroneDialog, setAssignDroneDialog] = useState(false);
  const [selectedDroneId, setSelectedDroneId] = useState<number | ''>('');
  
  // Состояние для меню маршрута
  const [routeMenuAnchor, setRouteMenuAnchor] = useState<null | HTMLElement>(null);
  const [activeRouteId, setActiveRouteId] = useState<number | null>(null);

  // Загрузка данных о дронах и маршрутах при монтировании
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(prev => ({ ...prev, drones: true }));
        const dronesData = await droneService.getAllDrones();
        setDrones(dronesData);
        setLoading(prev => ({ ...prev, drones: false }));
        
        setLoading(prev => ({ ...prev, routes: true }));
        const routesData = await routeService.getAllRoutes();
        setRoutes(routesData);
        setLoading(prev => ({ ...prev, routes: false }));
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setError('Ошибка при загрузке данных. Пожалуйста, попробуйте позже.');
        setLoading({ drones: false, routes: false });
      }
    };
    
    fetchData();
  }, []);

  // Обработчики для диалогов
  const handleOpenNewRouteDialog = () => {
    setNewRouteDialog(true);
  };
  
  const handleCloseNewRouteDialog = () => {
    setNewRouteDialog(false);
    setNewRouteName('');
    setNewRouteDescription('');
  };
  
  const handleCreateNewRoute = async () => {
    try {
      if (!newRouteName.trim()) return;
      
      const newRouteData: RouteCreateData = {
        name: newRouteName,
        description: newRouteDescription || undefined,
        coordinates: [
          // Пример начальных координат (центр карты)
          [mapCenter[1], mapCenter[0]],
          [mapCenter[1] + 0.01, mapCenter[0] + 0.01],
          [mapCenter[1] + 0.01, mapCenter[0] - 0.01],
          [mapCenter[1] - 0.01, mapCenter[0] - 0.01],
          [mapCenter[1], mapCenter[0]]
        ]
      };
      
      const createdRoute = await routeService.createRoute(newRouteData);
      setRoutes(prev => [...prev, createdRoute]);
      setNewRouteDialog(false);
      setNewRouteName('');
      setNewRouteDescription('');
    } catch (error) {
      console.error('Ошибка при создании маршрута:', error);
      setError('Ошибка при создании маршрута. Пожалуйста, попробуйте позже.');
    }
  };
  
  const handleOpenAssignDroneDialog = (routeId: number) => {
    setActiveRouteId(routeId);
    setAssignDroneDialog(true);
    setRouteMenuAnchor(null);
  };
  
  const handleCloseAssignDroneDialog = () => {
    setAssignDroneDialog(false);
    setSelectedDroneId('');
  };
  
  const handleAssignDrone = async () => {
    try {
      if (selectedDroneId !== '' && activeRouteId !== null) {
        // Обновляем маршрут, назначая дрон
        const updatedRoute = await routeService.updateRoute(activeRouteId, {
          droneId: selectedDroneId as number
        });
        
        // Обновляем список маршрутов в состоянии
        setRoutes(prevRoutes => 
          prevRoutes.map(route => 
            route.id === activeRouteId ? updatedRoute : route
          )
        );
        
        // Обновляем статус дрона на ACTIVE
        const droneId = selectedDroneId as number;
        const updatedDrone = await droneService.updateDrone(droneId, {
          status: 'ACTIVE'
        });
        
        // Обновляем список дронов в состоянии
        setDrones(prevDrones => 
          prevDrones.map(drone => 
            drone.id === droneId ? updatedDrone : drone
          )
        );
        
        setAssignDroneDialog(false);
        setSelectedDroneId('');
      }
    } catch (error) {
      console.error('Ошибка при назначении дрона на маршрут:', error);
      setError('Ошибка при назначении дрона. Пожалуйста, попробуйте позже.');
    }
  };
  
  // Обработчики для меню маршрута
  const handleOpenRouteMenu = (event: React.MouseEvent<HTMLElement>, routeId: number) => {
    setRouteMenuAnchor(event.currentTarget);
    setActiveRouteId(routeId);
  };
  
  const handleCloseRouteMenu = () => {
    setRouteMenuAnchor(null);
  };
  
  const handleDeleteRoute = async (routeId: number) => {
    try {
      await routeService.deleteRoute(routeId);
      setRoutes(prevRoutes => prevRoutes.filter(route => route.id !== routeId));
      setRouteMenuAnchor(null);
    } catch (error) {
      console.error('Ошибка при удалении маршрута:', error);
      setError('Ошибка при удалении маршрута. Пожалуйста, попробуйте позже.');
    }
  };
  
  // Функция для получения цвета маркера дрона в зависимости от статуса
  const getDroneMarkerColor = (status: string) => {
    switch(status) {
      case 'active': return '#4caf50';
      case 'returning': return '#ff9800';
      case 'standby': return '#2196f3';
      case 'maintenance': return '#f44336';
      default: return '#9e9e9e';
    }
  };
  
  // Функция для получения маркера дрона в зависимости от статуса
  const getDroneIcon = (status: string) => {
    return createDroneIcon(getDroneMarkerColor(status));
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" gutterBottom>
        Карта операций
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
        Интерактивная карта расположения и маршрутов БПЛА
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      
      <Box sx={{ display: 'flex', height: 'calc(100% - 100px)', flexGrow: 1 }}>
        {/* Карта */}
        <Box sx={{ flexGrow: 1, position: 'relative', borderRadius: 1, overflow: 'hidden' }}>
          <MapContainer 
            center={mapCenter} 
            zoom={mapZoom} 
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Маркеры дронов */}
            {drones.map(drone => (
              <Marker 
                key={drone.id}
                position={[drone.latitude || 55.75, drone.longitude || 37.61]}
                icon={getDroneIcon(drone.status.toLowerCase())}
                eventHandlers={{
                  click: () => setSelectedDrone(drone)
                }}
              />
            ))}
            
            {/* Маршруты */}
            {routes.map(route => (
              <Polyline 
                key={route.id}
                positions={route.coordinates.map(coords => [coords[1], coords[0]] as [number, number])}
                color={route.droneId ? '#4caf50' : '#1976d2'}
                weight={route.droneId ? 4 : 3}
                dashArray={route.droneId ? undefined : "5, 5"}
              />
            ))}
            
            {/* Попап с информацией о выбранном дроне */}
            {selectedDrone && (
              <Marker 
                position={[selectedDrone.latitude || 55.75, selectedDrone.longitude || 37.61]}
                icon={getDroneIcon(selectedDrone.status.toLowerCase())}
              >
                <Popup closeButton={true} closeOnClick={false} autoPan={true}>
                  <div>
                    <Typography variant="subtitle1">{selectedDrone.name}</Typography>
                    <Typography variant="body2">Модель: {selectedDrone.model}</Typography>
                    <Typography variant="body2">Батарея: {selectedDrone.batteryLevel}%</Typography>
                    <Typography variant="body2">Статус: {selectedDrone.status}</Typography>
                    {selectedDrone.speed && (
                      <Typography variant="body2">Скорость: {selectedDrone.speed} км/ч</Typography>
                    )}
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
          
          {/* Элементы управления картой */}
          <Box 
            sx={{ 
              position: 'absolute', 
              top: 10, 
              left: 10, 
              zIndex: 1000, 
              display: 'flex', 
              flexDirection: 'column',
              gap: 1
            }}
          >
            <Paper sx={{ p: 1, borderRadius: '50%' }}>
              <IconButton onClick={() => setMapZoom(prev => Math.min(prev + 1, 18))}>
                <ZoomInIcon />
              </IconButton>
            </Paper>
            <Paper sx={{ p: 1, borderRadius: '50%' }}>
              <IconButton onClick={() => setMapZoom(prev => Math.max(prev - 1, 5))}>
                <ZoomOutIcon />
              </IconButton>
            </Paper>
            <Paper sx={{ p: 1, borderRadius: '50%' }}>
              <IconButton onClick={() => setMapCenter([55.7522, 37.6156])}>
                <MyLocationIcon />
              </IconButton>
            </Paper>
          </Box>
        </Box>
        
        {/* Боковая панель */}
        <Paper sx={{ width: 300, ml: 2, p: 2, display: 'flex', flexDirection: 'column' }}>
          <CardHeader 
            title="Маршруты полетов" 
            action={
              <IconButton color="primary" onClick={handleOpenNewRouteDialog}>
                <AddIcon />
              </IconButton>
            } 
          />
          <Divider />
          <CardContent sx={{ flexGrow: 1, overflow: 'auto', p: 1 }}>
            {loading.routes ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                <CircularProgress />
              </Box>
            ) : routes.length === 0 ? (
              <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
                Маршруты не найдены. Создайте новый маршрут.
              </Typography>
            ) : (
              <List>
                {routes.map(route => (
                  <React.Fragment key={route.id}>
                    <ListItem 
                      secondaryAction={
                        <IconButton 
                          edge="end" 
                          aria-label="actions"
                          onClick={(e) => handleOpenRouteMenu(e, route.id)}
                        >
                          <EditIcon />
                        </IconButton>
                      }
                      sx={{ 
                        borderLeft: 3, 
                        borderColor: route.droneId ? 'success.main' : 'grey.400',
                        mb: 1,
                        cursor: 'pointer',
                        '&:hover': {
                          bgcolor: 'action.hover'
                        }
                      }}
                      onClick={() => {
                        // Центрируем карту на маршруте
                        const midPointIndex = Math.floor(route.coordinates.length / 2);
                        const midPoint = route.coordinates[midPointIndex];
                        setMapCenter([midPoint[1], midPoint[0]]);
                        setMapZoom(14);
                        setSelectedRoute(route);
                      }}
                    >
                      <ListItemText 
                        primary={route.name} 
                        secondary={
                          route.droneId 
                            ? `Назначен: ${drones.find(d => d.id === route.droneId)?.name || 'БПЛА не найден'}` 
                            : 'Не назначен'
                        } 
                      />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            )}
          </CardContent>
          
          <Divider sx={{ mt: 2 }} />
          <Box sx={{ p: 2 }}>
            <Button 
              fullWidth 
              variant="contained" 
              startIcon={<FlightIcon />}
              disabled={!selectedRoute || !selectedRoute.droneId || loading.routes}
              onClick={() => {
                // Здесь будет логика запуска миссии
                alert(`Миссия по маршруту "${selectedRoute?.name}" запущена!`);
              }}
            >
              Запустить миссию
            </Button>
          </Box>
        </Paper>
      </Box>
      
      {/* Диалог создания нового маршрута */}
      <Dialog open={newRouteDialog} onClose={handleCloseNewRouteDialog}>
        <DialogTitle>Создать новый маршрут</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Название маршрута"
            fullWidth
            variant="outlined"
            value={newRouteName}
            onChange={(e) => setNewRouteName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Описание (необязательно)"
            fullWidth
            variant="outlined"
            multiline
            rows={3}
            value={newRouteDescription}
            onChange={(e) => setNewRouteDescription(e.target.value)}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Для создания маршрута укажите название. Далее вы сможете добавить точки на карте.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNewRouteDialog}>Отмена</Button>
          <Button 
            onClick={handleCreateNewRoute} 
            variant="contained" 
            disabled={!newRouteName.trim()}
          >
            Создать
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Диалог назначения дрона на маршрут */}
      <Dialog open={assignDroneDialog} onClose={handleCloseAssignDroneDialog}>
        <DialogTitle>Назначить БПЛА на маршрут</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>БПЛА</InputLabel>
            <Select
              value={selectedDroneId}
              label="БПЛА"
              onChange={(e) => setSelectedDroneId(e.target.value as number)}
            >
              {drones
                .filter(drone => drone.status === 'IDLE')
                .map(drone => (
                  <MenuItem key={drone.id} value={drone.id}>
                    {drone.name} - Батарея: {drone.batteryLevel}%
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Для назначения на маршрут доступны только БПЛА в режиме ожидания (IDLE).
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAssignDroneDialog}>Отмена</Button>
          <Button 
            onClick={handleAssignDrone} 
            variant="contained" 
            disabled={selectedDroneId === ''}
          >
            Назначить
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Меню действий с маршрутом */}
      <Menu
        anchorEl={routeMenuAnchor}
        open={Boolean(routeMenuAnchor)}
        onClose={handleCloseRouteMenu}
      >
        <MenuItem onClick={() => {
          if (activeRouteId) handleOpenAssignDroneDialog(activeRouteId);
        }}>
          <FlightIcon fontSize="small" sx={{ mr: 1 }} />
          Назначить БПЛА
        </MenuItem>
        <MenuItem onClick={() => {
          // Здесь будет функционал редактирования маршрута
          handleCloseRouteMenu();
        }}>
          <EditIcon fontSize="small" sx={{ mr: 1 }} />
          Редактировать маршрут
        </MenuItem>
        <MenuItem onClick={() => {
          if (activeRouteId) handleDeleteRoute(activeRouteId);
        }}>
          <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
          Удалить маршрут
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MapPage; 