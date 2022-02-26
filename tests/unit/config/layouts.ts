
import Vue from 'vue'
import VueLayouter from '../../../src/index'

export const layouter = new VueLayouter({
  layouts: [
    {
      name: 'defaultLayout',
      component: Vue.extend({
        name: 'DefaultLayout',
        render (h) {
          return h('div', {}, 'default-layout')
        }
      })
    },
    {
      name: 'blankLayout',
      component: Vue.extend({
        name: 'BlankLayout',
        render (h) {
          return h('div', {}, 'blank-layout')
        }
      })
    }
  ]
})
