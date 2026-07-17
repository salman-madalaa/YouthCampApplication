import api from './axios';
import { LoginRequest, LoginResponse } from '../types/auth';

export async function login(
  loginRequest: LoginRequest,
): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>(
    '/api/auth/login',
    loginRequest,
  );

  return response.data;
}