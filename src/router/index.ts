import { NavigationGuardNext, RouteLocationNormalized, createRouter, createWebHistory } from "vue-router"
import { facilitatorRouter } from "./facilitator.router"
import { participantRouter } from "./participant.router";
import { useAuthStore } from "../stores/auth";


const routes = [
  {
    path: "/",
    component: () => import("../layouts/app-layout-common.vue"),
    children: [
      {
        path: '',
        name: 'courses',
        component: () => import("../pages/common/Courses.vue")
      },
      {
        path: 'courses/:title',
        name: 'course-detail',
        component: () => import("../pages/common/CourseDetail.vue")
      }
    ]
  },
  {
    path: '/facil',
    component: () => import('../layouts/app-layout-faciltator.vue'),
    children: [
      ...facilitatorRouter,
    ],
    beforeEnter: async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      const authStore = useAuthStore()
      if (!(await authStore.isAuthenticatedAsFacil())) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/participant',
    component: () => import('../layouts/app-layout-participant.vue'),
    children: [
      ...participantRouter,
    ],
    beforeEnter: async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      const authStore = useAuthStore()
      if (!(await authStore.isAuthenticatedAsParticipant())) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/auth/Login.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../pages/auth/Signup.vue'),
  },
  {
    path: '/logout',
    component: () => import('../pages/facilitator/logout.vue'),
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

// Set the page title based on the current route
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const pageTitle: any = to.meta.title;
  if (pageTitle) {
    document.title = pageTitle;
  }
  next();
});

export default router