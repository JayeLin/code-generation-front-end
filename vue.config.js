const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // devServer: {
  //   overlay: { // 让浏览器 overlay 同时显示警告和错误
  //     warnings: true,
  //     errors: true
  //   },
  //   host: '0.0.0.0',
  //   port: '7001',
  //   // https: false,
  //   // open: false, //配置后自动启动浏览器
  //   // hotOnly: true, // 热更新
  //   proxy: {
  //     'api': {
  //       target: '目标网址',
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   },
  // },


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
          output: 'dist_electron/dist'
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
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('assets', resolve('./src/assets'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('./src/views'))
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'My Vue App'
        return args
      })
    config.module
      .rule('html')
      .test(/\.(html)$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()


  },
  // 支持解析html模版
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('/src/'),
        vue$: 'vue/dist/vue.js'
      }
    }
  },
  css: {
    extract: true,
    sourceMap: false,
    requireModuleExtension: true,
    loaderOptions: {
      less: {
        test: /\.less$/,
        loader: 'less-loader',
        javascriptEnabled: true
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
