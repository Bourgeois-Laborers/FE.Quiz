<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue'
import AppFooter from '@/components/app/AppFooter.vue'
</script>

<template>
    <div class="layout-default">
        <AppHeader />

        <main class="container flex-1">
            <slot></slot>
        </main>

        <AppFooter />
    </div>
</template>

<style>
.layout-default {
    @apply min-h-screen;
    @apply flex flex-col;
}
</style>
