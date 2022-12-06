const isDev = process.argv[process.argv.indexOf('--mode') + 1] === 'development';

module.exports = {
  entry: './src/scripts/index.js',
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
        use: ['style-loader', 'css-loader', 'sass-loader']
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
  watch: isDev,
  devtool: isDev ? 'eval-source-map' : false
}