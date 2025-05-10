<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Armchair, Cable, Crown } from 'lucide-vue-next'

import { Card } from '@/components/base/card'

import SessionSharePopover from '@/components/SessionSharePopover.vue'

import { useSessionStore } from '@/stores/session.store'

const { isHost, userAlias } = storeToRefs(useSessionStore())

const sessionUrl = window.location.href
</script>

<template>
    <Card class="p-4">
        <div class="flex items-center justify-between gap-4 mb-2">
            <h3 class="flex items-center text-base font-medium mb-1">
                <Armchair :size="18" aria-hidden="true" class="mr-2" />
                Party
            </h3>

            <SessionSharePopover :url="sessionUrl" />
        </div>

        <ul class="space-y-1">
            <li class="flex items-center justify-between">
                <span>
                    {{ userAlias }}
                    <Crown v-if="isHost" :size="14" aria-label="lobby leader" class="inline ml-1" />
                </span>
                <Cable :size="16" aria-hidden="true" class="inline mr-3" />
            </li>
        </ul>
    </Card>
</template>
