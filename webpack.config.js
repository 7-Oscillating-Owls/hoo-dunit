const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },

  mode: 'development', // other option: production

  module: {
    rules: [
      {
        test: /\.m?js|jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader', // transpiles React from ES6 to ES5
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
