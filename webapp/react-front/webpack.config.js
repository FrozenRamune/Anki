const path = require('path')

const IS_DEV = process.env.DEVELOPMENT != null

module.exports = {
    mode: IS_DEV ? 'development' : 'production',
    devtool: IS_DEV ? 'inline-source-map' : 'hidden-nosources-source-map',
    entry: {
        'home/home': './src/home/index.jsx'
    },
    output: {
        path: path.join(__dirname, IS_DEV ? '../Anki/static' : 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: 'modules/[name].bundle.js',
    },
    resolve: {
        modules: [path.join(__dirname, 'node_modules')],
        alias: {
            '@': path.join(__dirname, './src'),
        },
        extensions: ['.ts', '.tsx', '.d.ts', '.js'],
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 5000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react'],
                            plugins: [
                                ['babel-plugin-direct-import', { modules: ['@mui/material', '@mui/icons-material'] }],
                                ['@babel/plugin-proposal-class-properties', { loose: true }],
                                ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
                                ["@babel/plugin-proposal-private-methods", { "loose": true }],
                            ],
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: [/\.scss$/, /\.sass$/],
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.svg$/,
                issuer: /\.[jt]sx?$/,
                use: [
                    { loader: '@svgr/webpack' },
                ]
            },
            {
                test: /\.(png|jpe?g)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    target: 'web',
    experiments: {
        topLevelAwait: true
    },
};