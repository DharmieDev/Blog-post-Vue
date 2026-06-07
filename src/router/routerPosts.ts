import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/HomeView.vue')
const Details = () => import('../views/DetailView.vue')
const NotFound = () => import('../views/NotFoundView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/posts/:id',
      name: 'details',
      component: Details
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ],
})

export default router
