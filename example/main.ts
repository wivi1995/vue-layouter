import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueViewLayout from '../src/index'
import DefaultLayout from './layouts/DefaultLayout.vue'
import BlankLayout from './layouts/BlankLayout.vue'

Vue.config.productionTip = false

Vue.use(VueViewLayout)

const viewLayout = new VueViewLayout({
  layouts: [
    {
      name: 'defaultLayout',
      component: DefaultLayout
    },
    {
      name: 'blankLayout',
      component: BlankLayout
    }
  ]
})

new Vue({
  router,
  viewlayout: viewLayout,
  render: h => h(App)
}).$mount('#app')
