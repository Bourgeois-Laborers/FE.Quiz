<script setup lang="ts">
definePageMeta({
  title: 'Lobby',
  layout: 'default',
  validate: async (route) => {
    return typeof route.params.id === 'string'
  }
})
</script>

<template>
    <main></main>
</template>
