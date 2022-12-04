const path = require("path");

module.exports = (_, argv) => ({
  entry: {
    profile: './src/profile/index.js',
    dashboard: './src/dashboard/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
  },
  watch: argv.mode === 'development',
  devtool: argv.mode === 'development' ? 'eval-source-map' : false
})