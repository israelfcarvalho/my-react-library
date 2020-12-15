const {merge} = require('webpack-merge');

const webpackCommonConfig = require('./webpack.common');

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    devtool: 'source-map',
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        }
    }
});