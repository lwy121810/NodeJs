/*
 * @Author: lwy
 * @Date: 2020-10-24 17:12:58
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-24 18:33:38
 * @FilePath: /02_LearnCLI/lib/utils/utils.js
 */
// 编译的话需要用到ejs
const ejs = require('ejs')

const fs = require('fs')
const path = require('path')

const compile = (templateName, data) => {
  // 通过模板名称找到模板位置
  const tempPosition = `../templates/${templateName}`
  const filePath = path.resolve(__dirname, tempPosition)
  // 因为我们在模板中使用的是data.name 和data.lowerName, 所以在这里使用{data} 而不是data
  return ejs.renderFile(filePath,{data})
}


const createDirSyncIfNeed = (filepath) => {
  if (fs.existsSync(filepath)) {
    return true
  } else {
    // 不存在该文件夹 看上一级的文件夹是否存在
    if (createDirSyncIfNeed(path.dirname(filepath))) {
      // 上一级文件存在 创建文件
      fs.mkdirSync(filepath)
      return true
    }
  }
}

// 将对应result写入到文件中
const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content)
}

module.exports = {
  compile,
  writeToFile,
  createDirSyncIfNeed
}