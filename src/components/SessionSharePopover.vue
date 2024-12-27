<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

import { Share2, Copy, CopyCheck } from 'lucide-vue-next'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/base/popover'
import { Input } from '@/components/base/input'
import { Button } from '@/components/base/button'

import QRCode from '@/components/QRCode.vue'

const props = defineProps<{
    url: string
}>()

const { copy: onCopy, copied: isCopied } = useClipboard()
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button size="sm" variant="secondary">
                <Share2 :size="18" aria-hidden="true" />
                <span class="sr-only">Share</span>
            </Button>
        </PopoverTrigger>

        <PopoverContent :align="'end'">
            <h4 class="text-sm font-medium mb-2">Share</h4>

            <div class="flex flex-row-reverse items-center gap-2 mb-4">
                <Button size="sm" variant="secondary" @click="onCopy(props.url)">
                    <CopyCheck v-if="isCopied" :size="18" aria-hidden="true" />
                    <Copy v-else :size="18" aria-hidden="true" />
                    <span class="sr-only">Copy invite link</span>
                </Button>
                <Input :model-value="props.url" readonly class="h-8 text-sm text-gray-600" />
            </div>

            <div class="flex justify-center">
                <QRCode :url="props.url" :size="200" />
            </div>
        </PopoverContent>
    </Popover>
</template>
