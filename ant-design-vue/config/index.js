'use strict'
const path = require('path');
module.exports={
  assetsPath(_path) {
    let assetsSubDirectory;
    if (process.env.NODE_ENV === 'production') {
      assetsSubDirectory = 'static' //可根据实际情况修改
    } else {
      assetsSubDirectory = 'static'
    }
    return path.posix.join(assetsSubDirectory, _path)
  },
  resolve (dir) {
    return path.join(__dirname, '..', dir)
  }
}