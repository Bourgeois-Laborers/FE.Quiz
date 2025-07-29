<script setup lang="ts">
import ModuleToaster from '@/components/module/ModuleToaster.vue';

const route = useRoute()

useHead({
  titleTemplate: (title) => title ? `${title} - Quiz` : 'Quiz',
  meta: [{ property: 'og:title', content: `${route.meta.title} - Quiz` }]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <ModuleToaster />
</template>
