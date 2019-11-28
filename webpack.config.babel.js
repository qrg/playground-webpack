import path from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const DIST = path.join(__dirname, 'public');

export default {

  entry: './src/entry.js',
  mode: 'development',

  output: {
    publicPath: '/',
    sourcePrefix: '  ',
    path: DIST,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'src/index.html',
        to: ''
      }
    ])
  ],

  devServer: {
    contentBase: DIST,
    port: 3000
  }

}
