import { httpClient } from './http/client'

import type { SignInData } from '@/services/types/auth'
import type { User } from '@/models/user'

const signUp = async () => {
    return httpClient.post<User>('/auth/signup', {})
}

const signIn = async (data: SignInData) => {
    return httpClient.post<User>('/auth/signin', data)
}

export { signUp, signIn }
