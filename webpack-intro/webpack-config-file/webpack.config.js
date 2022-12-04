const path = require("path");
const isDev = process.argv[process.argv.indexOf('--mode') + 1] === 'development';

module.exports = {
  entry: {
    profile: './src/profile/index.js',
    dashboard: './src/dashboard/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
  },
  watch: isDev,
  devtool: isDev ? 'eval-source-map' : false
}