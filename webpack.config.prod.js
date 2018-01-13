const merge = require('webpack-merge');
const dev = require('./webpack.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");

module.exports = merge(dev, {
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })

    ]
});

