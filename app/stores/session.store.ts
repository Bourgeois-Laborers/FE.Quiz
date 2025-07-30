import { defineStore } from "pinia";
import { ref } from "vue";

import { sessionService } from "~/services/session.service";
import type {
  Session,
  CreateSessionPayload,
  JoinSessionPayload,
} from "~/services/session.service";

export const useSessionStore = defineStore("session", () => {
  const session = ref<Session | null>(null);
  const isLoading = ref<boolean>(false);

  const getSession = async (sessionId: string) => {
    isLoading.value = true;
    try {
      const response = await sessionService.get(sessionId);
      if (response.data) {
        session.value = response.data;
      }
      return response;
    } catch (error) {
      console.error("Get session failed:", error);
      throw error;
    } finally {
      isLoading.value = false;
    }
  };

  const createSession = async (payload: CreateSessionPayload) => {
    isLoading.value = true;
    try {
      const response = await sessionService.create(payload);
      if (response.data) {
        session.value = response.data;
      }
      return response;
    } catch (error) {
      console.error("Create session failed:", error);
      throw error;
    } finally {
      isLoading.value = false;
    }
  };

  const joinSession = async (payload: JoinSessionPayload) => {
    isLoading.value = true;
    try {
      const response = await sessionService.join(payload);
      if (response.data) {
        session.value = response.data;
      }
      return response;
    } catch (error) {
      console.error("Join session failed:", error);
      throw error;
    } finally {
      isLoading.value = false;
    }
  };

  const leaveSession = async () => {
    isLoading.value = true;
    try {
      await sessionService.leave();
      session.value = null;
    } catch (error) {
      console.error("Leave session failed:", error);
      session.value = null;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    session: readonly(session),
    isLoading: readonly(isLoading),
    getSession,
    createSession,
    joinSession,
    leaveSession,
  };
});
