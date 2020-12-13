const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const path = require('path');
const common = require("./webpack.common");
const {
  merge
} = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: "js/[name].min.js",
    path: path.resolve(__dirname, "dist")

  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin(), new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "src/template/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'act-outs.html',
      template: "src/template/act-outs.html",
      chunks: ['jquery', 'main'],
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'wordpress.html',
      template: "src/template/wordpress.html",
      chunks: ['jquery', 'main'],
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'my-notes.html',
      template: "src/template/my-notes.html",
      chunks: ['jquery', 'main'],
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'customer-list.html',
      template: "src/template/customer-list.html",
      chunks: ['jquery', 'main'],
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'kindergarden.html',
      template: "src/template/kindergarden.html",
      chunks: ['jquery', 'main'],
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'zakupydlaseniora.html',
      template: "src/template/zakupydlaseniora.html",
      chunks: ['jquery', 'main'],
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    })
  
  ],

  },

  module: {

    rules: [
        {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }

          },
          'css-loader',
          'sass-loader',

        ],
      },
      {   test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              url: true,
            },

          },
          'css-loader',

        ],
      },
      
  ]
},

plugins: [
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash].css",
    options:{
      publicPath:"../../"
    }
  }),
  new FaviconsWebpackPlugin({
    filename: "[name].png",
    logo: "./src/favicon/favicon-32x32.png",
    publicPath: "./",
    prefix: "favicon"
  }),
  new CleanWebpackPlugin(),

],

})