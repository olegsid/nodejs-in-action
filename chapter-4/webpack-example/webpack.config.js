const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './app/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                test: /\.(m?js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ]
    },
};