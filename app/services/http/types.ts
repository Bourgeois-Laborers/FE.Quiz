export interface ApiResponse<T = any> {
  data: T
  message?: string
}

export interface ApiError {
  message: string
  statusCode?: number
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface RequestConfig {
  baseURL?: string
  timeout?: number
  retry?: number
  credentials?: RequestCredentials
  headers?: Record<string, string>
}

export interface RequestOptions {
  method?: HttpMethod
  body?: any
  query?: Record<string, any>
  headers?: Record<string, string>
}

export interface HttpClient {
  get<T>(url: string, query?: Record<string, any>): Promise<ApiResponse<T>>
  post<T>(url: string, body?: any): Promise<ApiResponse<T>>
  put<T>(url: string, body?: any): Promise<ApiResponse<T>>
  patch<T>(url: string, body?: any): Promise<ApiResponse<T>>
  delete<T>(url: string): Promise<ApiResponse<T>>
}
