const VueLayouterWebpackPlugin = require('./webpack')

module.exports = {
  pages: {
    index: {
      entry: 'example/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  configureWebpack: {
    plugins: [
      new VueLayouterWebpackPlugin({
        layoutsDir: './example/layouts'
      })
    ]
  }
}
