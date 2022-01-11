const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const pathsTransformer = require("ts-transform-paths").default;

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            getCustomTransformers: (program) => pathsTransformer()
          }
        }
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()]
  },
  plugins: [
  ],
  output: {
    library: {
      name: 'a',
      type: 'umd'
    },
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
