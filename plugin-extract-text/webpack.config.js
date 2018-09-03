const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './dist/'
  },
  module: {
    rules: [
      //aqui van los loaders
      {
        // test: que tipo de archivo quiero reconecer,
        // use: que loader se a encargar del archivo
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // ['style-loader','css-loader']
          // fallback: 'style-loader',
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css")
  ]
}
