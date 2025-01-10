type RequestData = unknown

type RequestOptions = {
    params?: Record<string, unknown>
    headers?: Record<string, string>
}

type RequestResponse<T> = T

interface HttpClient {
    get<T>(url: string, options: RequestOptions): Promise<RequestResponse<T>>
    post<T>(url: string, data: RequestData, options: RequestOptions): Promise<RequestResponse<T>>
    put<T>(url: string, data: RequestData, options: RequestOptions): Promise<RequestResponse<T>>
    patch<T>(url: string, data: RequestData, options: RequestOptions): Promise<RequestResponse<T>>
    delete<T>(url: string, options: RequestOptions): Promise<RequestResponse<T>>
}

export type { HttpClient, RequestData, RequestOptions, RequestResponse }
