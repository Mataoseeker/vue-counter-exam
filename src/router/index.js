import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '../views/CounterView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/counter',
    name: 'CounterView',
    component: CounterView
  },
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404View',
    component: () => import('../views/404View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
