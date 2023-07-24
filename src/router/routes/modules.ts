import type { RouteRecordRaw } from 'vue-router'

// 路由规则
const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/news/index.vue')
  },
  {
    path: '/msgBoard',
    name: 'MsgBoard',
    component: () => import('@/views/MsgBoard/index.vue')
  },
]

export default routes

