<script setup lang="ts">
import AppLogo from "@/components/app/AppLogo.vue";
import SessionCreateForm from "@/components/session/SessionCreateForm.vue";

definePageMeta({
  title: "Home",
  layout: "blank",
});
</script>

<template>
  <main class="relative overflow-hidden">
    <AppLogo
      alt=""
      class="text-primary mx-auto mt-8 md:mt-10 mb-4 md:mb-6 w-32 h-32"
    />

    <h1
      class="mb-4 md:mb-6 mx-auto px-4 md:px-6 text-5xl md:text-6xl lg:text-7xl text-center text-balance font-bold bg-linear-to-br from-primary via-primary to-destructive bg-clip-text text-transparent"
    >
      Quiz Time!
    </h1>

    <section class="mb-8 md:mb-12 container mx-auto px-4 md:px-6">
      <p class="mx-auto text-base md:text-lg text-center max-w-3xl">
        Create instant quiz sessions powered by AI. Generate custom quizzes on
        any topic, invite friends with a simple link, and compete in real-time.
        <br />
        No accounts, no downloads, just pure quiz fun.
      </p>
    </section>

    <div class="container mx-auto px-4 md:px-6">
      <SessionCreateForm
        class="mx-auto border backdrop-blur-md border-border/50 bg-muted/50 rounded-lg p-6 md:p-8 max-w-xl"
      />
    </div>
  </main>
</template>
