const isDev = process.argv[process.argv.indexOf('--mode') + 1] === 'development';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
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
              limit: 8
            }
          }
        ]
      },
    ]
  },
  watch: isDev,
  devtool: isDev ? 'eval-source-map' : false
}