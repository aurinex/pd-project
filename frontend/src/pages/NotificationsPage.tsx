import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  Divider,
  CircularProgress,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  IconButton,
  ListItemSecondaryAction,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';
import { 
  Warning as WarningIcon, 
  Info as InfoIcon, 
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon,
  FilterList as FilterListIcon
} from '@mui/icons-material';
import eventService from '../api/eventService';
import type { Event, EventFilterParams } from '../api/eventService';

const NotificationsPage: React.FC = () => {
  // Состояние для событий
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Состояние для фильтров
  const [filters, setFilters] = useState<EventFilterParams>({});
  const [showFilters, setShowFilters] = useState(false);
  
  // Состояние для диалога подтверждения
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  // Загрузка событий при монтировании компонента
  useEffect(() => {
    fetchEvents();
  }, [filters]);

  // Функция для загрузки событий с учетом фильтров
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const data = await eventService.getAllEvents(filters);
      setEvents(data);
      setError(null);
    } catch (err) {
      console.error('Ошибка при загрузке событий:', err);
      setError('Не удалось загрузить события. Пожалуйста, попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  // Функция для пометки события как решенного
  const handleResolveEvent = async (eventId: number) => {
    try {
      await eventService.resolveEvent(eventId);
      // Обновляем список событий
      setEvents(prevEvents => 
        prevEvents.map(event => 
          event.id === eventId ? { ...event, resolved: true } : event
        )
      );
    } catch (err) {
      console.error('Ошибка при обновлении статуса события:', err);
      setError('Не удалось обновить статус события. Пожалуйста, попробуйте позже.');
    }
  };

  // Функция для открытия диалога подтверждения
  const openConfirmDialog = (eventId: number) => {
    setSelectedEventId(eventId);
    setDialogOpen(true);
  };

  // Функция для закрытия диалога подтверждения
  const closeConfirmDialog = () => {
    setDialogOpen(false);
    setSelectedEventId(null);
  };

  // Функция для подтверждения пометки события как решенного
  const confirmResolveEvent = () => {
    if (selectedEventId !== null) {
      handleResolveEvent(selectedEventId);
      closeConfirmDialog();
    }
  };

  // Функция для получения иконки в зависимости от типа уведомления
  const getEventIcon = (type: string, severity: string) => {
    switch (type) {
      case 'warning':
        return <WarningIcon color={severity === 'high' || severity === 'critical' ? "error" : "warning"} />;
      case 'error':
        return <ErrorIcon color="error" />;
      case 'info':
        return <InfoIcon color="info" />;
      case 'critical':
        return <ErrorIcon color="error" />;
      default:
        return <InfoIcon />;
    }
  };

  // Функция для получения цвета чипа в зависимости от уровня важности
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'info';
      case 'medium':
        return 'warning';
      case 'high':
        return 'error';
      case 'critical':
        return 'error';
      default:
        return 'default';
    }
  };

  // Функция для форматирования даты
  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Оповещения
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
        Журнал событий и оповещений системы
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">
                События и оповещения
              </Typography>
              <Tooltip title="Фильтры">
                <IconButton onClick={() => setShowFilters(!showFilters)}>
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
            </Box>

            {showFilters && (
              <Box sx={{ mb: 3, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Тип события</InputLabel>
                      <Select
                        value={filters.type || ''}
                        label="Тип события"
                        onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value || undefined }))}
                      >
                        <MenuItem value="">Все типы</MenuItem>
                        <MenuItem value="warning">Предупреждение</MenuItem>
                        <MenuItem value="error">Ошибка</MenuItem>
                        <MenuItem value="info">Информация</MenuItem>
                        <MenuItem value="critical">Критическое</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Важность</InputLabel>
                      <Select
                        value={filters.severity || ''}
                        label="Важность"
                        onChange={(e) => setFilters(prev => ({ ...prev, severity: e.target.value || undefined }))}
                      >
                        <MenuItem value="">Любая важность</MenuItem>
                        <MenuItem value="low">Низкая</MenuItem>
                        <MenuItem value="medium">Средняя</MenuItem>
                        <MenuItem value="high">Высокая</MenuItem>
                        <MenuItem value="critical">Критическая</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Статус</InputLabel>
                      <Select
                        value={filters.resolved === undefined ? '' : filters.resolved ? 'resolved' : 'unresolved'}
                        label="Статус"
                        onChange={(e) => {
                          const value = e.target.value as string;
                          setFilters(prev => ({
                            ...prev,
                            resolved: value === '' ? undefined : value === 'resolved'
                          }));
                        }}
                      >
                        <MenuItem value="">Все события</MenuItem>
                        <MenuItem value="resolved">Решенные</MenuItem>
                        <MenuItem value="unresolved">Нерешенные</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
            )}

            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                <CircularProgress />
              </Box>
            ) : events.length === 0 ? (
              <Typography variant="body1" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
                События не найдены
              </Typography>
            ) : (
              <List>
                {events.map((event) => (
                  <React.Fragment key={event.id}>
                    <ListItem 
                      alignItems="flex-start"
                      sx={{
                        opacity: event.resolved ? 0.7 : 1,
                        bgcolor: event.resolved ? 'action.hover' : 'transparent'
                      }}
                    >
                      <ListItemIcon>
                        {getEventIcon(event.type, event.severity)}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {event.message}
                            <Chip 
                              label={event.severity} 
                              size="small" 
                              color={getSeverityColor(event.severity) as "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"} 
                              sx={{ ml: 1 }}
                            />
                            {event.resolved && (
                              <Chip 
                                label="Решено" 
                                size="small" 
                                color="success" 
                                sx={{ ml: 1 }}
                              />
                            )}
                          </Box>
                        }
                        secondary={
                          <>
                            {formatDate(event.timestamp)} • {event.drone?.name || `Дрон ID: ${event.droneId}`}
                            {event.location && ` • Координаты: ${event.location[1].toFixed(4)}, ${event.location[0].toFixed(4)}`}
                          </>
                        }
                      />
                      {!event.resolved && (
                        <ListItemSecondaryAction>
                          <Tooltip title="Отметить как решенное">
                            <IconButton edge="end" onClick={() => openConfirmDialog(event.id)}>
                              <CheckCircleIcon color="success" />
                            </IconButton>
                          </Tooltip>
                        </ListItemSecondaryAction>
                      )}
                    </ListItem>
                    <Divider component="li" />
                  </React.Fragment>
                ))}
              </List>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Диалог подтверждения */}
      <Dialog
        open={dialogOpen}
        onClose={closeConfirmDialog}
      >
        <DialogTitle>Подтверждение</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вы уверены, что хотите отметить это событие как решенное?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeConfirmDialog}>Отмена</Button>
          <Button onClick={confirmResolveEvent} variant="contained" color="primary">
            Подтвердить
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NotificationsPage; 