import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const FakeComponent = Vue.extend({
  name: 'FakeComponent',
  render: (h) => h('div', {}, 'fake-component')
})

export const routes: Array<RouteConfig> = [
  {
    redirect: '/login',
    path: '/'
  },
  {
    path: '/login',
    name: 'Login',
    component: FakeComponent,
    meta: {
      layout: 'blankLayout'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: FakeComponent
  },
  {
    path: '/home2',
    name: 'Home2',
    component: FakeComponent,
    meta: {
      layout: 'notExistLayout'
    }
  }
]

export const router = new VueRouter({
  routes
})
