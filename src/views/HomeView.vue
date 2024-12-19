<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { BrainCircuit, MessageCircleQuestion, Sparkles, Bot, GraduationCap, Users, Settings2 } from 'lucide-vue-next'

import { Card } from '@/components/base/card'

import LoginForm from '@/components/LoginForm.vue'

useTitle(`Quiz App | Let's get started!`)

const features = [
    {
        label: 'AI Powered',
        icon: Bot,
    },
    {
        label: 'Your topics',
        icon: Sparkles,
    },
    {
        label: 'Configurable',
        icon: Settings2,
    },
    {
        label: 'Fun Learning',
        icon: GraduationCap,
    },
    {
        label: 'Test Yourself',
        icon: MessageCircleQuestion,
    },
    {
        label: 'Party Play',
        icon: Users,
    },
]
</script>

<template>
    <div class="home-view">
        <BrainCircuit :size="80" class="mb-8" />

        <div class="mb-8">
            <h2 class="mb-6">Welcome to our interactive quiz app!</h2>

            <p class="mb-2">
                Challenge your knowledge across various topics with randomly generated questions powered by ChatGPT.
            </p>

            <p>Test yourself and learn something new every time!</p>
        </div>

        <LoginForm class="mb-12" />

        <Card class="home-view__features">
            <ul>
                <li v-for="feature in features" :key="feature.label">
                    <component :is="feature.icon" :size="24" class="mb-1" />
                    <span class="text-sm font-medium">{{ feature.label }}</span>
                </li>
            </ul>
        </Card>
    </div>
</template>

<style>
.home-view {
    @apply w-screen min-h-screen;
    @apply flex flex-col items-center justify-center;
    @apply px-4 py-4 md:px-6 md:py-6;
}

.home-view h2 {
    @apply text-center;
    @apply text-4xl md:text-5xl;
    @apply font-medium;
}

.home-view p {
    @apply text-center;
    @apply text-lg md:text-xl;
    @apply text-gray-600;
}

.home-view__features {
    @apply w-full max-w-[640px];
    @apply p-3 md:p-5;
}

.home-view__features ul {
    @apply grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3;
}

.home-view__features li {
    @apply flex flex-col items-center;
    @apply rounded-md;
    @apply bg-gray-100;
    @apply p-3;
}
</style>
