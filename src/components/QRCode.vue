<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

import QRCode from 'qrcode'

const props = withDefaults(
    defineProps<{
        url: string
        size?: number
    }>(),
    {
        size: 164,
    },
)

const canvas = ref<HTMLCanvasElement | null>(null)

const onRender = () => {
    if (canvas.value) {
        QRCode.toCanvas(canvas.value, props.url, {
            width: props.size,
            margin: 0,
        })
    }
}

watch([() => props.url, () => props.size], onRender)

onMounted(onRender)
</script>

<template>
    <canvas ref="canvas"></canvas>
</template>
