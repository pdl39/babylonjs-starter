const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const pk = require('./package.json');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.js', '.json'],
    mainFiles: ['index'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      },
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/i,
        use: ["html-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: pk.name,
      favicon: pk.favicon,
    })
  ]
}
