<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import SessionLobby from '@/components/SessionLobby.vue'
import QuizConfigurationForm from '@/components/QuizConfigurationForm.vue'

useTitle(`Quiz App | Session configuration`)
</script>

<template>
    <div class="session-view">
        <SessionLobby class="w-full h-max" />

        <QuizConfigurationForm class="w-full" />
    </div>
</template>

<style>
.session-view {
    @apply flex flex-col justify-center gap-6;
    @apply py-6 md:py-8;
}
</style>
