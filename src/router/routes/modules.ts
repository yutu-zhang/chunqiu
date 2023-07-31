import type { RouteRecordRaw } from 'vue-router'

// 路由规则
const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    meta: { title: '首页' },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: '关于春秋' },
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/products',
    name: 'Products',
    meta: { title: '产品与服务' },
    component: () => import('@/views/products/index.vue')
  },
  {
    path: '/cooperate',
    name: 'Cooperate',
    meta: { title: '合作发展' },
    component: () => import('@/views/cooperate/index.vue')
  },
  {
    path: '/news',
    name: 'News',
    meta: { title: '新闻资讯' },
    component: () => import('@/views/news/index.vue')
  },
  {
    path: '/msgBoard',
    name: 'MsgBoard',
    meta: { title: '联系我们' },
    component: () => import('@/views/MsgBoard/index.vue')
  },
]

export default routes
