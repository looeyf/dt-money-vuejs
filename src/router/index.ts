import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: process.env.MODE === 'production' ? createWebHashHistory() : createWebHistory(),
  routes,
});

export default router;
