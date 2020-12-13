const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const publicPath = '/';

module.exports = {
  mode: 'development',
  entry: ["./src/js/index.js", "./src/js/navigation.js", "./src/js/wow.js",  "./src/js/pl-lang.js", "./src/js/proBar.js", "./src/js/sendEmail.js", "./src/js/lazyload.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[contenthash].js',
    publicPath: publicPath,
  },

  module: {
    rules: [{
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attributes: {
            list: [{
                tag: 'img',
                attribute: 'src',
                type: 'src',
              },
              {
                tag: 'img',
                attribute: 'data-src',
                type: 'src',
              },
            ]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],

      },
      {
        test: /\.(sass|scss)$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          {
            // This loader resolves url() and @imports inside CSS
            loader: "css-loader",
          },
          {
            // First we transform SASS to standard CSS
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|PNG|webp)$/,

        use: [{
          loader: "file-loader",
          options: {
            name: '[name].[contenthash:6].[ext]',
            outputPath: 'images/',
            publicPath: 'images/'
          }
        }]
      },
      {
        test: /\.svg$/,
        use: [{
          // Using file-loader for these files
          loader: "file-loader",
          // In options we can set different things like format
          // and directory to save
          options: {
            name: '[name].[contenthash:6].[ext]',
            outputPath: 'svg/',
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: "file-loader",
        }],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: "src/template/index.html",
      title: "portfolio"
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
    }),

    new FaviconsWebpackPlugin({
      filename: "[name].png",
      logo: "src/favicon/favicon-32x32.png",
      publicPath: "./",
      prefix: "favicon"
    })

  ],

}