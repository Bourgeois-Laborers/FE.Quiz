import { defineStore } from 'pinia'
import { readonly, ref, computed } from 'vue'

import { signUp, signIn } from '@/services/auth.service'

import useCookies from '@/composables/useCookies'
import useJwt from '@/composables/useJwt'

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/cookies'

import type { User } from '@/models/user.model'
import type { DecodedToken } from '@/services/types/auth'

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const isAuthenticated = computed<boolean>(() => !!user.value)

    const { setCookie, removeCookie } = useCookies()
    const { decode } = useJwt()

    const transformDecodedTokenToUser = (decodedToken: DecodedToken): User => {
        return {
            id: decodedToken.sub,
        }
    }

    const signUpUser = async (): Promise<string> => {
        const { data } = await signUp()

        const tokenData = decode<DecodedToken>(data.accessToken)
        const userData = transformDecodedTokenToUser(tokenData)

        user.value = userData
        setCookie(ACCESS_TOKEN, data.accessToken)
        setCookie(REFRESH_TOKEN, data.refreshToken)

        return data.accessToken
    }

    const signInUser = async (userId: string): Promise<string> => {
        const { data } = await signIn({ id: userId })

        const tokenData = decode<DecodedToken>(data.accessToken)
        const userData = transformDecodedTokenToUser(tokenData)

        user.value = userData
        setCookie(ACCESS_TOKEN, data.accessToken)
        setCookie(REFRESH_TOKEN, data.refreshToken)

        return data.accessToken
    }

    const signOutUser = (): void => {
        user.value = null
        removeCookie(ACCESS_TOKEN)
        removeCookie(REFRESH_TOKEN)
    }

    return {
        user: readonly(user),
        isAuthenticated,

        signUpUser,
        signInUser,
        signOutUser,
    }
})
