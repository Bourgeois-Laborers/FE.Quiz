<template>
    <header class="app-header">
        <RouterLink class="app-header__logo" to="/">
            <img src="@/assets/images/logo.png" width="40" height="40" loading="lazy" alt="Quiz logo" />

            <h1>Quiz</h1>
        </RouterLink>
    </header>
</template>

<style>
.app-header {
    @apply px-4 py-2 md:px-6 md:py-3;
}

.app-header__logo {
    @apply inline-flex items-center gap-x-3;
    @apply text-2xl;
}
</style>
