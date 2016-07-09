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
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }

}
