import { createRouter, createWebHistory } from 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        layout: 'default' | 'blank'
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            meta: { layout: 'blank' },
            component: () => import('@/views/HomeView.vue'),
        },
        {
            path: '/session/:id',
            name: 'Session',
            meta: { layout: 'default' },
            component: () => import('@/views/SessionView.vue'),
        },
    ],
})

export default router
