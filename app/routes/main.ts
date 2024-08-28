import { type RouteRecordRaw, createMemoryHistory, createRouter } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue'),
  },
  {
    path: '/edit',
    name: 'create',
    component: () => import(/* webpackChunkName: "edit" */ '@/pages/Edit.vue'),
  },
  {
    path: '/edit/:id',
    name: 'update',
    component: () => import(/* webpackChunkName: "edit" */ '@/pages/Edit.vue'),
  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
