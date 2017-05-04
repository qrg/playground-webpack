import path from 'path';

import webpack from 'webpack';

export default {

  entry: './src/entry.js',

  output: {
    publicPath: '/',
    sourcePrefix: '  ',
    path: path.join(__dirname, 'public'),
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

  devServer: {
    contentBase: 'public',
    port: 3000
  }

}
