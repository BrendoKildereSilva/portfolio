import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/home.vue'
import sobre from './components/sobre.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/sobre', component: sobre },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;