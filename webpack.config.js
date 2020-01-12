const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

module.exports = (env, options) => {
  if ( options.mode === 'production' ){
    config.plugins = [new CleanWebpackPlugin()];
  }
  return config;
};


const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve( __dirname, 'dist' ),
    publicPath: 'dist/',
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'], },
      { test: /\.ts$/, use: 'awesome-typescript-loader' },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { enforce: 'pre', test: /\.ts$/, loader: 'tslint-loader' },
      { test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    })
  ]
};
