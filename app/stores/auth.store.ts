import { defineStore } from "pinia";
import { ref, computed } from "vue";

import { authService } from "~/services/auth.service";
import type { User, LoginCredentials } from "~/services/auth.service";

const USER_ID_KEY = "quiz_user_id";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const isLoading = ref<boolean>(false);

  const isAuth = computed<boolean>(() => !!user.value);

  const login = async (credentials: LoginCredentials) => {
    isLoading.value = true;
    try {
      const response = await authService.login(credentials);
      if (response.data) {
        user.value = response.data;
        persistUserId(response.data.id);
      }
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      isLoading.value = false;
    }
  };

  const register = async () => {
    isLoading.value = true;
    try {
      const response = await authService.register();
      if (response.data) {
        user.value = response.data;
        persistUserId(response.data.id);
      }
      return response;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      isLoading.value = false;
    }
  };

  const logout = async () => {
    isLoading.value = true;
    try {
      await authService.logout();
      user.value = null;
      clearPersistedUserId();
    } catch (error) {
      console.error("Logout failed:", error);
      user.value = null;
      clearPersistedUserId();
    } finally {
      isLoading.value = false;
    }
  };

  const restoreAuth = async () => {
    const persistedUserId = getPersistedUserId();
    if (persistedUserId) {
      try {
        await login({ userId: persistedUserId });
      } catch (error) {
        console.error("Auth restoration failed:", error);
        clearPersistedUserId();
      }
    }
  };

  const persistUserId = (userId: string) => {
    if (import.meta.client) {
      localStorage.setItem(USER_ID_KEY, userId);
    }
  };

  const getPersistedUserId = (): string | null => {
    if (import.meta.client) {
      return localStorage.getItem(USER_ID_KEY);
    }
    return null;
  };

  const clearPersistedUserId = () => {
    if (import.meta.client) {
      localStorage.removeItem(USER_ID_KEY);
    }
  };

  return {
    user: readonly(user),
    isLoading: readonly(isLoading),
    isAuth,
    login,
    register,
    logout,
    restoreAuth,
  };
});
