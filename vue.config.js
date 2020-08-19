module.exports = {
  // publicPath:'/',
  devServer: {
    proxy:{
      '/orgmem': {
        target: 'http://demo.tmlsystem.com:9095/orgmem',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/orgmem': ''
        },
        cookieDomainRewrite: {
          '^/orgmem': ''
        },
      }
    }
  },
}