import httpClient from './http/client'

import type { SignUpData } from '@/models/auth'
import type { User } from '@/models/user'

export const signUp = async (data: SignUpData) => {
    return httpClient.post<User>('/auth/signup', data)
}
