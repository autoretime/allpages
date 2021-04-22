// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const pages = fs
    .readdirSync(path.resolve(__dirname, './src/'))
    .filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  
 entry: { 
    main: path.resolve(__dirname, './src/index.js'),
 },
 module: {
  rules: [{
      test: /\.pug$/,
      loader: 'pug-loader'       
    },
    {
      test: /\.(css|scss|sass|less|styl)$/,
      exclude: '/node_modules/',
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'stylus-loader',
        'less-loader',
        'sass-loader',
      ],
    }
  ]
},
 output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    clean: true,
 },
 plugins: [
    new CleanWebpackPlugin (),

    new CopyPlugin({
      patterns: [
        { from: "./src/images", to: "images" },
      ],
    }),

    ...pages.map(page => new HtmlWebpackPlugin({
      template: __dirname + '/src/' + page,
      filename: `./${page.replace(/\.pug/, '.html')}`
    })),

    new MiniCssExtractPlugin({
      filename: './css/style.css'
    }),

],
devServer: {
   contentBase: path.join(__dirname, 'dist'),
   compress: true,
   port: 9000,
 },
}

