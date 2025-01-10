import axios from 'axios'
import type { AxiosInstance } from 'axios'

import useCookies from '@/composables/useCookies'

import { ACCESS_TOKEN } from '@/constants/cookies'

import type { HttpClient, RequestData, RequestOptions, RequestResponse } from './types'

class AxiosHttpClient implements HttpClient {
    private instance: AxiosInstance

    constructor() {
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        this.instance.interceptors.request.use((config) => {
            const { getCookie } = useCookies()
            const token = getCookie(ACCESS_TOKEN)

            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }

            return config
        })

        this.instance.interceptors.response.use(
            (response) => response.data,
            (error) => Promise.reject(error)
        )
    }

    async get<T>(url: string, options: RequestOptions = {}): Promise<RequestResponse<T>> {
        const response = await this.instance.get<T>(url, options)
        return { data: response.data }
    }

    async post<T>(url: string, data: RequestData, options: RequestOptions = {}): Promise<RequestResponse<T>> {
        const response = await this.instance.post<T>(url, data, options)
        return { data: response.data }
    }

    async put<T>(url: string, data: RequestData, options: RequestOptions = {}): Promise<RequestResponse<T>> {
        const response = await this.instance.put<T>(url, data, options)
        return { data: response.data }
    }

    async patch<T>(url: string, data: RequestData, options: RequestOptions = {}): Promise<RequestResponse<T>> {
        const response = await this.instance.patch<T>(url, data, options)
        return { data: response.data }
    }

    async delete<T>(url: string, options: RequestOptions = {}): Promise<RequestResponse<T>> {
        const response = await this.instance.delete<T>(url, options)
        return { data: response.data }
    }
}

export default AxiosHttpClient
