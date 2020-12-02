module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'cn.psvmc',
        productName: '測試',
        icon: './app.ico',
        files: ['**/*', 'static/*'],
        asar: true,
        mac: {
          icon: './app.ico',
          target: ['zip', 'dmg']
        },
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
          createStartMenuShortcut: true,
          license: './LICENSE.txt'
        }
      }
    }
  }
}
