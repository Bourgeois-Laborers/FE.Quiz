<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue';
</script>

<template>
    <AppHeader />

    <main>
        <slot></slot>
    </main>
</template>
