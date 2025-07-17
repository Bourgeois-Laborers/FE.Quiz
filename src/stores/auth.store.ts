import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';

import type { IUser } from 'src/types/user';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<IUser | null>(null);

  return {
    user,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
