import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { signUp } from '@/services/auth'

import type { User } from '@/models/user'

export const useAuthStore = defineStore('auth', () => {
    const userData = ref<User | null>(null)

    const user = computed(() => userData.value)

    const signUpUser = async (username: string) => {
        const { data } = await signUp({ username })
        userData.value = data
    }

    return {
        user,

        signUpUser,
    }
})
