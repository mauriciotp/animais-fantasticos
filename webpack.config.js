const path = require('path');

module.exports = {
  entry: ['regenerator-runtime/runtime.js', './js/script.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
