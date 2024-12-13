<script setup lang="ts">
import { PhGithubLogo } from '@phosphor-icons/vue'

const GITHUB = 'https://github.com/Bourgeois-Laborers'
</script>

<template>
    <footer class="app-footer">
        <p class="text-sm">Bourgeois & Laborers © 2024</p>

        <a :href="GITHUB" target="_blank">
            <PhGithubLogo :size="24" aria-hidden="true" />
            <span class="sr-only"> Bourgeois & Laborers GitHub </span>
        </a>
    </footer>
</template>

<style>
.app-footer {
    @apply px-4 py-2 md:px-6 md:py-3;
    @apply flex items-center justify-between;
}
</style>
