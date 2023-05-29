import { NavigationGuardNext, RouteLocationNormalized, createRouter, createWebHistory } from "vue-router"
import { facilitatorRouter } from "./facilitator.router"
import { participantRouter } from "./participant.router";


const routes = [
  {
    path: "/",
    component: () => import("../layouts/app-layout-common.vue"),
    children: [
      {
        path: 'courses',
        name: 'std-courses',
        component: ()=> import("../pages/Courses.vue")
      },
      {
        path: 'courses/:title',
        name: 'std-course-detail',
        component: ()=> import("../pages/CourseDetail.vue")
      }
    ]
  },
  {
    path: '/facil',
    component: () => import('../layouts/app-layout-faciltator.vue'),
    children: [
      ...facilitatorRouter,
    ]
  },
  {
    path: '/participant',
    component: () => import('../layouts/app-layout-participant.vue'),
    children: [
      ...participantRouter,
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../pages/Signup.vue'),
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