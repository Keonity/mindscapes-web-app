const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        forestOfBeginnings: './src/forestOfBeginnings.js',
        hyesolia: './src/hyesolia.js',
        oonebi: './src/oonebi.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mindscapes Catalogue',
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index'],
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            title: 'Hyesolia',
            template: './src/hyesolia.html',
            filename: 'hyesolia.html',
            chunks: ['hyesolia'],
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            title: 'Forest Of Beginnings',
            template: './src/forestOfBeginnings.html',
            filename: 'forestOfBeginnings.html',
            chunks: ['forestOfBeginnings'],
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            title: 'Oonebi',
            template: './src/oonebi.html',
            filename: 'oonebi.html',
            chunks: ['oonebi'],
            inject: 'body',
        }),
    ],
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};