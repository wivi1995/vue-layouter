# vue-layouter

这是一个为路由route components提供扩展布局的vue插件.

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
  <a href="./README.md">English</a> | 
  <a href="https://codesandbox.io/s/vue-layouter-example-t3eqxi">例子</a>
</p>

## 安装

---

```
npm install vue-layouter
```

## 如何使用

---

### 创建布局组件

1. 在应用程序的主目录中创建一个名为 `layouts/` 的目录.

2. 在布局目录中创建一个名为 `default.vue` 的布局组件, 例如:`src/layouts/default.vue`.

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

### 创建布局配置

1. 定义布局, 每个布局应该映射一个组件。

2. 创建 layouter 实例，然后传 `layouts` 配置.

3. 将layouter实例挂载到vue根实例.

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

### 渲染布局

1. 在`src/App.vue`文件中创建`layouter-view`组件实例.

2. 匹配到的布局组件将在这里渲染.

``` html
<template>
  <layouter-view />
</template>
```

2. 在任何所需的路由中扩展此布局，只需在路由的元对象中包含属性 `layout: defaultLayout`.

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
