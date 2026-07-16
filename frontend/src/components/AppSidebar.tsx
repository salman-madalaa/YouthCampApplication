import {
  Box,
  List,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import NavItem from './NavItem';
import { navigationItems } from '../config/navigation';

function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {navigationItems.map((item) => (
          <NavItem
            key={item.path}
            label={item.label}
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          />
        ))}
      </List>
    </Box>
  );
}

export default AppSidebar;