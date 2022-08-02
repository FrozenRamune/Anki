const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'home/home': './src/home/index.jsx'
    },
    output: {
        path: path.join(__dirname, '../Anki/static'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react'],
                            plugins: [
                                ['@babel/plugin-proposal-class-properties', { loose: true }],
                                ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
                                ["@babel/plugin-proposal-private-methods", { "loose": true }],
                            ],
                        },
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '../Anki/static/home'),
        },
        host: '0.0.0.0',
        port: 3000,
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    target: 'web',
    experiments: {
        topLevelAwait: true
    },
};