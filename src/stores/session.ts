import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'

import { createSession, joinSession } from '@/services/session'

import type { Session } from '@/models/session'

export const useSessionStore = defineStore('session', () => {
    const session = ref<Session | null>(null)

    const createNewSession = async (payload: { userAlias: string }): Promise<Session> => {
        const { data } = await createSession(payload)
        session.value = data
        return data
    }

    const joinExistingSession = async (payload: { sessionId: string, userAlias: string }): Promise<Session> => {
        const { data } = await joinSession(payload)
        session.value = data
        return data
    }

    return {
        session: readonly(session),

        createNewSession,
        joinExistingSession,
    }
})
