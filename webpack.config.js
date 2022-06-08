const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname,'src/app/main.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'[name].[contenthast].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            { 
                test: /\.json$/,
                exclude: /node_modules/,
                type: 'asset/source' //json
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Naru Taco\'s',
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ["main"]
        }),
        new BundleAnalyzerPlugin(),
    ],
}