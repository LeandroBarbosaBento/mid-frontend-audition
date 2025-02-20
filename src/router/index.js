import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Dashboard.vue')
  },
  {
    name: 'planets',
    path: '/planets',
    component: () => import('@/views/Planets.vue')
  },
  {
    name: 'people',
    path: '/people',
    component: () => import('@/views/People.vue')
  },
  {
    name: 'films',
    path: '/films',
    component: () => import('@/views/Films.vue')
  },
  {
    name: 'species',
    path: '/species',
    component: () => import('@/views/Species.vue')
  },
  {
    name: 'starships',
    path: '/starships',
    component: () => import('@/views/Starships.vue')
  },
  {
    name: 'vehicles',
    path: '/vehicles',
    component: () => import('@/views/Vehicles.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
