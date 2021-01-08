'use strict'
const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  css: {
    loaderOptions: {
      // sass: {
      //   data: `@import "~@/styles/variables.scss";@import "~@/styles/mixin.scss";`
      // }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, 'src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ extract: false })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .tap(options => ({
        ...options,
        plugins: [{ removeAttrs: { attrs: 'fill' } }]
      }))
    config
      .plugin('svg-sprite')
      .use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])
    config.module
      .rule('svg')
      .exclude.add(path.resolve(__dirname, 'src/assets/icons'))
      .end()
  }
}
