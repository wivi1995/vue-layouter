import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLayouter from '../src/index'
import DefaultLayout from './layouts/DefaultLayout.vue'
import BlankLayout from './layouts/BlankLayout.vue'

Vue.config.productionTip = false

Vue.use(VueLayouter)

const layouter = new VueLayouter({
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
  layouter,
  render: h => h(App)
}).$mount('#app')
