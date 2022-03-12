import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { router } from './config/router'
import VueLayoutēr from '../../src/index'
import { layouter } from './config/layouts'

describe('render LayouterView', () => {
  const localVue = createLocalVue({
    layouter,
    router
  })
  
  localVue.use(VueRouter)
  localVue.use(VueLayoutēr)

  it('render default layout', async () => {
    const wrapper = mount({
      render (h) {
        return h('LayouterView')
      }
    }, {
      router,
      layouter,
      localVue
    })
    expect(wrapper.find('div').text()).toBe('blank-layout')
  })

  it('switch to blank layout', async () => {
    router.push('/home')
    const wrapper = mount({
      render (h) {
        return h('LayouterView')
      }
    }, {
      router,
      layouter,
      localVue
    })
    expect(wrapper.find('div').text()).toBe('default-layout')
  })
})
