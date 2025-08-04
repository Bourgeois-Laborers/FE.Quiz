import { httpClient } from "./http/http.client";
import type { ApiResponse } from "./http/types";

export interface User {
  id: string;
}

export interface LoginCredentials {
  userId: string;
}

export class AuthService {
  async login(credentials: LoginCredentials): Promise<ApiResponse<User>> {
    return httpClient.post<User>("/auth/login", credentials);
  }

  async register(): Promise<ApiResponse<User>> {
    return httpClient.post<User>("/auth/register");
  }

  async logout(): Promise<ApiResponse<void>> {
    return httpClient.post<void>("/auth/logout");
  }

  async restore(): Promise<ApiResponse<User>> {
    return httpClient.get<User>("/auth/user");
  }
}

export const authService = new AuthService();
