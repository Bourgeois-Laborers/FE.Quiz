import { httpClient } from './http/client'

import type { CreateSessionData, JoinSessionData } from '@/services/types/session'
import type { Session } from '@/models/session'

const createSession = async (data: CreateSessionData) => {
    return httpClient.post<Session>('/sessions', { userAlias: data.userAlias })
}

const joinSession = async (data: JoinSessionData) => {
    return httpClient.post<Session>(`/sessions/${data.sessionId}/join`, { userAlias: data.userAlias })
}

export { createSession, joinSession }
