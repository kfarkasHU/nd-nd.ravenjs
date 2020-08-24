const path = require('path');

module.exports = (_, args) => {
  return {
    entry: './src/rjs6-main.ts',
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
      filename: args.mode === 'production' ? 'rjs6.min.js' : 'rjs6.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'Raven',
      libraryTarget: 'global'
    }
  }
};