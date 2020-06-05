const path = require('path');

module.exports = (env, args) => {
    return {
        entry: './src/raven.ts',
        module: {
            rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            ],
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ],
        },
        output: {
            filename: args.mode == "production" ? 'raven.min.js' : 'raven.js',
            path: path.resolve(__dirname, 'dist'),
            library: "RavenJS"
        }
    }
};
