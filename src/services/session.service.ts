import { httpClient } from './http/client'
import type { RequestResponse } from './http/types'

import type { CreateSessionData, JoinSessionData } from '@/services/types/session'
import type { Session } from '@/models/session.model'

const createSession = async (data: CreateSessionData): Promise<RequestResponse<Session>> => {
    return httpClient.post<Session>('/sessions', { userAlias: data.userAlias })
}

const joinSession = async (data: JoinSessionData): Promise<RequestResponse<Session>> => {
    return httpClient.post<Session>(`/sessions/${data.sessionId}/join`, { userAlias: data.userAlias })
}

export { createSession, joinSession }
