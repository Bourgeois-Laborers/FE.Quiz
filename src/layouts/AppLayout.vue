<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

const AsyncLayoutDefault = defineAsyncComponent(() => import('@/layouts/LayoutDefault.vue'))
const AsyncLayoutBlank = defineAsyncComponent(() => import('@/layouts/LayoutBlank.vue'))

const route = useRoute()

const layout = computed(() => {
    switch (route.meta.layout) {
        case 'default':
            return AsyncLayoutDefault
        case 'blank':
            return AsyncLayoutBlank
        default:
            return AsyncLayoutBlank
    }
})
</script>

<template>
    <component :is="layout">
        <slot></slot>
    </component>
</template>
