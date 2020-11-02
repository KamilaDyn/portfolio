module.exports = {
    entry: {
        entry: ["./src/js/index.js", "./src/js/pl-lang.js", "./src/js/proBar.js", "./src/js/sendEmail.js", "./src/js/lazyload.js"],

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
                test: /\.(svg|png|jpg|gif|webp)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        context: 'src',
                        name: '[name].[contenthash:6].[ext]',
                        outputPath: 'images/',
                        publicPath: 'images/',
                        
                    },
                }
            },
        ],
    },

};