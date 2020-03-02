const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '..', '..', '..', 'app/javascript/components'),
      '@stores': path.resolve(__dirname, '..', '..', '..', 'app/javascript/stores'),
      '@views': path.resolve(__dirname, '..', '..', '..', 'app/javascript/views')
    }
  }
}
