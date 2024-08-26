import { type RouteRecordRaw, createMemoryHistory, createRouter } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/config',
  },
  {
    path: '/app',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/pages/app/App.vue'),
  },
  {
    path: '/config',
    component: () => import(/* webpackChunkName: "config" */ '@/pages/config/Config.vue'),
  },
  {
    path: '/instance',
    component: () => import(/* webpackChunkName: "instance" */ '@/pages/instance/Instance.vue'),
  },
  {
    path: '/staff',
    component: () => import(/* webpackChunkName: "staff" */ '@/pages/staff/Staff.vue'),
  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
