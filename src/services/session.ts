import { httpClient } from './http/client'

import type { CreateSessionData, UpdateSessionData, JoinSessionData } from '@/services/types/session'
import type { Session } from '@/models/session'

const createSession = async (data: CreateSessionData) => {
    return httpClient.post<Session>('/session', { userAlias: data.userAlias })
}

const updateSession = async (data: UpdateSessionData) => {
    return httpClient.post<Session>('/session', data)
}

const joinSession = async (data: JoinSessionData) => {
    return httpClient.post<Session>(`/session/${data.sessionId}/join`, { userAlias: data.userAlias })
}

export { createSession, updateSession, joinSession }
