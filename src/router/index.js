import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '../views/ChatView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chat',
      component: ChatView
    },
    {
      path:'/register',
      name:'register',
      component: ()=> import('@/views/RegisterView.vue')
    },
    {
      path:'/login',
      name:'login',
      component: ()=> import('@/views/LoginView.vue')
    }
  ]
})

export default router
