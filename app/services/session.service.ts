import { httpClient } from "./http/http.client";
import type { ApiResponse } from "./http/types";

export interface Session {
  id: string;
}

export interface CreateSessionPayload {
  userAlias: string;
}

export interface JoinSessionPayload {
  userAlias: string;
}

export class SessionService {
  async get(sessionId: string): Promise<ApiResponse<Session>> {
    return httpClient.get<Session>(`/session/${sessionId}`);
  }

  async create(payload: CreateSessionPayload): Promise<ApiResponse<Session>> {
    return httpClient.post<Session>("/session", payload);
  }

  async join(payload: JoinSessionPayload): Promise<ApiResponse<Session>> {
    return httpClient.post<Session>("/session/join", payload);
  }

  async leave(): Promise<ApiResponse<void>> {
    return httpClient.post<void>("/session/leave");
  }
}

export const sessionService = new SessionService();
