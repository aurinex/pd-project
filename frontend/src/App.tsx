import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

// Компоненты
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MapPage from './pages/MapPage'
import VideoAnalytics from './pages/VideoAnalytics'
import NotificationsPage from './pages/NotificationsPage'
import UsersPage from './pages/UsersPage'
import SettingsPage from './pages/SettingsPage'
import DronePage from './pages/DronePage'

// Тема приложения
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100vh',
          width: '100vw',
          overflow: 'hidden'
        }}>
          <Header />
          <Box sx={{ 
            display: 'flex', 
            flexGrow: 1,
            overflow: 'hidden'
          }}>
            <Sidebar />
            <Box component="main" sx={{ 
              flexGrow: 1, 
              p: 3,
              overflowY: 'auto',
              overflowX: 'hidden',
              height: 'calc(100vh - 64px)'
            }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/video" element={<VideoAnalytics />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/drones" element={<DronePage />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
