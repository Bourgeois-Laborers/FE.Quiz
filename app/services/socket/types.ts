export interface SocketError {
  message: string;
  code?: string;
  statusCode?: number;
}

export interface SocketConfig {
  url?: string;
  timeout?: number;
  autoConnect?: boolean;
  maxReconnectAttempts?: number;
  reconnectDelay?: number;
  transports?: string[];
}

export interface SocketEventCallback<T = any> {
  (data: T): void;
}

export interface SocketClient {
  connect(): Promise<void>;
  disconnect(): void;
  emit(event: string, data?: any): void;
  on<T = any>(event: string, callback: SocketEventCallback<T>): void;
  off(event: string, callback?: SocketEventCallback): void;
  isConnected(): boolean;
}
