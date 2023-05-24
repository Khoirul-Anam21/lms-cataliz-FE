import { createRouter, createWebHistory } from "vue-router"
import { facilitatorRouter } from "./facilitator.router"


const routes = [
  {
    path: '/',
    component: () => import('../layouts/app-layout.vue'),
    children: [
      ...facilitatorRouter,
    ]
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue'),
  },
  {
    path: '/signup',
    component: () => import('../pages/Signup.vue'),
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router