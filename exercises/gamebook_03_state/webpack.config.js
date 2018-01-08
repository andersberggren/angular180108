var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: './main.ts',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  module: {
    rules: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    // To quench weird webpack warning, see https://github.com/angular/angular/issues/11580#issuecomment-327338189
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, '.'), // location of your src
      {} // a map of your routes 
    ),
  ],
  devtool: 'inline-source-map'
};
