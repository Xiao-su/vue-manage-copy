module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: '3000',
    https: false,
    hotOnly: true,
    proxy: 'http://localhost:8000'
  }
}