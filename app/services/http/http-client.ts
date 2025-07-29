import type { ApiResponse, HttpClient, RequestConfig } from './types'

class NuxtHttpClient implements HttpClient {
  private client: typeof $fetch
  private config: RequestConfig

  constructor(config: RequestConfig = {}) {
    this.config = {
      timeout: 10000,
      retry: 1,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      ...config
    }

    const createApiError = (message: string, statusCode: number): Error => {
      const error = new Error(message) as Error & { statusCode: number }
      error.statusCode = statusCode
      return error
    }

    this.client = $fetch.create({
      baseURL: this.config.baseURL || useRuntimeConfig().public.apiBaseUrl,
      timeout: this.config.timeout,
      retry: this.config.retry,
      credentials: this.config.credentials,
      headers: this.config.headers,
      
      onRequest({ options }) {
        options.credentials = 'include'
      },
      
      onRequestError({ error }) {
        console.error('HTTP Request error:', error)
        throw createApiError('Request failed', 0)
      },
      
      onResponseError({ response }) {
        console.error('HTTP Response error:', response.status, response.statusText)
        
        switch (response.status) {
          case 401:
            navigateTo('/login')
            throw createApiError('Unauthorized', 401)
          case 403:
            throw createApiError('Forbidden', 403)
          case 404:
            throw createApiError('Not Found', 404)
          case 500:
            throw createApiError('Server Error', 500)
          default:
            throw createApiError(response.statusText || 'Unknown error', response.status)
        }
      }
    })
  }

  async get<T>(url: string, query?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.client<ApiResponse<T>>(url, { 
      method: 'GET', 
      query 
    })
  }

  async post<T>(url: string, body?: any): Promise<ApiResponse<T>> {
    return this.client<ApiResponse<T>>(url, { 
      method: 'POST', 
      body 
    })
  }

  async put<T>(url: string, body?: any): Promise<ApiResponse<T>> {
    return this.client<ApiResponse<T>>(url, { 
      method: 'PUT', 
      body 
    })
  }

  async patch<T>(url: string, body?: any): Promise<ApiResponse<T>> {
    return this.client<ApiResponse<T>>(url, { 
      method: 'PATCH', 
      body 
    })
  }

  async delete<T>(url: string): Promise<ApiResponse<T>> {
    return this.client<ApiResponse<T>>(url, { 
      method: 'DELETE' 
    })
  }
}

export const httpClient = new NuxtHttpClient()
export { NuxtHttpClient }
