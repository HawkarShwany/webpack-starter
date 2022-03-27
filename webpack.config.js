const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    // bundle will be name of the file in the output, change it and filename will change 
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
}