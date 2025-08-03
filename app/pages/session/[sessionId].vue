<script setup lang="ts">
import { useSessionStore } from "@/stores/session.store";

definePageMeta({
  title: "Lobby",
  layout: "default",
  validate: async (route) => {
    return typeof route.params.sessionId === "string";
  },
});

const sessionStore = useSessionStore();
</script>

<template>
  <main></main>
</template>
