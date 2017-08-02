const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader' },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { 
            loader: 'css-loader',
            options: { importLoaders: 1 }, 
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          { loader: 'style-loader' },
          { 
            loader: 'css-loader',
            options: { importLoaders: 1 }, 
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ]
      },
      { 
        test: /\.pug$/, 
        use: [
          { loader: 'html-loader' },
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
  ],
};

module.exports = config;
