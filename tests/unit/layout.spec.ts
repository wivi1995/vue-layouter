import { mount, createLocalVue } from '@vue/test-utils'
import Vue, { ComponentOptions } from 'vue'
import VueRouter from 'vue-router'
import { router } from './config/router'
import VueViewLayout from '../../src/index'
import { viewLayout } from './config/layouts'

const localVue = createLocalVue({
  viewLayout,
  router
})

localVue.use(VueRouter)
localVue.use(VueViewLayout)

const customMount = <V extends Vue>(options: ComponentOptions<V>) => {
  const wrapper = mount(options, {
    router,
    viewLayout,
    localVue
  })
  return wrapper
}

describe('LayoutView', () => {
  it('render default layout', async () => {
    const wrapper = customMount({
      render (h) {
        return h('LayoutView')
      }
    })
    expect(wrapper.find('div').text()).toBe('default-layout')
  })

  it('switch to blank layout', async () => {
    router.push('/error')
    const wrapper = customMount({
      render (h) {
        return h('LayoutView')
      }
    })
    expect(wrapper.find('div').text()).toBe('blank-layout')
  })
})
