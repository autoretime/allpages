// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
 entry: { 
    main: path.resolve(__dirname, './src/index.js'),
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

        new HtmlWebpackPlugin({
        title: 'webpack 1 ',
        template: path.resolve(__dirname,'./src/index.html'), // шаблон
        filename: 'index.html', // название выходного файла
        }),
   
  
      new HtmlWebpackPlugin({
      title: 'webpack 2 ',
      template: path.resolve(__dirname,'./src/news.html'), // шаблон
      filename: 'news.html', // название выходного файла
      }),

   new HtmlWebpackPlugin({
   title: 'webpack 3 ',
   template: path.resolve(__dirname,'./src/photo.html'), // шаблон
   filename: 'photo.html', // название выходного файла
   }),


   new HtmlWebpackPlugin({
   title: 'webpack 4 ',
   template: path.resolve(__dirname,'./src/probuy.html'), // шаблон
   filename: 'probuy.html', // название выходного файла
   }),


   new HtmlWebpackPlugin({
   title: 'webpack 5 ',
   template: path.resolve(__dirname,'./src/rozklad.html'), // шаблон
   filename: 'rozklad.html', // название выходного файла
   }),
],
devServer: {
   contentBase: path.join(__dirname, 'dist'),
   compress: true,
   port: 9000,
 },
}

