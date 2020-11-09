const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// test if running for live
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/assets/",
        filename: '[name].[contentHash].bundle.js'
    },
    name: "rmishra-me-live",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true
                        }
                    },
                    'sass-loader',
                    
                ],
                
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]   
    },
    target: "web",
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ]
}
