module.exports = {
    entry: {
        jquery: ["./src/js/jquery-3.5.1.min.js"],
        wow: ["./src/wow/wow.min.js"],
        main: ["./src/js/index.js", "./src/js/navigation.js"],
        extra: ["./src/js/wowinit.js","./src/js/pl-lang.js","./src/js/proBar.js", "./src/js/sendEmail.js",  "./src/js/lazyload.js" ],
      
       

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
                test: /\.(svg|png|jpg|webp)$/,
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
            {
                test: /\.(gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        context: 'src',
                        name: '[name].[contenthash:6].[ext]',
                        outputPath: 'demo/',
                        publicPath: 'demo/',
                        
                    },
                }
            },
        ],
    },

};