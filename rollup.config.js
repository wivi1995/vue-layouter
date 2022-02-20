import vue from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))

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

const buildConfig = {
  input: './src/index.ts',
  external,
  output: {
    name: 'VueViewLayout',
    format: 'esm',
    dir: 'dist/esm'
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

if (argv.format === 'umd') {
  buildConfig.output.format = 'umd'
  delete buildConfig.output.dir
  buildConfig.output.file = 'dist/vue-view-layout.min.js'
  buildConfig.plugins.push(
    terser({
      output: {
        ecma: 5
      }
    })
  )
}

export default buildConfig
