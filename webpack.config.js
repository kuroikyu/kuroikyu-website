const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtracTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    main: './src/index.js',
    vendor: [
      'normalize.css',
      'font-awesome/css/font-awesome.min.css',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: ExtracTextPlugin.extract({
          fallback:'style-loader',
          use: [
            { 
              loader: 'css-loader',
              options: { importLoaders: 1 }, 
            },
            { loader: 'postcss-loader' },
          ],
        }),
      },
      
      {
        test: /\.sass$/,
        use: ExtracTextPlugin.extract({
          fallback:'style-loader',
          use: [
            { 
              loader: 'css-loader',
              options: { importLoaders: 1 }, 
            },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
          ]
        })
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader',
      },
      { 
        test: /\.pug$/, 
        use: [
          { loader: 'raw-loader' },
          { loader: 'pug-html-loader' }
        ]
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
    new ExtracTextPlugin("[name].[chunkhash].css"),
  ],
};

module.exports = config;
