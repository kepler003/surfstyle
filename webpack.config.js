const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env"] }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|png|jpg|jpeg)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/'
          }
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/components/pages'),
      organisms: path.resolve(__dirname, 'src/components/organisms'),
      molecules: path.resolve(__dirname, 'src/components/molecules'),
      atoms: path.resolve(__dirname, 'src/components/atoms'),
      styles: path.resolve(__dirname, 'src/styles'),
      utils: path.resolve(__dirname, 'src/utils'),
      images: path.resolve(__dirname, 'src/images')
    }
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/", // Change to '/' for production
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/"
  },
  ignoreWarnings: [/Failed to parse source map/],
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html')
    })
  ]
};