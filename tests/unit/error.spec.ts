import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { router } from './config/router'
import VueLayouter from '../../src/index'
import { layouter } from './config/layouts'

describe('test LayouterView error', () => {
  it('test not exist router', async () => {
    const localVue = createLocalVue({
      layouter,
    })
    
    localVue.use(VueLayouter)

    expect(() => {
      mount({
        render (h) {
          return h('LayouterView')
        }
      }, {
        layouter,
        localVue
      })
    }).toThrow('You need to install vue-router!')
  })

  it('test not exist layouter', async () => {
    const localVue = createLocalVue({
      router,
    })
    
    localVue.use(VueRouter)
    localVue.use(VueLayouter)

    expect(() => {
      mount({
        render (h) {
          return h('LayouterView')
        }
      }, {
        router,
        localVue
      })
    }).toThrow(Error)
  })
})
