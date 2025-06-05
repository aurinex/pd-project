import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
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

// Тип для цвета чипа статуса
type StatusColor = 'success' | 'info' | 'warning' | 'error' | 'default';

const DronePage: React.FC = () => {
  const [drones, setDrones] = useState<Drone[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [currentDrone, setCurrentDrone] = useState<Partial<DroneCreateData> | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saveLoading, setSaveLoading] = useState<boolean>(false);

  // Загрузка списка дронов при монтировании компонента
  useEffect(() => {
    fetchDrones();
  }, []);

  // Функция для загрузки списка дронов
  const fetchDrones = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await droneService.getAllDrones();
      setDrones(data);
    } catch (err: any) {
      console.error('Ошибка при загрузке дронов:', err);
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
    } catch (err: any) {
      console.error('Ошибка при сохранении дрона:', err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Не удалось сохранить дрон. Пожалуйста, проверьте данные и попробуйте снова.');
      }
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
      } catch (err: any) {
        console.error('Ошибка при удалении дрона:', err);
        setError('Не удалось удалить дрон. Пожалуйста, попробуйте позже.');
      } finally {
        setLoading(false);
      }
    }
  };

  const getStatusColor = (status: string): StatusColor => {
    switch (status) {
      case 'ACTIVE': return 'success';
      case 'IDLE': return 'info';
      case 'MAINTENANCE': return 'warning';
      case 'OFFLINE': return 'error';
      default: return 'default';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'Активен';
      case 'IDLE': return 'Ожидание';
      case 'MAINTENANCE': return 'Обслуживание';
      case 'OFFLINE': return 'Не в сети';
      default: return status;
    }
  };

  const formatDate = (dateString: string | Date) => {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (loading && drones.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Управление дронами
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Добавить дрон
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      {drones.length === 0 && !loading ? (
        <Alert severity="info">
          Дроны не найдены. Добавьте новый дрон, нажав кнопку "Добавить дрон".
        </Alert>
      ) : (
        <Grid container spacing={3}>
          {drones.map(drone => (
            <Grid key={drone.id} item xs={12} sm={6} md={4} component="div">
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6">{drone.name}</Typography>
                    <Chip
                      label={getStatusLabel(drone.status)}
                      color={getStatusColor(drone.status)}
                      size="small"
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Модель: {drone.model}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Серийный номер: {drone.serialNumber}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Последнее обновление: {formatDate(drone.updatedAt)}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <BatteryIcon color={drone.batteryLevel > 20 ? 'success' : 'error'} />
                      <Typography variant="body2" sx={{ ml: 0.5 }}>
                        {drone.batteryLevel}%
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <SpeedIcon color="action" />
                      <Typography variant="body2" sx={{ ml: 0.5 }}>
                        {drone.speed || 0} км/ч
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <HeightIcon color="action" />
                      <Typography variant="body2" sx={{ ml: 0.5 }}>
                        {drone.altitude || 0} м
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <SignalIcon color={drone.status === 'OFFLINE' ? 'error' : 'success'} />
                      <Typography variant="body2" sx={{ ml: 0.5 }}>
                        {drone.status === 'OFFLINE' ? '0%' : '100%'}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    startIcon={<FlightIcon />}
                    disabled={drone.status !== 'IDLE'}
                  >
                    Запустить
                  </Button>
                  <Box sx={{ flexGrow: 1 }} />
                  <IconButton size="small" onClick={() => handleOpen(drone)}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error" onClick={() => handleDelete(drone.id)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
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