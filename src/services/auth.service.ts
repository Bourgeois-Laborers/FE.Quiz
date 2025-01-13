import { httpClient } from './http/client'
import type { RequestResponse } from './http/types'

import type { SignUpResponse, SignInData, SignInResponse } from '@/services/types/auth'

const signUp = async (): Promise<RequestResponse<SignUpResponse>> => {
    return httpClient.post<SignUpResponse>('/auth/sign-up', {})
}

const signIn = async (data: SignInData): Promise<RequestResponse<SignInResponse>> => {
    return httpClient.post<SignInResponse>('/auth/sign-in', data)
}

export { signUp, signIn }
