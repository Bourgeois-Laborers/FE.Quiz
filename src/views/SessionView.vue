<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import SessionLobby from '@/components/SessionLobby.vue'
import QuizConfigurationForm from '@/components/QuizConfigurationForm.vue'

useTitle(`Quiz App | Session`)
</script>

<template>
    <div class="session-view">
        <SessionLobby class="flex-1" />

        <QuizConfigurationForm class="flex-1" />
    </div>
</template>

<style>
.session-view {
    @apply flex flex-col justify-center md:flex-row gap-6;
    @apply py-6 md:py-8;
}
</style>
