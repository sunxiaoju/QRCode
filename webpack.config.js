const path = require('path');

module.exports = {
  mode: 'production',
  entry: './main/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".ts"]
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, use: [{ loader: "awesome-typescript-loader" }] },
    ],
  }
}
