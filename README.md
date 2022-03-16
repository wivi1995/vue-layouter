# vue-layouter

This is a vue plugin that provides extended layouts for route component.

<p align="center">
  <a href="https://github.com/wivi1995/vue-layouter/actions/workflows/coverage.yml">
    <img alt="Build status" src="https://github.com/wivi1995/vue-layouter/actions/workflows/coverage.yml/badge.svg?branch=master">
  </a>
  <a href='https://coveralls.io/github/wivi1995/vue-layouter?branch=master'>
    <img src='https://coveralls.io/repos/github/wivi1995/vue-layouter/badge.svg?branch=master' alt='Coverage Status' />
  </a>
  <img alt="NPM" src="https://img.shields.io/npm/l/vue-layouter">
</p>

<p align="center">
  <a href="./zh.md">中文</a> | 
  <a href="https://codesandbox.io/s/vue-layouter-example-t3eqxi">example</a>
</p>

## Installation

```
npm install vue-layouter
```

## Quickstart

### Create layout component

1. Create a directory called `layouts/` inside the main directory of your application.

2. Inside the `layouts/` directory create a layout called `default.vue`, for example:`src/layouts/default.vue`.

``` html
<template>
  <div class="container">
    <div class="header">header</div>
    <div class="main">
      <router-view />
    </div>
    <div class="footer">footer</div>
  </div>
</template>
```

### Create the layouter instance

1. Define some layouts, Each route should map to a component。

2. Create the layouer instance and pass the `layouts` option.

3. Mount the layout instance to the vue instance.

```javascript
import Vue from 'vue'
import VueLayouter from 'vue-layouter'
import router from './router'
import App from './App.vue'
import DefaultLayout from '@/layouts/default.vue'

Vue.use(VueLayouter)

const layouter = new VueLayouter({
  layouts: [
    {
      name: 'defaultLayout',
      component: DefaultLayout
    }
  ]
})

new Vue({
  router,
  layouter,
  render: h => h(App)
}).$mount('#app')
```

### Render layout

1. Create an instance of the `layouter-view` component in the `src/App.vue` file.

2. The matched layout components will be rendered here.

``` html
<template>
  <layouter-view />
</template>
```

2. Extend this layout in any desired route, simply include the property `layout: auth` in meta object of the route.

``` javascript
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Data from '../views/Data.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'defaultLayout'
    }
  }, {
    path: '/data',
    name: 'Data',
    component: Data,
    meta: {
      layout: 'defaultLayout'
    }
  },
]

const router = new VueRouter({
  routes
})

export default router

```
