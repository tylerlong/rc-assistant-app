import HtmlWebpackPlugin from 'html-webpack-plugin'
import { HotModuleReplacementPlugin } from 'webpack'

const config = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new HotModuleReplacementPlugin()
  ]
}

export default config
