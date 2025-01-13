import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import { createSession, joinSession } from '@/services/session.service'

import type { Session } from '@/models/session.model'

export const useSessionStore = defineStore('session', () => {
    const session = ref<Session | null>(null)
    const isHost = ref<boolean>(false)
    const userAlias = useLocalStorage<string>('userAlias', null)

    const createNewSession = async (payload: { userAlias: string }): Promise<Session> => {
        userAlias.value = payload.userAlias
        isHost.value = true
        const { data } = await createSession(payload)
        session.value = data
        return data
    }

    const joinExistingSession = async (payload: { sessionId: string; userAlias: string }): Promise<Session> => {
        userAlias.value = payload.userAlias
        const { data } = await joinSession(payload)
        session.value = data
        return data
    }

    return {
        session: readonly(session),
        isHost: readonly(isHost),
        userAlias: readonly(userAlias),

        createNewSession,
        joinExistingSession,
    }
})
