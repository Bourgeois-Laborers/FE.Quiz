<script setup lang="ts">
import SessionCreateForm from "@/components/session/SessionCreateForm.vue";

definePageMeta({
  title: "Home",
  layout: "default",
});
</script>

<template>
  <main class="relative overflow-hidden">
    <section class="container mx-auto px-4 py-8 md:px-6 md:py-10">
      <h1
        class="mb-6 text-5xl md:text-6xl lg:text-7xl text-center text-balance font-bold"
      >
        Quiz Time!
      </h1>

      <p class="mx-auto text-base md:text-lg text-center max-w-2xl">
        Create instant quiz sessions powered by AI. Generate custom quizzes on
        any topic, invite friends with a simple link, and compete in real-time.
        No accounts, no downloads, just pure quiz fun.
      </p>
    </section>

    <div class="container mx-auto px-4 py-6 md:px-6 md:py-8">
      <SessionCreateForm
        class="mx-auto border border-border/10 bg-muted/50 rounded-lg p-6 md:p-8 max-w-xl"
      />
    </div>
  </main>
</template>
