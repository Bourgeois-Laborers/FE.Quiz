<script setup lang="ts">
import AppFooter from '@/components/app/AppFooter.vue';
import AppHeader from '@/components/app/AppHeader.vue';
</script>

<template>
    <AppHeader />

    <main>
        <slot></slot>
    </main>

    <AppFooter />
</template>
