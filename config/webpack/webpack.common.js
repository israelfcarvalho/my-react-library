const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  entry: {
    lib: "./src/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s(x)?$/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[path]--[hash:base64:5]'
              },
              
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    filename: "my-library.js",
    library: 'my-library',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, "../../dist"),
  },
};
