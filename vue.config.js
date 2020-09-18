const BASE_URL = process.env.NODE_ENV === 'production' ? '/omsite' : '/';
module.exports = {
  publicPath: BASE_URL,
  devServer: {
    proxy: {
      '/orgmem': {
        target: 'http://demo.tmlsystem.com:9095',
        changeOrigin: true,
        ws: true,
        // pathRewrite: {
        //   '^/orgmem': ''
        // },
        // cookieDomainRewrite: {
        //   '^/orgmem': ''
        // },
      },
      '/apps':{
        target: 'https://demo.tmlsystem.com:9094',
      }
    }
  },
}