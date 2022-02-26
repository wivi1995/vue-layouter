import { mount, createLocalVue } from '@vue/test-utils'
import Vue, { ComponentOptions } from 'vue'
import VueRouter from 'vue-router'
import { router } from './config/router'
import VueLayout from '../../src/index'
import { layouter } from './config/layouts'

const localVue = createLocalVue({
  layouter,
  router
})

localVue.use(VueRouter)
localVue.use(VueLayout)

const customMount = <V extends Vue>(options: ComponentOptions<V>) => {
  const wrapper = mount(options, {
    router,
    layouter,
    localVue
  })
  return wrapper
}

describe('LayouterView', () => {
  it('render default layout', async () => {
    const wrapper = customMount({
      render (h) {
        return h('LayouterView')
      }
    })
    expect(wrapper.find('div').text()).toBe('blank-layout')
  })

  it('switch to blank layout', async () => {
    router.push('/home')
    const wrapper = customMount({
      render (h) {
        return h('LayouterView')
      }
    })
    expect(wrapper.find('div').text()).toBe('default-layout')
  })
})
