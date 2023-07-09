const { DefinePlugin } = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    allowedHosts: 'all',
  },

  publicPath: '/',

  chainWebpack: (config) => {
    config.resolve.symlinks(false);

    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
      .end();

    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm-bundler')
      .set('@/Models', path.resolve(__dirname, './src/Models/'))
      .set('@/components', path.resolve(__dirname, './src/components//'))
      .set('@/assets', path.resolve(__dirname, './src/assets/'))
      .set('@/router', path.resolve(__dirname, './src/router/'))
      .set('@/services', path.resolve(__dirname, './src/services/'))
      .set('@/store', path.resolve(__dirname, './src/store/'))
      .set('@/Utils', path.resolve(__dirname, './src/Utils/'))
      .set('@/Views', path.resolve(__dirname, './src/Views/'));
  },
};
