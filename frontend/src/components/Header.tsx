import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Badge,
  Box,
  Menu,
  MenuItem,
  Tooltip
} from '@mui/material';
import { 
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
  Settings as SettingsIcon
} from '@mui/icons-material';

interface HeaderProps {
  toggleSidebar?: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationsAnchor, setNotificationsAnchor] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationsAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationsClose = () => {
    setNotificationsAnchor(null);
  };

  return (
    <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {toggleSidebar && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleSidebar}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SkyPatrol МВД - Система управления БПЛА
        </Typography>

        <Box sx={{ display: 'flex' }}>
          <Tooltip title="Уведомления">
            <IconButton 
              color="inherit"
              onClick={handleNotificationsOpen}
            >
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Настройки">
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Профиль">
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>
        </Box>
        
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          keepMounted
        >
          <MenuItem onClick={handleMenuClose}>Профиль</MenuItem>
          <MenuItem onClick={handleMenuClose}>Настройки аккаунта</MenuItem>
          <MenuItem onClick={handleMenuClose}>Выйти</MenuItem>
        </Menu>
        
        <Menu
          anchorEl={notificationsAnchor}
          open={Boolean(notificationsAnchor)}
          onClose={handleNotificationsClose}
          keepMounted
        >
          <MenuItem onClick={handleNotificationsClose}>
            Обнаружен подозрительный объект в секторе A
          </MenuItem>
          <MenuItem onClick={handleNotificationsClose}>
            БПЛА №3 возвращается на базу (низкий заряд)
          </MenuItem>
          <MenuItem onClick={handleNotificationsClose}>
            Распознан разыскиваемый автомобиль: A123BC
          </MenuItem>
          <MenuItem onClick={handleNotificationsClose}>
            Получены новые данные аналитики
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 