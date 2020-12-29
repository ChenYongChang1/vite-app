const path = require("path");

module.exports = {
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "./",
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: "dist",
  port: 3000,
  // 是否自动在浏览器打开
  // 压缩
  minify: "esbuild",
  open: false,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    extract: true,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {},

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false,
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: ["moment", "echarts", "axios", "mockjs"],
  },
  alias: {
    // 键必须以斜线开始和结束
    "/@/": path.resolve(__dirname, "./src"),
    "/~/": path.resolve(__dirname, "./"),
  },
  proxy: {
    "/dblogin": {
      target: "http://106.14.212.56/api/user/login",
      rewrite: (path) => path.replace(/^\/dblogin/, ""),
    },
    "/web/api": {
      target: "http://106.14.212.56/api",
      rewrite: (path) => path.replace(/^\/web\/api/, ""),
    },
  },
};
