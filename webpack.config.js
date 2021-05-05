const path = require('path')
const absPath = relPath => path.resolve(__dirname, relPath)

module.exports = {
  resolve: {
    alias: {
      '@utils': absPath('src/utils'),
      '@components': absPath('src/components'),
      '@constants': absPath('src/constants'),
    },
  },
}
