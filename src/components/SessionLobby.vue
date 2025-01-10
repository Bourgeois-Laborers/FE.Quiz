<script setup lang="ts">
import { Armchair } from 'lucide-vue-next'

import { Card } from '@/components/base/card'

import SessionSharePopover from '@/components/SessionSharePopover.vue'

const sessionUrl = window.location.href
</script>

<template>
    <Card class="p-4">
        <div class="flex items-center justify-between gap-4 mb-4">
            <h3 class="flex items-center text-base font-medium mb-1">
                <Armchair :size="18" aria-hidden="true" class="mr-2" />
                Party
            </h3>

            <SessionSharePopover :url="sessionUrl" />
        </div>

        <p class="text-sm text-gray-500">Waiting for players to join...</p>
    </Card>
</template>
