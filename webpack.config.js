const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'app.js'
  },
  mode: 'development',
  module:{
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  node:{
    fs:'empty',
    uws:'empty'
  }
 
};