import { Box, Button, TextField, Typography } from '@mui/material';
import { FormEvent, useState } from 'react';
import { login } from '../api/authApi';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await login({
        username,
        password,
      });

      localStorage.setItem('token', response.token);

      console.log('Login successful');
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 400,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h4">
          Youth Camp Login
        </Typography>

        <TextField
          label="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;