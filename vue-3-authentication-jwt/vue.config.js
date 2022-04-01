// module.exports = {
//   devServer: {
//     port: 8081
//   }
// }


// const { defineConfig } = require('@vue/cli-service');
const path = require("path");
const vueSrc = "./src";
module.exports = ({
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc)
      },
      extensions: ['.js', '.vue', '.json']
    }
  },
});