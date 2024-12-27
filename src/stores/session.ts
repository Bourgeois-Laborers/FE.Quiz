import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'

import { createSession, updateSession, joinSession } from '@/services/session'

import type { Session } from '@/models/session'

export const useSessionStore = defineStore('session', () => {
    const session = ref<Session | null>(null)

    const createNewSession = async (userAlias: string): Promise<Session> => {
        const { data } = await createSession({ userAlias })
        session.value = data
        return data
    }

    const updateExistingSession = async () => {
        // TODO
    }

    const joinExistingSession = async (sessionId: string, userAlias: string): Promise<Session> => {
        const { data } = await joinSession({ sessionId, userAlias })
        session.value = data
        return data
    }

    return {
        session: readonly(session),

        createNewSession,
        updateExistingSession,
        joinExistingSession,
    }
})
