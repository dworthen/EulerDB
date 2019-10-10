//@ts-check

const path = require("path");

module.exports = (env, argv) => {
  let config = {
    mode: argv && argv.mode ? argv.mode : "development",
    devtool: "source-map",
    devServer: {
      contentBase: path.join(__dirname, "docs"),
      port: 5000,
      writeToDisk: () => {
        return true;
      }
    },
    module: {
      rules: [
        {
          test: /\.t|js$/,
          use: {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env"] }
          }
        }
      ]
    }
  };

  let output = {
    path: path.resolve(__dirname, "./docs/dist/SimpleGraph"),
    filename: "[name].js", // main.js
    library: "EulerDB", // aka window.myLibrary
    libraryTarget: "umd", // supports commonjs, amd and web browsers
    globalObject: "this"
  };

  let docsConfig = Object.assign({}, config, {
    entry: {
      index: path.resolve(__dirname, "./docs/src/SimpleGraph/index.js")
    },
    output: Object.assign({}, output, {
      path: path.resolve(__dirname, "./docs/dist/SimpleGraph")
    })
  });

  return [
    Object.assign({}, config, {
      entry: {
        index: path.resolve(__dirname, "./dist/esm/index.js")
      },
      output: Object.assign({}, output, {
        path: path.resolve(__dirname, "./dist/umd")
      })
    }),
    docsConfig
  ];
};
