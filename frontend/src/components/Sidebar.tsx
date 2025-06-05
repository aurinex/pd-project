import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider,
  Toolbar,
  Typography,
  Collapse
} from '@mui/material';
import { 
  Dashboard as DashboardIcon,
  Map as MapIcon,
  Videocam as VideocamIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  FlightTakeoff as DroneIcon,
  Route as RouteIcon,
  Notifications as AlertsIcon,
  People as UsersIcon
} from '@mui/icons-material';

const drawerWidth = 260;

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState<Record<string, boolean>>({
    drones: false,
    video: false
  });

  const handleClick = (section: string) => {
    setOpen({
      ...open,
      [section]: !open[section]
    });
  };

  // Проверка активного маршрута
  const isActive = (path: string) => location.pathname === path;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: drawerWidth, 
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(255, 255, 255, 0.12)'
        },
      }}
    >
      <Toolbar sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        py: 1
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <DroneIcon sx={{ fontSize: 28 }} />
          <Typography variant="h6" component="div">
            SkyPatrol
          </Typography>
        </Box>
      </Toolbar>
      
      <Divider />
      
      <List component="nav">
        <ListItem 
          component={Link} 
          to="/" 
          selected={isActive('/')}
          sx={{ 
            color: 'inherit',
            textDecoration: 'none',
            '&.Mui-selected': {
              backgroundColor: 'action.selected'
            },
            '&:hover': {
              backgroundColor: 'action.hover'
            }
          }}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Панель управления" />
        </ListItem>
        
        <ListItem 
          component={Link} 
          to="/map" 
          selected={isActive('/map')}
          sx={{ 
            color: 'inherit',
            textDecoration: 'none',
            '&.Mui-selected': {
              backgroundColor: 'action.selected'
            },
            '&:hover': {
              backgroundColor: 'action.hover'
            }
          }}
        >
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Карта операций" />
        </ListItem>
        
        <ListItem onClick={() => handleClick('drones')}>
          <ListItemIcon>
            <DroneIcon />
          </ListItemIcon>
          <ListItemText primary="Управление БПЛА" />
          {open.drones ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        
        <Collapse in={open.drones} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem 
              component={Link}
              to="/drones"
              selected={isActive('/drones')}
              sx={{ 
                pl: 4,
                color: 'inherit',
                textDecoration: 'none',
                '&.Mui-selected': {
                  backgroundColor: 'action.selected'
                },
                '&:hover': {
                  backgroundColor: 'action.hover'
                }
              }}
            >
              <ListItemIcon>
                <DroneIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Статус БПЛА" />
            </ListItem>
            
            <ListItem
              sx={{ pl: 4 }}
            >
              <ListItemIcon>
                <RouteIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Маршруты" />
            </ListItem>
          </List>
        </Collapse>
        
        <ListItem 
          component={Link} 
          to="/video" 
          selected={isActive('/video')}
          sx={{ 
            color: 'inherit',
            textDecoration: 'none',
            '&.Mui-selected': {
              backgroundColor: 'action.selected'
            },
            '&:hover': {
              backgroundColor: 'action.hover'
            }
          }}
        >
          <ListItemIcon>
            <VideocamIcon />
          </ListItemIcon>
          <ListItemText primary="Видеоаналитика" />
        </ListItem>
        
        <Divider sx={{ my: 1 }} />
        
        <ListItem
          component={Link}
          to="/notifications"
          selected={isActive('/notifications')}
          sx={{ 
            color: 'inherit',
            textDecoration: 'none',
            '&.Mui-selected': {
              backgroundColor: 'action.selected'
            },
            '&:hover': {
              backgroundColor: 'action.hover'
            }
          }}
        >
          <ListItemIcon>
            <AlertsIcon />
          </ListItemIcon>
          <ListItemText primary="Оповещения" />
        </ListItem>
        
        <ListItem
          component={Link}
          to="/users"
          selected={isActive('/users')}
          sx={{ 
            color: 'inherit',
            textDecoration: 'none',
            '&.Mui-selected': {
              backgroundColor: 'action.selected'
            },
            '&:hover': {
              backgroundColor: 'action.hover'
            }
          }}
        >
          <ListItemIcon>
            <UsersIcon />
          </ListItemIcon>
          <ListItemText primary="Пользователи" />
        </ListItem>
        
        <ListItem
          component={Link}
          to="/settings"
          selected={isActive('/settings')}
          sx={{ 
            color: 'inherit',
            textDecoration: 'none',
            '&.Mui-selected': {
              backgroundColor: 'action.selected'
            },
            '&:hover': {
              backgroundColor: 'action.hover'
            }
          }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Настройки" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar; 