const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.argv[process.argv.indexOf('--mode') + 1] === 'development';

const plugins = () => {
  const base = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    
  ]

  !isDev && (
    base.push(
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    )
  )

  return base
}

module.exports = () => ({
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader']
      },
      {
        test: /.s?css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images',
              limit: 8192
            }
          }
        ]
      },
    ]
  },
  plugins: plugins(),
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 9000
  },
  watch: isDev,
  devtool: isDev ? 'eval-source-map' : false
})