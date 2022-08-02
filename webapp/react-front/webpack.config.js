const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        'home/home': './src/home/index.tsx'
    },
    output: {
        path: path.join(__dirname, '../Anki/static'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react'],
                            plugins: [
                                ['@babel/plugin-proposal-class-properties', { loose: true }], // 追加
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
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
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    target: 'web',
    experiments: {
        topLevelAwait: true
    },
};