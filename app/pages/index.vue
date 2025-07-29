<script setup lang="ts">
import SessionCreateForm from '@/components/session/SessionCreateForm.vue'

definePageMeta({
  title: 'Home',
  layout: 'default'
})
</script>

<template>
    <main class="relative overflow-hidden">
      <section class="container mx-auto px-4 py-3 relative z-10">
        <SessionCreateForm />
      </section>
    </main>
</template>
