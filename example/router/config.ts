import { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

export const routes: Array<RouteConfig> = [
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
    component: Login
  }
]
