import axios from 'axios'
import type { AxiosInstance } from 'axios'

import type { HttpClient, RequestData, RequestOptions, RequestResponse } from './types'

class AxiosHttpClient implements HttpClient {
    private instance: AxiosInstance

    constructor() {
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
        })
    }

    async get<T>(url: string, options?: RequestOptions): Promise<RequestResponse<T>> {
        const response = await this.instance.get<T>(url, options)
        return { data: response.data }
    }

    async post<T>(url: string, data: RequestData, options?: RequestOptions): Promise<RequestResponse<T>> {
        const response = await this.instance.post<T>(url, data, options)
        return { data: response.data }
    }

    async put<T>(url: string, data: RequestData, options?: RequestOptions): Promise<RequestResponse<T>> {
        const response = await this.instance.put<T>(url, data, options)
        return { data: response.data }
    }

    async patch<T>(url: string, data: RequestData, options?: RequestOptions): Promise<RequestResponse<T>> {
        const response = await this.instance.patch<T>(url, data, options)
        return { data: response.data }
    }

    async delete<T>(url: string, options?: RequestOptions): Promise<RequestResponse<T>> {
        const response = await this.instance.delete<T>(url, options)
        return { data: response.data }
    }
}

export default AxiosHttpClient
