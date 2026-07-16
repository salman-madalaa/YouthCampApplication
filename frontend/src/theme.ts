import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3a8a',
    },
    secondary: {
      main: '#f59e0b',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;