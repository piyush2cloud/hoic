const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, '../', 'src')],
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html',
            },
          },
          'file-loader',
          'html-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  devtool: 'cheap-module-source-map',

  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: [
      '@babel/polyfill',
      path.resolve(__dirname, '../', '../', 'src', 'server.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../', '../', 'build'),
    filename: 'server.js',
  },
  devServer: {
    port: 3002,
  },
  node: {
    console: true,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
  },

  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
