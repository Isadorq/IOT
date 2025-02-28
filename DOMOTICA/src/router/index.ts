import { createRouter, createWebHistory } from 'vue-router'
import Devices from '@/views/Devices.vue'
import Management from '@/views/Management.vue'
import NoFound from '@/views/NotFound.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: Devices,
      path: '/'
    },
    {
      component: Management,
      path: '/management'
    },
    {
      component: NotFound,
      path: '/:pathMach(.*)*'
    }
  ],
})

export default router