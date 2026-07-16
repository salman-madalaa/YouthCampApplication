import { Box, Drawer, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import AppSidebar from '../components/AppSidebar';

const drawerWidth = 240;

function MainLayout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppHeader title="Youth Camp 2026" />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <AppSidebar />
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;