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
    ],
})

export default router
