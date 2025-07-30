import { useAuthStore } from "@/stores/auth.store";

export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore();

  if (import.meta.client) {
    await authStore.restoreAuth();
  }
});
