import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    redirect: '/login',
    path: '/'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import(/* webpackChunkName: "data" */ '../views/Data.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'blankLayout'
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
