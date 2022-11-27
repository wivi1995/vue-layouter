import Vue, { ComponentOptions, PluginFunction, AsyncComponent } from 'vue'
import VueRouter from 'vue-router'
import './types'

type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent

interface LayoutFileModules {
  filePath: string
  fileModule: Component
}

export interface LayoutConfig {
  name: string
  component: Component
}

export interface Options {
  defaultLayout?: string
  layouts?: Array<LayoutConfig>
}

const layoutPlugin: PluginFunction<Options> = function (Vue) {
  Vue.component('LayouterView', {
    functional: true,
    render (h, context) {
      const root = context.parent.$root
      const router: VueRouter = root.$router

      if (!router) throw new Error('You need to install vue-router!')
      const layouter = router.app.$options.layouter
      if (!layouter) throw new Error('You need to initialize VueLayouter!')

      const { route } = router.resolve(root.$route.fullPath)
      const layoutName: string = (route.meta ? route.meta.layout : null) || layouter.defaultLayout
      const matchedLayout = layouter.getLayout(layoutName)

      return matchedLayout ? h(matchedLayout.component) : h('router-view')
    }
  })
}

const loadFiles = require.context('./layouts-entry', false, /\.ts$/)
const isAutoLoad: boolean = process.env.__VUE_LAYOUTER_AUTO_LOAD__ || false

let layoutFileModules = [] as LayoutFileModules[]
if (isAutoLoad) {
  layoutFileModules = loadFiles('./index.ts').default
}

const formatLayoutName = (path: string) => {
  path = path.replace('./', '')
  const names = (path.match(/.*?(?=(\/index)?\.(vue|js|ts|tsx|jsx))/g) || [])[0].split('/')
  let layoutName = ''
  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    layoutName += i === 0 ? firstLowerCase(name) : firstUpperCase(name)
  }
  layoutName = layoutName.endsWith('Layout') ? layoutName : `${layoutName}Layout`
  return layoutName
}

const firstUpperCase = (str: string) => str[0].toUpperCase() + str.slice(1)

const firstLowerCase = (str: string) => str[0].toLowerCase() + str.slice(1)

const generateLayoutsConfig = () => {
  return layoutFileModules.map((fileModule) => {
    return {
      name: formatLayoutName(fileModule.filePath),
      component: fileModule.fileModule
    }
  })
}

class VueLayouter {
  static install = layoutPlugin

  options: Options
  defaultLayout: string
  constructor (options?: Options) {
    this.options = options || {}
    this.options.layouts = isAutoLoad ? generateLayoutsConfig() : this.options.layouts
    const defaultLayout = this.options.defaultLayout
    this.defaultLayout = typeof defaultLayout === 'string' ? defaultLayout : 'defaultLayout'
  }

  getLayout (layoutName: string): LayoutConfig | undefined {
    return this.options.layouts ? this.options.layouts.find((layoutConfig) => layoutConfig.name === layoutName) : undefined
  }
}

export default VueLayouter
