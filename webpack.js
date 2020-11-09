const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
        }),
        new CopyPlugin({
            patterns: [
              {
                context: path.resolve(__dirname, 'dist'),
                from: './src/*.html',
              },
            ],
        })      
    ],
    optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin(),
    ],
  },
}
