import { defineStore } from "pinia";
import { ref } from "vue";
import { useStorage } from "@vueuse/core";

import { authService } from "~/services/auth.service";
import type { User, LoginCredentials } from "~/services/auth.service";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const isLoading = ref<boolean>(false);

  const persistedUserId = useStorage<string | null>("persistedUserId", null);

  const login = async (credentials: LoginCredentials) => {
    isLoading.value = true;
    try {
      const response = await authService.login(credentials);
      user.value = response.data;
      persistedUserId.value = response.data.id;
      return response.data;
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
      user.value = response.data;
      persistedUserId.value = response.data.id;
      return response.data;
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
      persistedUserId.value = null;
    } catch (error) {
      console.error("Logout failed:", error);
      user.value = null;
      persistedUserId.value = null;
    } finally {
      isLoading.value = false;
    }
  };

  const restore = async () => {
    isLoading.value = true;
    try {
      const response = await authService.restore();
      user.value = response.data;
      persistedUserId.value = response.data.id;
    } catch (error) {
      console.error("Cookie-based auth restoration failed:", error);

      if (persistedUserId.value) {
        try {
          await login({ userId: persistedUserId.value });
        } catch (loginError) {
          console.error("UserId-based login failed:", loginError);
          persistedUserId.value = null;
        }
      }
    } finally {
      isLoading.value = false;
    }
  };

  return {
    user,
    isLoading,
    login,
    register,
    logout,
    restore,
  };
});
