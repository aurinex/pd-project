import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Alert
} from '@mui/material';
import {
  Battery90 as BatteryIcon,
  Speed as SpeedIcon,
  Height as HeightIcon,
  SignalCellular4Bar as SignalIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  FlightTakeoff as FlightIcon
} from '@mui/icons-material';
import droneService, { type Drone, type DroneCreateData, type DroneUpdateData } from '../api/droneService';
import eventService, { type EventCreateData } from '../api/eventService';

// Тип для цвета чипа статуса
type StatusColor = 'success' | 'info' | 'warning' | 'error' | 'default';

// Расширяем тип DroneCreateData для поддержки batteryLevel
interface ExtendedDroneCreateData extends DroneCreateData {
  batteryLevel?: number;
}

const DronePage: React.FC = () => {
  const [drones, setDrones] = useState<Drone[]>([]);
  const [previousDronesCount, setPreviousDronesCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [currentDrone, setCurrentDrone] = useState<Partial<ExtendedDroneCreateData> | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saveLoading, setSaveLoading] = useState<boolean>(false);

  // Загрузка списка дронов при монтировании компонента
  useEffect(() => {
    fetchDrones();
  }, []);

  // Отслеживание изменений в количестве дронов
  useEffect(() => {
    // Проверяем, увеличилось ли количество дронов на 1
    if (previousDronesCount > 0 && drones.length === previousDronesCount + 1) {
      // Находим новый дрон (последний добавленный)
      const newDrone = drones[drones.length - 1];
      
      // Создаем уведомление о новом дроне
      createNewDroneNotification(newDrone);
    }
    
    // Обновляем предыдущее количество дронов
    setPreviousDronesCount(drones.length);
  }, [drones.length, previousDronesCount]);

  // Функция для создания уведомления о новом дроне
  const createNewDroneNotification = async (drone: Drone) => {
    try {
      const eventData: EventCreateData = {
        droneId: drone.id,
        type: 'info',
        severity: 'low',
        message: `В наличии появился новый дрон: ${drone.name}`,
        resolved: false
      };
      
      await eventService.createEvent(eventData);
      console.log(`Создано уведомление о новом дроне: ${drone.name}`);
    } catch (error) {
      console.error('Ошибка при создании уведомления:', error);
    }
  };

  // Функция для загрузки списка дронов
  const fetchDrones = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await droneService.getAllDrones();
      
      // Если это первая загрузка, устанавливаем предыдущее количество дронов
      if (previousDronesCount === 0) {
        setPreviousDronesCount(data.length);
      }
      
      setDrones(data);
    } catch (error: unknown) {
      console.error('Ошибка при загрузке дронов:', error);
      setError('Не удалось загрузить список дронов. Пожалуйста, попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (drone?: Drone) => {
    if (drone) {
      setCurrentDrone({
        name: drone.name,
        model: drone.model,
        serialNumber: drone.serialNumber,
        status: drone.status
      });
      setEditingId(drone.id);
    } else {
      setCurrentDrone({
        name: '',
        model: '',
        serialNumber: '',
        status: 'IDLE'
      });
      setEditingId(null);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentDrone(null);
    setEditingId(null);
  };

  const handleSave = async () => {
    if (!currentDrone?.name || !currentDrone?.model || !currentDrone?.serialNumber) {
      setError('Пожалуйста, заполните все обязательные поля');
      return;
    }

    try {
      setSaveLoading(true);
      setError('');

      if (editingId !== null) {
        // Обновляем существующий дрон
        await droneService.updateDrone(editingId, currentDrone as DroneUpdateData);
      } else {
        // Создаем новый дрон
        await droneService.createDrone(currentDrone as DroneCreateData);
      }

      // Перезагружаем список дронов
      await fetchDrones();
      handleClose();
    } catch (error: unknown) {
      console.error('Ошибка при сохранении дрона:', error);
      let errorMessage = 'Не удалось сохранить дрон. Пожалуйста, проверьте данные и попробуйте снова.';
      
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as { response?: { status?: number; data?: { message?: string } } };
        // Получаем информацию об ошибке из ответа сервера
        console.log('Статус ошибки:', axiosError.response?.status);
        console.log('Данные ошибки:', axiosError.response?.data);
        
        if (axiosError.response?.status === 403) {
          errorMessage = 'У вас нет прав для выполнения этого действия. Проверьте, имеет ли ваша учетная запись роль администратора или оператора.';
        } else if (axiosError.response?.data?.message) {
          errorMessage = axiosError.response.data.message;
        }
      }
      
      setError(errorMessage);
    } finally {
      setSaveLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить этот дрон?')) {
      try {
        setLoading(true);
        await droneService.deleteDrone(id);
        await fetchDrones();
      } catch (error: unknown) {
        console.error('Ошибка при удалении дрона:', error);
        setError('Не удалось удалить дрон. Пожалуйста, попробуйте позже.');
      } finally {
        setLoading(false);
      }
    }
  };

  // Функция для получения цвета статуса
  const getStatusColor = (status: string): StatusColor => {
    switch (status) {
      case 'ACTIVE':
        return 'success';
      case 'IDLE':
        return 'info';
      case 'MAINTENANCE':
        return 'warning';
      case 'OFFLINE':
        return 'error';
      default:
        return 'default';
    }
  };

  // Функция для получения текста статуса
  const getStatusLabel = (status: string): string => {
    switch (status) {
      case 'ACTIVE':
        return 'Активен';
      case 'IDLE':
        return 'Ожидание';
      case 'MAINTENANCE':
        return 'Обслуживание';
      case 'OFFLINE':
        return 'Не в сети';
      default:
        return status;
    }
  };

  if (loading && drones.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Управление дронами
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Добавить дрон
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
          {drones.map((drone) => (
            <Card key={drone.id}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6" component="h2">
                    {drone.name}
                  </Typography>
                  <Chip
                    label={getStatusLabel(drone.status)}
                    color={getStatusColor(drone.status)}
                    size="small"
                    icon={<FlightIcon />}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Модель: {drone.model}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Серийный номер: {drone.serialNumber}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <BatteryIcon color="primary" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    Заряд: {drone.batteryLevel || 0}%
                  </Typography>
                </Box>
                {drone.speed !== undefined && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <SpeedIcon color="primary" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      Скорость: {drone.speed} км/ч
                    </Typography>
                  </Box>
                )}
                {drone.altitude !== undefined && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <HeightIcon color="primary" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      Высота: {drone.altitude} м
                    </Typography>
                  </Box>
                )}
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <SignalIcon color="primary" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    Сигнал: {drone.status === 'OFFLINE' ? '0%' : '100%'}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => handleOpen(drone)}
                  aria-label="Редактировать"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => handleDelete(drone.id)}
                  aria-label="Удалить"
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="drone-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="drone-dialog-title">
          {editingId !== null ? 'Редактировать дрон' : 'Добавить новый дрон'}
        </DialogTitle>
        <DialogContent>
          {error && (
            <Alert severity="error" sx={{ mt: 2 }} onClose={() => setError('')}>
              {error}
            </Alert>
          )}
          {currentDrone && (
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Название"
                value={currentDrone.name || ''}
                onChange={(e) => setCurrentDrone({ ...currentDrone, name: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Модель"
                value={currentDrone.model || ''}
                onChange={(e) => setCurrentDrone({ ...currentDrone, model: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Серийный номер"
                value={currentDrone.serialNumber || ''}
                onChange={(e) => setCurrentDrone({ ...currentDrone, serialNumber: e.target.value })}
                margin="normal"
                required
                disabled={editingId !== null} // Нельзя изменять серийный номер существующего дрона
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Статус</InputLabel>
                <Select
                  value={currentDrone.status || 'IDLE'}
                  label="Статус"
                  onChange={(e) => setCurrentDrone({ ...currentDrone, status: e.target.value as 'ACTIVE' | 'IDLE' | 'MAINTENANCE' | 'OFFLINE' })}
                >
                  <MenuItem value="ACTIVE">Активен</MenuItem>
                  <MenuItem value="IDLE">Ожидание</MenuItem>
                  <MenuItem value="MAINTENANCE">Обслуживание</MenuItem>
                  <MenuItem value="OFFLINE">Не в сети</MenuItem>
                </Select>
              </FormControl>
              {editingId !== null && (
                <TextField
                  fullWidth
                  label="Уровень заряда (%)"
                  type="number"
                  value={currentDrone.batteryLevel || 100}
                  onChange={(e) => setCurrentDrone({ ...currentDrone, batteryLevel: Number(e.target.value) })}
                  margin="normal"
                  InputProps={{
                    inputProps: { min: 0, max: 100 }
                  }}
                />
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button 
            onClick={handleSave} 
            variant="contained"
            disabled={saveLoading}
          >
            {saveLoading ? <CircularProgress size={24} /> : 'Сохранить'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DronePage; 