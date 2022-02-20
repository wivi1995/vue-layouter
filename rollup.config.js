import vue from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'

const baseConfig = {
  plugins: {
    preVue: [
      alias({
        customResolver: resolve({
          extensions: ['.js', '.jsx', '.vue']
        })
      })
    ],
    replace: {
      'process.env.NODE_ENV': JSON.stringify('production')
    },
    vue: {
      target: 'browser'
    },
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.vue'],
      babelHelpers: 'bundled'
    }
  }
}

const external = [
  'vue',
  'vue-router'
]

export default {
  input: './src/index.ts',
  external,
  output: {
    name: 'VueViewLayout',
    format: 'esm',
    dir: 'dist/umd'
  },
  plugins: [
    typescript(),
    replace(baseConfig.plugins.replace),
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    babel({
      ...baseConfig.plugins.babel,
      presets: ['@vue/cli-plugin-babel/preset']
    }),
    commonjs()
  ]
}
