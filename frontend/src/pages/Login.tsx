import { useState } from 'react';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Paper, 
  Alert,
  InputAdornment,
  IconButton,
  CircularProgress
} from '@mui/material';
import {
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  LocalPolice as PoliceIcon,
  Email as EmailIcon
} from '@mui/icons-material';
import authService from '../api/authService';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin?: () => void;
}

const Login = ({ onLogin = () => { console.log('Успешный вход'); } }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }
    
    try {
      setLoading(true);
      setError('');
      
      // Логируем данные для отладки
      console.log('Отправляемые данные:', { email, password });
      
      // Вызываем API для авторизации
      await authService.login({ email, password });
      
      // Если успешно, вызываем колбэк и перенаправляем на главную
      onLogin();
      navigate('/');
    } catch (err) {
      console.error('Ошибка входа:', err);
      
      // Отображаем ошибку от сервера или общую ошибку
      if (err && 
          typeof err === 'object' && 
          'response' in err && 
          err.response && 
          typeof err.response === 'object' && 
          'data' in err.response && 
          err.response.data && 
          typeof err.response.data === 'object' &&
          'message' in err.response.data) {
        setError((err.response.data as {message: string}).message);
      } else {
        setError('Ошибка авторизации. Пожалуйста, проверьте свои данные и попробуйте снова.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 2,
        backgroundColor: 'background.default',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1579430614330-7c1dfcf255b8)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          maxWidth: 400,
          width: '100%',
          borderRadius: 2,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(30, 30, 30, 0.85)',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <PoliceIcon sx={{ fontSize: 50, mb: 1, color: 'primary.main' }} />
          <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold' }}>
            SkyPatrol МВД
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1, mb: 3, textAlign: 'center' }}>
            Система управления беспилотными летательными аппаратами
          </Typography>
        </Box>
        
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@skypatrol.ru"
            helperText="Используйте полный email (например, admin@skypatrol.ru)"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2, py: 1.2 }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Войти в систему'
            )}
          </Button>
          
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              Система предназначена для служебного пользования сотрудниками МВД России
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login; 