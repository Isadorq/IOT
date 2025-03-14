import { createRouter, createWebHistory } from 'vue-router'
import Devices from '@/views/Devices.vue'
import Management from '@/views/Management.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Devices
    },
    {
      path: '/management',
      component: Management
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    }
  ],
})

export default router
