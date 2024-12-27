import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'

import { signUp, signIn } from '@/services/auth'

import type { User } from '@/models/user'

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)

    const signUpUser = async (): Promise<User> => {
        const { data } = await signUp()
        user.value = data
        return data
    }

    const signInUser = async (userId: string): Promise<User> => {
        const { data } = await signIn({ id: userId })
        user.value = data
        return data
    }

    return {
        user: readonly(user),

        signUpUser,
        signInUser,
    }
})
