<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <p :class="cn('text-sm text-gray-500 dark:text-gray-400', props.class)">
        <slot />
    </p>
</template>
