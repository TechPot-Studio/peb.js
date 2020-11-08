const path = require("path");
const glob = require("glob");

module.exports = {
    mode: "production",
    entry: glob.sync('./src/*.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'peb.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /((\.css)|(\.scss))$/g,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    },

};
