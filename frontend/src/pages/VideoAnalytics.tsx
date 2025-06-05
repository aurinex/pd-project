import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Button,
  IconButton,
  Tabs,
  Tab,
  Menu,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Slider,
  Stack,
  Switch,
  FormControlLabel,
  Badge
} from '@mui/material';
import {
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  Screenshot as ScreenshotIcon,
  FaceRetouchingOff as FaceIcon,
  DirectionsCar as CarIcon,
  People as PeopleIcon,
  ViewInAr as ObjectIcon,
  MoreVert as MoreIcon,
  Download as DownloadIcon,
  Save as SaveIcon,
  BrightnessHigh as BrightnessIcon,
  Contrast as ContrastIcon,
  GridOn as GridIcon,
  Notifications as NotificationsIcon,
  Timeline as TimelineIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import type { SelectChangeEvent } from '@mui/material';

// Интерфейс для распознанных объектов
interface DetectedObject {
  id: number;
  type: 'face' | 'car' | 'person' | 'object';
  confidence: number;
  timestamp: string;
  boundingBox: [number, number, number, number]; // [x, y, width, height]
  metadata?: {
    licensePlate?: string;
    faceId?: string;
    name?: string;
    status?: string;
    personCount?: number;
    objectType?: string;
    activity?: string;
  };
}

// Интерфейс для источника видео
interface VideoSource {
  id: number;
  name: string;
  type: 'drone' | 'camera';
  status: 'active' | 'offline' | 'standby';
}

// Кастомный стилизованный компонент для видео
const VideoContainer = styled(Paper)({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '500px',
});

// Компонент для имитации видео
const VideoPlaceholder = styled(Box)({
  width: '100%',
  height: '100%',
  backgroundImage: 'url(https://images.unsplash.com/photo-1564694050600-fa2c2e8b2455?q=80&w=1170&auto=format&fit=crop)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
});

// Компонент для отображения рамки распознанного объекта
const DetectionBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'type'
})<{ type: string }>(({ type }) => ({
  position: 'absolute',
  border: '2px solid',
  borderColor: 
    type === 'face' ? '#ff5722' : 
    type === 'car' ? '#2196f3' : 
    type === 'person' ? '#4caf50' : 
    '#9c27b0',
  boxShadow: '0 0 0 1px rgba(0,0,0,0.05), 0 2px 2px rgba(0,0,0,0.3)',
  borderRadius: '2px',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-20px',
    left: '0',
    padding: '2px 5px',
    backgroundColor: 
      type === 'face' ? '#ff5722' : 
      type === 'car' ? '#2196f3' : 
      type === 'person' ? '#4caf50' : 
      '#9c27b0',
    color: 'white',
    fontSize: '10px',
    borderRadius: '2px 2px 0 0',
  }
}));

// Табпанель
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      style={{ height: '100%' }}
    >
      {value === index && (
        <Box sx={{ p: 2, height: '100%' }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const VideoAnalytics = () => {
  // Состояния
  const [videoSources] = useState<VideoSource[]>([
    { id: 1, name: 'БПЛА-101', type: 'drone', status: 'active' },
    { id: 2, name: 'БПЛА-102', type: 'drone', status: 'active' },
    { id: 3, name: 'Камера #1 (Главный вход)', type: 'camera', status: 'active' },
    { id: 4, name: 'Камера #2 (Парковка)', type: 'camera', status: 'active' },
    { id: 5, name: 'БПЛА-103', type: 'drone', status: 'standby' },
    { id: 6, name: 'Камера #3 (Задний двор)', type: 'camera', status: 'offline' },
  ]);
  
  const [selectedSource, setSelectedSource] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [tabValue, setTabValue] = useState<number>(0);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [brightness, setBrightness] = useState<number>(100);
  const [contrast, setContrast] = useState<number>(100);
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [autoDetect, setAutoDetect] = useState<boolean>(true);
  
  // Имитация распознанных объектов
  const [detectedObjects] = useState<DetectedObject[]>([
    {
      id: 1,
      type: 'face',
      confidence: 0.98,
      timestamp: '14:23:15',
      boundingBox: [20, 30, 100, 100],
      metadata: {
        faceId: 'ID-5723',
        name: 'Иванов И.И.',
        status: 'розыск'
      }
    },
    {
      id: 2,
      type: 'car',
      confidence: 0.95,
      timestamp: '14:23:17',
      boundingBox: [350, 200, 200, 100],
      metadata: {
        licensePlate: 'A123BC',
        status: 'розыск'
      }
    },
    {
      id: 3,
      type: 'person',
      confidence: 0.87,
      timestamp: '14:23:19',
      boundingBox: [200, 150, 80, 180],
      metadata: {
        activity: 'ходьба',
        status: 'обычный'
      }
    }
  ]);
  
  // Имитация истории детекций
  const [detectionHistory] = useState<DetectedObject[]>([
    {
      id: 4,
      type: 'face',
      confidence: 0.92,
      timestamp: '14:22:10',
      boundingBox: [0, 0, 0, 0],
      metadata: {
        faceId: 'ID-2891',
        name: 'Петров П.П.',
        status: 'наблюдение'
      }
    },
    {
      id: 5,
      type: 'car',
      confidence: 0.96,
      timestamp: '14:21:45',
      boundingBox: [0, 0, 0, 0],
      metadata: {
        licensePlate: 'X567YZ',
        status: 'наблюдение'
      }
    },
    {
      id: 6,
      type: 'person',
      confidence: 0.85,
      timestamp: '14:20:30',
      boundingBox: [0, 0, 0, 0],
      metadata: {
        personCount: 3,
        status: 'обычный'
      }
    },
    {
      id: 7,
      type: 'object',
      confidence: 0.79,
      timestamp: '14:19:22',
      boundingBox: [0, 0, 0, 0],
      metadata: {
        objectType: 'Подозрительный предмет',
        status: 'подозрительный'
      }
    }
  ]);
  
  // Обработчики событий
  const handleSourceChange = (event: SelectChangeEvent<number>) => {
    setSelectedSource(event.target.value as number);
  };
  
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };
  
  const handleBrightnessChange = (_event: Event, newValue: number | number[]) => {
    setBrightness(newValue as number);
  };
  
  const handleContrastChange = (_event: Event, newValue: number | number[]) => {
    setContrast(newValue as number);
  };
  
  const handleScreenshot = () => {
    // В реальном приложении здесь будет логика создания скриншота
    alert('Скриншот сохранен');
    handleMenuClose();
  };
  
  const handleGridToggle = () => {
    setShowGrid(!showGrid);
    handleMenuClose();
  };
  
  const handleAutoDetectToggle = () => {
    setAutoDetect(!autoDetect);
  };
  
  // Получаем текущий источник видео
  const currentSource = videoSources.find(source => source.id === selectedSource);
  
  // Получаем иконку для типа детекции
  const getDetectionIcon = (type: string) => {
    switch(type) {
      case 'face': return <FaceIcon />;
      case 'car': return <CarIcon />;
      case 'person': return <PeopleIcon />;
      case 'object': 
      default: return <ObjectIcon />;
    }
  };
  
  // Получаем название типа детекции на русском
  const getDetectionTypeName = (type: string) => {
    switch(type) {
      case 'face': return 'Лицо';
      case 'car': return 'Автомобиль';
      case 'person': return 'Человек';
      case 'object': return 'Объект';
      default: return 'Неизвестно';
    }
  };
  
  // Получаем описание детекции
  const getDetectionDescription = (detection: DetectedObject) => {
    switch(detection.type) {
      case 'face': 
        return detection.metadata?.faceId 
          ? `ID: ${detection.metadata.faceId}` 
          : 'Нет данных';
      case 'car': 
        return detection.metadata?.licensePlate 
          ? `Номер: ${detection.metadata.licensePlate}` 
          : 'Номер не распознан';
      case 'person': 
        return detection.metadata?.personCount 
          ? `Кол-во: ${detection.metadata.personCount}` 
          : 'Один человек';
      case 'object': 
        return detection.metadata?.objectType 
          ? detection.metadata.objectType 
          : 'Неизвестный объект';
      default: 
        return 'Нет данных';
    }
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" gutterBottom>
        Видеоаналитика
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
        Система распознавания объектов и видеоаналитики
      </Typography>
      
      <Box component={Grid} container spacing={2} sx={{ flexGrow: 1 }}>
        {/* Основной блок видео */}
        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Источник видео</InputLabel>
                    <Select
                      value={selectedSource}
                      label="Источник видео"
                      onChange={handleSourceChange}
                    >
                      {videoSources.map(source => (
                        <MenuItem 
                          key={source.id} 
                          value={source.id}
                          disabled={source.status !== 'active'}
                        >
                          {source.name} 
                          {source.status !== 'active' && ` (${source.status === 'offline' ? 'Не доступен' : 'Ожидание'})`}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                    <Button 
                      variant="contained" 
                      color={isPlaying ? 'warning' : 'success'} 
                      startIcon={isPlaying ? <PauseIcon /> : <PlayIcon />}
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? 'Пауза' : 'Воспроизвести'}
                    </Button>
                    <Button 
                      variant="outlined" 
                      color="error" 
                      startIcon={<StopIcon />}
                      onClick={() => setIsPlaying(false)}
                    >
                      Стоп
                    </Button>
                    <IconButton 
                      color="primary"
                      onClick={handleMenuOpen}
                    >
                      <MoreIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
            
            <VideoContainer sx={{ mb: 2, flexGrow: 1 }}>
              <VideoPlaceholder>
                {/* Наложение детекций */}
                {detectedObjects.map(obj => (
                  <DetectionBox
                    key={obj.id}
                    type={obj.type}
                    sx={{
                      left: `${obj.boundingBox[0]}px`,
                      top: `${obj.boundingBox[1]}px`,
                      width: `${obj.boundingBox[2]}px`,
                      height: `${obj.boundingBox[3]}px`,
                      '&::after': {
                        content: `"${getDetectionTypeName(obj.type)} (${Math.floor(obj.confidence * 100)}%)"`,
                      }
                    }}
                  />
                ))}
                
                {/* Сетка для видео */}
                {showGrid && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '50px 50px',
                      pointerEvents: 'none',
                    }}
                  />
                )}
                
                {/* Индикатор статуса */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: '5px 10px',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: isPlaying ? 'success.main' : 'warning.main',
                    }}
                  />
                  <Typography variant="caption" color="white">
                    {isPlaying ? 'Прямой эфир' : 'Пауза'} - {currentSource?.name}
                  </Typography>
                </Box>
                
                {/* Временная метка */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: '5px 10px',
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="caption" color="white">
                    {new Date().toLocaleTimeString()}
                  </Typography>
                </Box>
                
                {/* Индикатор настроек */}
                {(brightness !== 100 || contrast !== 100) && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 10,
                      left: 10,
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      padding: '5px 10px',
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    {brightness !== 100 && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <BrightnessIcon fontSize="small" />
                        <Typography variant="caption" color="white">
                          {brightness}%
                        </Typography>
                      </Box>
                    )}
                    
                    {contrast !== 100 && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <ContrastIcon fontSize="small" />
                        <Typography variant="caption" color="white">
                          {contrast}%
                        </Typography>
                      </Box>
                    )}
                  </Box>
                )}
              </VideoPlaceholder>
            </VideoContainer>
            
            <Paper sx={{ p: 2 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <FormControlLabel
                  control={
                    <Switch 
                      checked={autoDetect} 
                      onChange={handleAutoDetectToggle}
                      color="success"
                    />
                  }
                  label="Автораспознавание"
                />
                
                <Divider orientation="vertical" flexItem />
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Лица:
                  </Typography>
                  <Chip 
                    icon={<FaceIcon />} 
                    label="Вкл" 
                    color="primary" 
                    size="small"
                    variant="outlined"
                  />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Автомобили:
                  </Typography>
                  <Chip 
                    icon={<CarIcon />} 
                    label="Вкл" 
                    color="primary"
                    size="small"
                    variant="outlined"
                  />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Люди:
                  </Typography>
                  <Chip 
                    icon={<PeopleIcon />} 
                    label="Вкл" 
                    color="primary"
                    size="small"
                    variant="outlined"
                  />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Объекты:
                  </Typography>
                  <Chip 
                    icon={<ObjectIcon />} 
                    label="Вкл" 
                    color="primary"
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </Stack>
            </Paper>
          </Box>
        </Grid>
        
        {/* Боковая панель */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Paper sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                  value={tabValue} 
                  onChange={handleTabChange}
                  variant="fullWidth"
                  textColor="primary"
                  indicatorColor="primary"
                >
                  <Tab label="Текущие детекции" />
                  <Tab 
                    label={
                      <Badge badgeContent={detectionHistory.length} color="error">
                        История
                      </Badge>
                    } 
                  />
                </Tabs>
              </Box>
              
              <TabPanel value={tabValue} index={0}>
                <Box sx={{ height: '100%', overflow: 'auto' }}>
                  <List>
                    {detectedObjects.length > 0 ? (
                      detectedObjects.map(detection => (
                        <React.Fragment key={detection.id}>
                          <ListItem 
                            alignItems="flex-start"
                            secondaryAction={
                              <IconButton edge="end" size="small">
                                <SaveIcon fontSize="small" />
                              </IconButton>
                            }
                          >
                            <ListItemIcon>
                              {getDetectionIcon(detection.type)}
                            </ListItemIcon>
                            <ListItemText
                              primary={`${getDetectionTypeName(detection.type)} (${Math.floor(detection.confidence * 100)}%)`}
                              secondary={
                                <React.Fragment>
                                  <Typography variant="body2" component="span">
                                    {getDetectionDescription(detection)}
                                  </Typography>
                                  <Typography variant="caption" component="div" color="text.secondary">
                                    {detection.timestamp}
                                  </Typography>
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                          <Divider variant="inset" component="li" />
                        </React.Fragment>
                      ))
                    ) : (
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Typography variant="body2" color="text.secondary">
                          Нет активных детекций
                        </Typography>
                      </Box>
                    )}
                  </List>
                </Box>
              </TabPanel>
              
              <TabPanel value={tabValue} index={1}>
                <Box sx={{ height: '100%', overflow: 'auto' }}>
                  <List>
                    {detectionHistory.map(detection => (
                      <React.Fragment key={detection.id}>
                        <ListItem 
                          alignItems="flex-start"
                          secondaryAction={
                            <IconButton edge="end" size="small">
                              <SaveIcon fontSize="small" />
                            </IconButton>
                          }
                        >
                          <ListItemIcon>
                            {getDetectionIcon(detection.type)}
                          </ListItemIcon>
                          <ListItemText
                            primary={`${getDetectionTypeName(detection.type)} (${Math.floor(detection.confidence * 100)}%)`}
                            secondary={
                              <React.Fragment>
                                <Typography variant="body2" component="span">
                                  {getDetectionDescription(detection)}
                                </Typography>
                                <Typography variant="caption" component="div" color="text.secondary">
                                  {detection.timestamp}
                                </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </React.Fragment>
                    ))}
                  </List>
                </Box>
              </TabPanel>
              
              <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider', mt: 'auto' }}>
                <Button 
                  fullWidth 
                  variant="contained" 
                  color="error" 
                  startIcon={<NotificationsIcon />}
                >
                  Создать оповещение
                </Button>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Box>
      
      {/* Меню настроек видео */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleScreenshot}>
          <ListItemIcon>
            <ScreenshotIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            Сделать скриншот
          </ListItemText>
        </MenuItem>
        
        <MenuItem onClick={handleGridToggle}>
          <ListItemIcon>
            <GridIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            {showGrid ? 'Скрыть сетку' : 'Показать сетку'}
          </ListItemText>
        </MenuItem>
        
        <Divider />
        
        <MenuItem>
          <ListItemText>
            Яркость: {brightness}%
          </ListItemText>
        </MenuItem>
        <MenuItem sx={{ pt: 0 }}>
          <Slider
            size="small"
            value={brightness}
            onChange={handleBrightnessChange}
            min={50}
            max={150}
            sx={{ width: 200 }}
          />
        </MenuItem>
        
        <MenuItem>
          <ListItemText>
            Контрастность: {contrast}%
          </ListItemText>
        </MenuItem>
        <MenuItem sx={{ pt: 0 }}>
          <Slider
            size="small"
            value={contrast}
            onChange={handleContrastChange}
            min={50}
            max={150}
            sx={{ width: 200 }}
          />
        </MenuItem>
        
        <Divider />
        
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <DownloadIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            Скачать видео
          </ListItemText>
        </MenuItem>
        
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TimelineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            Показать аналитику
          </ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default VideoAnalytics; 