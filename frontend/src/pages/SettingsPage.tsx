import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Tab
} from '@mui/material';
import {
  Save as SaveIcon,
  Restore as RestoreIcon
} from '@mui/icons-material';

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
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const SettingsPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [language, setLanguage] = useState('ru');
  const [theme, setTheme] = useState('dark');
  const [mapProvider, setMapProvider] = useState('openstreetmap');
  const [apiUrl, setApiUrl] = useState('http://localhost:8000/api');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Настройки
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
        Конфигурация системы SkyPatrol
      </Typography>

      <Paper sx={{ width: '100%', mb: 2 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Общие" />
          <Tab label="Интерфейс" />
          <Tab label="Система" />
          <Tab label="Оповещения" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Язык интерфейса</InputLabel>
                <Select
                  value={language}
                  label="Язык интерфейса"
                  onChange={(e) => setLanguage(e.target.value as string)}
                >
                  <MenuItem value="ru">Русский</MenuItem>
                  <MenuItem value="en">English</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Тема оформления</InputLabel>
                <Select
                  value={theme}
                  label="Тема оформления"
                  onChange={(e) => setTheme(e.target.value as string)}
                >
                  <MenuItem value="dark">Темная</MenuItem>
                  <MenuItem value="light">Светлая</MenuItem>
                  <MenuItem value="system">Системная</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button variant="outlined" startIcon={<RestoreIcon />}>
                  Сбросить
                </Button>
                <Button variant="contained" startIcon={<SaveIcon />}>
                  Сохранить
                </Button>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Провайдер карт</InputLabel>
                <Select
                  value={mapProvider}
                  label="Провайдер карт"
                  onChange={(e) => setMapProvider(e.target.value as string)}
                >
                  <MenuItem value="openstreetmap">OpenStreetMap</MenuItem>
                  <MenuItem value="google">Google Maps</MenuItem>
                  <MenuItem value="yandex">Яндекс.Карты</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={notificationsEnabled}
                    onChange={(e) => setNotificationsEnabled(e.target.checked)}
                    color="primary"
                  />
                }
                label="Включить уведомления"
                sx={{ mt: 3 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={soundEnabled}
                    onChange={(e) => setSoundEnabled(e.target.checked)}
                    color="primary"
                  />
                }
                label="Звуковые оповещения"
                sx={{ mt: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button variant="outlined" startIcon={<RestoreIcon />}>
                  Сбросить
                </Button>
                <Button variant="contained" startIcon={<SaveIcon />}>
                  Сохранить
                </Button>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="URL API сервера"
                variant="outlined"
                value={apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button variant="outlined" startIcon={<RestoreIcon />}>
                  Сбросить
                </Button>
                <Button variant="contained" startIcon={<SaveIcon />}>
                  Сохранить
                </Button>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={true}
                    color="primary"
                  />
                }
                label="Уведомления о низком заряде батареи"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={true}
                    color="primary"
                  />
                }
                label="Уведомления о завершении миссии"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={true}
                    color="primary"
                  />
                }
                label="Критические предупреждения"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={false}
                    color="primary"
                  />
                }
                label="Информационные сообщения"
              />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button variant="outlined" startIcon={<RestoreIcon />}>
                  Сбросить
                </Button>
                <Button variant="contained" startIcon={<SaveIcon />}>
                  Сохранить
                </Button>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>
    </Box>
  );
};

export default SettingsPage; 