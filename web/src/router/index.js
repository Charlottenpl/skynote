import { createRouter, createWebHistory } from 'vue-router'
import AmusicView from '../views/AmusicView.vue'
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/amusic',
      name: 'amusic',
      component: AmusicView
    }
  ]
})

export default router
