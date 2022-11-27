const fs = require('fs')
const path = require('path')
const { DefinePlugin } = require('webpack')

class VueLayouterWebpackPlugin {
  layoutsDir = null
  constructor(options = {}) {
    this.layoutsDir = path.resolve(process.cwd(), options.layoutsDir || './src/layouts')
    if (!fs.statSync(this.layoutsDir).isDirectory()) {
      throw new Error(`Cannot find '${this.layoutsDir}' directory`)
    }
  }

  apply(compiler) {
    let layoutsFileContent = ''
    layoutsFileContent += `const loadFiles = require.context('${this.layoutsDir}', true, /([^/]+|.*\\/index)\\.(vue|ts|js|tsx|jsx)$/)`
    layoutsFileContent += '\nexport default loadFiles.keys().map((file) => { return { filePath: file, fileModule: loadFiles(file).default } })'
    layoutsFileContent += '\n'

    const targetFilePath = path.resolve(__dirname, '../src/layouts-entry/index.ts')
    fs.writeFileSync(targetFilePath, layoutsFileContent)
    
    const definePlugin = new DefinePlugin({
      'process.env': {
        __VUE_LAYOUTER_AUTO_LOAD__: JSON.stringify(true)
      }
    })
    definePlugin.apply(compiler)
  }
}

module.exports = VueLayouterWebpackPlugin
