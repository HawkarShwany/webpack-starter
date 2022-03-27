const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // bundle will be name of the file in the output, change it and filename will change 
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js', // [name] is for filename to be dynamic based on entry. [contenthash] is for cacheing which improves build speed
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devtool: 'source-map', // addes mapping to your code for debugging
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist') // serve dist folder
    },
    port: 3000,
    open: true, // open browser automatically
    hot: true, // use hot reloading
    compress: true, // enable gzip compression 
    historyApiFallback: true,
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
      }, {
        // use babel to be backwards compatible for older browsers
        test: /\.js$/, // anything with .js extension node_modules excluded
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },{
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // i is for case insensitive
        type: 'asset/resource'
      },]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]
}