<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'

import Toaster from '@/components/base/toast/Toaster.vue'
</script>

<template>
    <AppLayout>
        <RouterView />
    </AppLayout>

    <Toaster />
</template>
