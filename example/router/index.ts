import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
  {
    redirect: '/login',
    path: '/'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'blankLayout'
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'defaultLayout'
    }
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import(/* webpackChunkName: "data" */ '../views/Data.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
