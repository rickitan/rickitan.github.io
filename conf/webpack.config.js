const path = require('path');
const webpack = require('webpack');

const pathDist = path.resolve('dist');
const pathRoot = path.resolve('src');
const pathStyles = path.resolve('style');
const pathNodeModules = path.resolve('node_modules');

module.exports = {
  devtool: 'inline-source-map',
  debug: true,
  entry: [
      'webpack-dev-server/client?http://0.0.0.0:7070', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './src/index.js',
  ],
  output: {
      path: pathDist,
      publicPath: '/',
      filename: 'app.min.js',
  },
  resolve: {
      extensions: ['', '.js', '.jsx'],
      modulesDirectories: ['node_modules'],
  },
  module: {
      preLoaders: [
        {
          test: /\.jsx$/,
          loader: 'eslint',
          include: [
            pathRoot
          ]
        },
        {
          test: /\.js$/,
          loader: 'eslint',
          include: [
            pathRoot
          ]
        }
      ],
      loaders: [
          {
              test: /\.css$/,
              loader: 'style!css?sourceMap',
              include: [
                pathStyles,
                pathNodeModules
              ]
          },
          {
              test: /\.json$/,
              loader: 'json'
          },
          {
              test: /\.scss$/,
              loader: 'style!css?sourceMap!sass',
              include: [
                pathStyles
              ]
          },
          {
            test: /\.js$/,
            loader: 'babel',
            query: {
              presets: [
                'es2015',
                'stage-1',
                'react'
              ]
            },
            exclude: /node_modules/,
            include: [
              pathRoot
            ]
          },
          {
            test: /\.jsx$/,
            loader: 'babel',
            query: {
              presets: [
                'es2015',
                'stage-1',
                'react'
              ]
            },
            include: [
              pathRoot
            ]
          },
          {
              test: /\.woff\d?(\?.+)?$/,
              loader: 'url?limit=10000&minetype=application/font-woff',
          },
          {
              test: /\.ttf(\?.+)?$/,
              loader: 'url?limit=10000&minetype=application/octet-stream',
          },
          {
              test: /\.eot(\?.+)?$/,
              loader: 'url?limit=10000',
          },
          {
              test: /\.svg(\?.+)?$/,
              loader: 'url?limit=10000&minetype=image/svg+xml',
          },
          {
              test: /\.png$/,
              loader: 'url?limit=10000&mimetype=image/png',
          },
          {
              test: /\.gif$/,
              loader: 'url?limit=10000&mimetype=image/gif'
          }
      ],
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ]
};
