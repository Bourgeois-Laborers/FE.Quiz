import { useAuthStore } from '@/stores/auth.store'

export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore()
  
  if (process.client) {
    await authStore.restoreAuth()
  }
})