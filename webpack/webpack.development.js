const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true, // respond to 404s with index.html
    contentBase: './public'
  }
})