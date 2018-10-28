const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const path = require('path')
// THEMING
const DEFAULT_THEME = 'default';
const resolveThemeName = (argv) => {
  const target = argv.THEME
  return (!target) ? DEFAULT_THEME : target
}

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production'
  // THEMING  (e.g. --THEME=theme-one)  
  console.log(resolveThemeName(argv));

  return {
    devtool: "source-map", // any "source-map"-like devtool is possible
    entry: ['./src/index.jsx', `./src/assets/_scss/styles.scss`],
    output: {
      path: path.resolve('dist'),
      filename: 'main.js',
      publicPath: '/'
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin()
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      }),
      new CopyWebpackPlugin([{
        from: 'src/assets/images', 
        to: 'assets/images'
      }]),
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        disable: devMode, // Disable during development
        plugins: [
          imageminMozjpeg({
            quality: 60,
            progressive: true
          })
        ]
      })
    ],
    module: {
      rules: [
        {
          test: /\.jsx$|.js$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'eslint-loader'
          ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [{
            // fallback to style-loader in development
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          }, {
            loader: "css-loader", options: {  // translates CSS into CommonJS
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: "sass-loader", options: {  // compiles Sass to CSS, using Node Sass by default
              sourceMap: true
            }
          }
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
              }
          }]
      }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css', '.scss']
    }
  }
};