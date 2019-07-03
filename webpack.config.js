const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = env => {
  return {
    mode: "development",
    entry: "./web/index.tsx",
    output: {
      filename: "[name].js",
      path: __dirname + "/dist"
    },

    resolve: {
      //plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
      extensions: [".ts", ".tsx", ".js", ".json"],
      "alias": {
        "react": "preact/compat",
        "react-dom": "preact/compat",
        "libs": path.resolve("./libs"),
      }
    },

    module: {
      rules: [
        {
          // make all files ending in .json5 use the `json5-loader`
          test: /\.json5$/,
          loader: 'json5-loader',
        },
        {
          test: /\.tsx?$/,
          use: [
            "babel-loader",
            "linaria/loader"
          ]
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader"
          ]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "web/index.html"
      })
    ],

    devServer: {
      //contentBase: path.join(__dirname, 'static'),
      compress: true,
      port: 8080,
      host: '127.0.0.1',
      hot: true,
    },
  };
};
