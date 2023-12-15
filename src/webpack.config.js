const path = require('path');

// webpack.config.js
module.exports = {
  // ... other configurations
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utils'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
  