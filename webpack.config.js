var path = require("path");

module.exports = {
    entry: {
        frontend: ['babel-polyfill', "./src/frontend/app-loader.jsx"]
    },
    output: {
        path: path.join( __dirname, "dist/js" ),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["env", "stage-0", "react"]
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
};