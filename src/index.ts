import Vue, { ComponentOptions, PluginFunction, AsyncComponent } from 'vue'
import VueRouter from 'vue-router'
import './types'

type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent

export interface LayoutConfig {
  name: string
  component: Component
}

export interface Options {
  defaultLayout?: string
  layouts?: Array<LayoutConfig>
}

const layoutPlugin: PluginFunction<Options> = function (Vue) {
  Vue.component('LayoutView', {
    functional: true,
    render (h, context) {
      const root = context.parent.$root
      const router: VueRouter = root.$router
      const viewlayout = root.$options.viewlayout
      if (!router) throw new Error('You need to install vue-router!')
      if (!viewlayout) throw new Error('You need to initialize VueViewlayout!')

      const { route } = router.resolve(root.$route.fullPath)
      const layoutName: string = route.meta?.layout || viewlayout.defaultLayout
      const matchedLayout = viewlayout.getLayout(layoutName)

      return matchedLayout ? h(matchedLayout.component) : h('route-view')
    }
  })
}

class VueViewLayout {
  static install = layoutPlugin

  options: Options
  defaultLayout: string
  constructor (options?: Options) {
    this.options = options || {}
    const defaultLayout = this.options.defaultLayout
    this.defaultLayout = typeof defaultLayout === 'string' ? defaultLayout : 'defaultLayout'
  }

  getLayout (layoutName: string): LayoutConfig | undefined {
    return this.options.layouts?.find((layoutConfig) => layoutConfig.name === layoutName)
  }
}

export default VueViewLayout
