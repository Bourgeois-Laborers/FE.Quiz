<script setup lang="ts">
import SessionCreateForm from '@/components/session/SessionCreateForm.vue'
import SessionJoinForm from '@/components/session/SessionJoinForm.vue'

definePageMeta({
  title: 'Home',
  layout: 'default'
})
</script>

<template>
    <main>
      <SessionCreateForm />

      <p>or</p>

      <SessionJoinForm />
    </main>
</template>
