<script setup lang="ts">
import { Github } from 'lucide-vue-next'

import { GITHUB_URL } from '@/constants/links'
</script>

<template>
    <footer class="app-footer">
        <p class="text-xs">Bourgeois & Laborers © 2024</p>

        <a :href="GITHUB_URL" target="_blank">
            <Github :size="24" aria-hidden="true" />
            <span class="sr-only"> Bourgeois & Laborers GitHub </span>
        </a>
    </footer>
</template>

<style>
.app-footer {
    @apply px-4 py-3 md:px-6 md:py-5;
    @apply flex items-center justify-between;
}
</style>
