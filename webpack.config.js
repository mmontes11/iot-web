const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

const inProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          inProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4000,
              name: "[name].[ext]",
              outputPath: "assets"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".sass", ".css"],
    modules: ["./src/", "node_modules"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      favicon: "./src/assets/favicon.ico",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new ManifestPlugin({
      filename: "manifest.json",
      seed: {
        short_name: "IoT web",
        name: "IoT web",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff"
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        IOT_SERVER_URL: JSON.stringify(process.env.IOT_SERVER_URL),
        IOT_SERVER_BASIC_AUTH_USERNAME: JSON.stringify(
          process.env.IOT_SERVER_BASIC_AUTH_USERNAME
        ),
        IOT_SERVER_BASIC_AUTH_PASSWORD: JSON.stringify(
          process.env.IOT_SERVER_BASIC_AUTH_PASSWORD
        )
      }
    })
  ],
  node: {
    fs: "empty"
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
};