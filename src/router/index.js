import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Onboarding1',
    component: () => import('@/views/Onboarding1.vue'),
  },
  {
    path: '/onboarding2',
    name: 'Onboarding2',
    component: () => import('@/views/Onboarding2.vue'),
  },
  {
    path: '/onboarding3',
    name: 'Onboarding3',
    component: () => import('@/views/Onboarding3.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LogIn.vue'),
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/views/SignUp.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
