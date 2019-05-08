import HtmlWebpackPlugin from 'html-webpack-plugin'
import { HotModuleReplacementPlugin, DefinePlugin } from 'webpack'
import * as R from 'ramda'

const config = (env, argv) => {
  const result = {
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
        template: './index.html',
        favicon: 'favicon.ico'
      }),
      new DefinePlugin(R.pipe(
        R.toPairs,
        R.map(([k, v]) => [k, JSON.stringify(v)]),
        R.fromPairs
      )(env))
    ]
  }
  if (argv.mode === 'production') {
    result.output = {
      filename: '[chunkhash].js'
    }
  } else {
    result.plugins.push(new HotModuleReplacementPlugin())
  }
  return result
}

export default config
