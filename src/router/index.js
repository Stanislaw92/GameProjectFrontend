import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RaceView from '../views/RaceChoose.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/raceChoose/',
    name: 'RaceChoose',
    component: RaceView
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
