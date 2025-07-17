import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HomePage.vue') }],
  },

  {
    path: '/session/:sessionId',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/SessionPage.vue') }],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/NotFoundPage.vue'),
  },
];

export default routes;
