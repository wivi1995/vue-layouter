import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const FakeComponent = Vue.extend({
  name: 'FakeComponent',
  render: (h) => h('div', {}, 'fake-component')
})

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    component: FakeComponent
  },
  {
    path: '/error',
    name: 'Error',
    component: FakeComponent,
    meta: {
      layout: 'blankLayout'
    }
  }
]

export const router = new VueRouter({
  routes
})
