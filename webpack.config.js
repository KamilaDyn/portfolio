const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const cssnano = require('cssnano');
const TerserPlugin = require("terser-webpack-plugin");

const JS_DIR = path.resolve(__dirname, 'src/js');
const BUILD_DIR = path.resolve(__dirname, 'build');
const entry = {
  main: JS_DIR + '/main.js',
  nav: JS_DIR + '/nav.js',
}
const output = {
  path: BUILD_DIR,
  filename: 'production' === process.env.NODE_ENV ? 'js/[name].min.js' : 'js/[name].js',
};

const rules = [{
    test: /\.html$/,
    loader: 'html-loader',
    options: {
      attributes: {
        list: [{
            tag: 'img',
            attribute: 'data-src',
            type: 'src',
          },
          {
            tag: 'source',
            attribute: 'srcset',
            type: 'srcset',
          },
          {
            tag: 'img',
            attribute: 'src',
            type: 'src',
          },
        ]
      }
    }

  },
  {
    test: /\.js$/,
    include: [JS_DIR],
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
    exclude: /(node_modules)/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader'
    ],

  },
  {
    test: /\.(sass|scss)$/,
    exclude: /(node_modules)/,
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
    test: /\.(png|jpe?g|PNG)$/,
exclude: /(node_modules)/,
    use: [{
      loader: "file-loader",
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
        publicPath: './images/'
      }
    }]
  },
  {
    test: /\.(svg|webp)$/,
    use: [{
      loader: "file-loader",
      options: {
        name: '[name].[ext]',
        outputPath: 'svg/',
        publicPath: './svg/'
      }
    }]
  },
  {
    test: /\.(gif)$/,
    use: [{
      loader: "file-loader",
      options: {
        context: 'src',
        name: '[name].[ext]',
        outputPath: 'demo/',
        publicPath: './demo/',

      },
    }]
  },
 {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: [ /node_modules/],
        use: {
            loader: 'file-loader',
            options: {
                name: 'fonts/[name].[ext]',
                publicPath:   'production' === process.env.NODE_ENV ? './' :'./'
            }
        }
    }
]


const plugins = (argv) => [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: "src/template/index.html",
        chunks: ['main'],
    minify: {
      removeAttributeQuotes: 'production' === process.env.NODE_ENV ? true : false,
      collapseWhitespace: 'production' === process.env.NODE_ENV ? true : false,
      removeComments: 'production' === process.env.NODE_ENV ? true : false,
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'act-outs.html',
    template: "src/template/act-outs.html",
    chunks: [ 'nav'],
    minify: {
      removeAttributeQuotes: 'production' === process.env.NODE_ENV ? true : false,
      collapseWhitespace: 'production' === process.env.NODE_ENV ? true : false,
      removeComments: 'production' === process.env.NODE_ENV ? true : false,
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'flickthroughenglish.html',
    template: "src/template/flickthroughenglish.html",
    chunks: [ 'nav'],
    minify: {
      removeAttributeQuotes: 'production' === process.env.NODE_ENV ? true : false,
      collapseWhitespace: 'production' === process.env.NODE_ENV ? true : false,
      removeComments: 'production' === process.env.NODE_ENV ? true : false,
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'my-notes.html',
    template: "src/template/my-notes.html",
    chunks: ['nav'],
    minify: {
      removeAttributeQuotes: 'production' === process.env.NODE_ENV ? true : false,
      collapseWhitespace: 'production' === process.env.NODE_ENV ? true : false,
      removeComments: 'production' === process.env.NODE_ENV ? true : false,
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'customer-list.html',
    template: "src/template/customer-list.html",
    chunks: ['nav'],
    minify: {
      removeAttributeQuotes: 'production' === process.env.NODE_ENV ? true : false,
      collapseWhitespace: 'production' === process.env.NODE_ENV ? true : false,
      removeComments: 'production' === process.env.NODE_ENV ? true : false,
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'kindergarden.html',
    template: "src/template/kindergarden.html",
    chunks: ['nav'],
    minify: {
      removeAttributeQuotes: 'production' === process.env.NODE_ENV ? true : false,
      collapseWhitespace: 'production' === process.env.NODE_ENV ? true : false,
      removeComments: 'production' === process.env.NODE_ENV ? true : false,
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'zakupydlaseniora.html',
    template: "src/template/zakupydlaseniora.html",
    chunks: ['nav'],
    minify: {
      removeAttributeQuotes: 'production' === process.env.NODE_ENV ? true : false,
      collapseWhitespace: 'production' === process.env.NODE_ENV ? true : false,
      removeComments: 'production' === process.env.NODE_ENV ? true : false,
    }
  }),
  new MiniCssExtractPlugin({
    filename:  'production' === process.env.NODE_ENV ?  "[name].min.css":  "[name].css",
  }),



]

module.exports = (env, argv) => ({
  entry: entry,

  output: output,

  devtool: 'source-map',

  module: {
    rules: rules,
  },

  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessor: cssnano
      }),
      new TerserPlugin(),



    ]
  },

  plugins: plugins(argv),


})
