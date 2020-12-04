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
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.teleone',
        productName: 'code-generation-front-end@0.1.0',
        files: ['**/*', 'static/*'],
        directories: {
          output: "dist_electron/dist"
        },
        asar: true,
        win: {
          icon: './public/icon.ico',
          target: ['nsis']
        },
        nsis: {
          oneClick: false,
          allowElevation: true,
          allowToChangeInstallationDirectory: true,
          installerIcon: './public/icon.ico',
          uninstallerIcon: './public/icon.ico',
          installerHeaderIcon: './public/icon.ico',
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
