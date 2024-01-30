import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '@/views/MainPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/about/:id",
    name: "about",
    component: () => import('@/views/ChangesTodo.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
