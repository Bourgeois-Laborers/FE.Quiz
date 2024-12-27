<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import SessionSettingsForm from '@/components/SessionSettingsForm.vue'

useTitle(`Quiz App | Session`)
</script>

<template>
    <div class="session-view">
        <!-- TODO: SessionLobby -->

        <SessionSettingsForm />
    </div>
</template>

<style>
.session-view {
    @apply py-6 md:py-8;
}
</style>
