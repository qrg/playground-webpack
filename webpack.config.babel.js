import path from 'path';

import CleanPlugin from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const DIST = path.join(__dirname, 'public');

export default {

  entry: './src/entry.js',

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
    new CleanPlugin(
      ['public/**/*.*'],
      {watch: true}
    ),
    new CopyPlugin([
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
