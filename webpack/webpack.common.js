const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ['./src/index.js'],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.styl'],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader?name=images/[name].[ext]']
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'js/bundle.js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/'
  }
};