import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../components/admin/admin.vue')
  },
  {
    path: '/assistance',
    name: 'assistance',
    component: () => import('../components/assistance/assistance.vue')
  },
  {
    path: '/customerService',
    name: 'customerService',
    component: () => import('../components/customerService/customerService.vue')
  },
  {
    path: '/manager',
    name: 'manager',
    component: () => import('../components/manager/manager.vue')
  },
  {
    path: '/technitial',
    name: 'technitial',
    component: () => import('../components/technitial/technitial.vue')
  },
  {
    path: '/ComplaintPage',
    name: 'ComplaintPage',
    component: () => import('../components/ComplaintPage.vue')
  }
]
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
