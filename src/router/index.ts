// router/index.ts
import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/generatingrandomnumber',
    name: 'GeneratingRandomNumber',
    component: () => import('../views/GeneratingRandomNumberView.vue')
  },
  {
    path: '/guessnumber',
    name: 'GuessNumber',
    component: () => import('../views/GuessNumberView.vue')
  },
  {
    path: '/summary/:attempts_count',
    name: 'Summary',
    component: () => import('../views/SummaryView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router