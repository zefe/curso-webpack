const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    port: 9000
  },
  module: {
    rules: [
      //aqui van los loaders
      {
        // test: que tipo de archivo quiero reconecer,
        // use: que loader se a encargar del archivo
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  }
}
