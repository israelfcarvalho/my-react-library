const path = require('path');

module.exports = {
    entry: {
        lib: './src/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: true
                    }
                },
                exclude: /node_modules/
            }, 
            {
                test: /\.scss$/,
                use: ['css-loader', 'style-loader', 'sass-loader']
            }
        ]
    },
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].chunk.js',
        path: path.resolve(__, '../../build')
    }
}