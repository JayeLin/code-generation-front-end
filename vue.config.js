var path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}


const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  configureWebpack: config => {
    config.plugins.forEach((val) => {
      if (val instanceof HtmlWebpackPlugin) {
        console.log(val)
        console.log(val.options.templateParameters.toString())
      }
    })
  },
  // pages: {
  //   index: {
  //     // page 的入口
  //     entry: 'background.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   }
  // },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.teleone',
        productName: 'code-generation-front-end@0.1.0',
        files: ['**/*', 'static/*'],
        asar: true,
        win: {
          icon: './app.ico',
          target: ['zip', 'nsis']
        },
        nsis: {
          oneClick: false,
          allowElevation: true,
          allowToChangeInstallationDirectory: true,
          installerIcon: './app.ico',
          uninstallerIcon: './app.ico',
          installerHeaderIcon: './app.ico',
          createDesktopShortcut: true,
          createStartMenuShortcut: true
        }
      }
    }
  },
  // 加载 .html 文件
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "My Vue App";
        return args;
      })
    config.module
      .rule('html')
      .test(/\.(html)$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
  },
  // 支持解析html模版
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        'vue$': 'vue/dist/vue.js'
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        test: /\.less$/,
        loader: 'less-loader'
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100
          })
        ]
      }
    }
  },
  productionSourceMap: false,
  lintOnSave: false,
  runtimeCompiler: true
}
