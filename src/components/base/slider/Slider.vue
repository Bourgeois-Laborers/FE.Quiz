<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'
import { cn } from '@/utils'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SliderRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
    <SliderRoot
        :class="
            cn(
                'relative flex w-full touch-none select-none items-center data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-2 data-[orientation=vertical]:h-full',
                props.class,
            )
        "
        v-bind="forwarded"
    >
        <SliderTrack
            class="relative h-2 w-full data-[orientation=vertical]:w-2 grow overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800"
        >
            <SliderRange class="absolute h-full data-[orientation=vertical]:w-full bg-gray-900 dark:bg-gray-50" />
        </SliderTrack>
        <SliderThumb
            v-for="(_, key) in modelValue"
            :key="key"
            class="block h-5 w-5 rounded-full border-2 border-gray-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-50 dark:bg-gray-950 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300"
        />
    </SliderRoot>
</template>
