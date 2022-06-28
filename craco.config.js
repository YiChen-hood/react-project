const path = require('path')

module.exports = {
  // webpack config
  webpack: {
    // config name
    alias: {
      // define：using @ to represent the path of src file 
      '@': path.resolve(__dirname, 'src')
    }
  }
}