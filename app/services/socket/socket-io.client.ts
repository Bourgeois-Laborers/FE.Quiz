import { io, Socket } from "socket.io-client";
import type {
  SocketClient,
  SocketConfig,
  SocketError,
  SocketEventCallback,
} from "./types";

class IOSocketClient implements SocketClient {
  private socket: Socket | null = null;
  private config: SocketConfig;
  private reconnectAttempts = 0;

  constructor(config: SocketConfig = {}) {
    this.config = {
      url: "ws://localhost:3000",
      timeout: 20000,
      autoConnect: false,
      maxReconnectAttempts: 5,
      reconnectDelay: 1000,
      transports: ["websocket", "polling"],
      ...config,
    };
  }

  async connect(): Promise<void> {
    if (this.socket?.connected) {
      return;
    }

    return new Promise((resolve, reject) => {
      const createSocketError = (
        message: string,
        code?: string
      ): SocketError => {
        return { message, code };
      };

      this.socket = io(this.config.url!, {
        autoConnect: this.config.autoConnect,
        timeout: this.config.timeout,
        transports: this.config.transports,
      });

      this.socket.on("connect", () => {
        this.reconnectAttempts = 0;
        resolve();
      });

      this.socket.on("connect_error", (error) => {
        console.error("Socket connection error:", error);
        reject(
          createSocketError(
            "Failed to connect to socket server",
            "CONNECTION_ERROR"
          )
        );
      });

      this.socket.on("disconnect", (reason) => {
        console.warn("Socket disconnected:", reason);
        if (reason === "io server disconnect") {
          this.handleReconnection();
        }
      });

      this.socket.on("error", (error) => {
        console.error("Socket error:", error);
      });

      this.socket.connect();
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.disconnect();
      this.socket = null;
      this.reconnectAttempts = 0;
    }
  }

  emit(event: string, data?: any): void {
    if (!this.socket?.connected) {
      throw new Error("Socket is not connected. Call connect() first.");
    }
    this.socket.emit(event, data);
  }

  on<T = any>(event: string, callback: SocketEventCallback<T>): void {
    if (!this.socket) {
      throw new Error("Socket is not initialized. Call connect() first.");
    }
    this.socket.on(event, callback);
  }

  off(event: string, callback?: SocketEventCallback): void {
    if (this.socket) {
      if (callback) {
        this.socket.off(event, callback);
      } else {
        this.socket.off(event);
      }
    }
  }

  isConnected(): boolean {
    return this.socket?.connected || false;
  }

  private async handleReconnection(): Promise<void> {
    if (this.reconnectAttempts >= this.config.maxReconnectAttempts!) {
      console.error("Max reconnection attempts reached");
      return;
    }

    this.reconnectAttempts++;
    console.log(
      `Attempting to reconnect... (${this.reconnectAttempts}/${this.config.maxReconnectAttempts})`
    );

    setTimeout(async () => {
      try {
        await this.connect();
      } catch (error) {
        console.error("Reconnection failed:", error);
        this.handleReconnection();
      }
    }, this.config.reconnectDelay! * this.reconnectAttempts);
  }
}

export const socketClient = new IOSocketClient({
  url: process.env.VITE_WEBSOCKET_BASE_URL,
});
export { IOSocketClient };
