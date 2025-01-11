<script setup lang="ts">
import { BrainCircuit } from 'lucide-vue-next'
</script>

<template>
    <header class="app-header">
        <RouterLink class="app-header__logo" to="/">
            <BrainCircuit :size="40" aria-hidden="true" />

            <h1>Quiz</h1>
        </RouterLink>
    </header>
</template>

<style>
.app-header {
    /* @apply border-b border-gray-100 shadow-sm; */
    @apply px-4 py-2 md:px-6 md:py-3;
}

.app-header__logo {
    @apply inline-flex items-center gap-x-3;
    @apply text-2xl;
}
</style>
