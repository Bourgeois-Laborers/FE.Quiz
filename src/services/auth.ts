import { httpClient } from './http/client'

import type { SignUpResponse, SignInData, SignInResponse } from '@/services/types/auth'

const signUp = async () => {
    return httpClient.post<SignUpResponse>('/auth/sign-up', {})
}

const signIn = async (data: SignInData) => {
    return httpClient.post<SignInResponse>('/auth/sign-in', data)
}

export { signUp, signIn }
