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
  module: {
    rules: [
      // add a rule for each file type for compilation
      {
        test: /\.scss$/, // any file with .scss extension use the following
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
  }
}