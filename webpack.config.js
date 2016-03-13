'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main',
    output: {
      path: "./dist",
      filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                query: {
                  presets: 'es2015'
                },
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map',
};