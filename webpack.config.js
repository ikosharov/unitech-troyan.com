var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('js'),
  devtool: 'source-map',
  entry: [
    './index'
  ],
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.resolve('public'),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node-modules/
      }
    ]
  }
};