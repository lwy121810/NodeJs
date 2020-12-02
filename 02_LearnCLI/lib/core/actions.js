/*
 * @Author: lwy
 * @Date: 2020-10-22 15:23:30
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-24 19:08:17
 * @FilePath: /02_LearnCLI/lib/core/actions.js
 */

const { promisify } = require('util')
const path = require('path')

const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const {
  compile,
  writeToFile,
  createDirSyncIfNeed
} = require('../utils/utils')

//  const download = require('download-git-repo')
// download函数是通过异步函数来进行回调的 
// 可以使用系统的util模块中的promisify来包装成promise
const download = promisify(require('download-git-repo'))
// 用来打开浏览器
const open = require('open')


// 创建项目命令 lwy create project
const createProjectAction = async (project) => {
  console.log("lwy cli 正在创建项目～");
  // 1.clone项目 也就是项目模板 这里使用npm中的 download-git-repo vue中的脚手架也是使用的这个东西
  await download(vueRepo, project, { clone: true })

  // 2.执行 npm install
  // cwd: 当前子进程的工作目录
  // 因为我们创建完项目之后 需要进入到项目中之后执行npm install 命令
  // 
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })

  // 3.运行 npm run serve
  //  await commandSpawn(command,['run', 'serve'],{cwd:`./${project}`})
  commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })

  // 4.打开浏览器 这样并不会打开
  // 因为run serve这个终端命令在子进程里是不会结束的 除非我们手动结束 crtl+c
  // 不会结束也就意味着 commandSpawn里的close回调永远不会执行
  // 所以会阻塞后面的代码

  // 1. 可以在执行npm run serve之前打开浏览器 npm run serve之后浏览器会热更新的
  // 2. 不使用await 同步执行之后的代码 
  // 3. 在webpack中配置
  open('http://localhost:8080/')

  console.log(project);
}

// 添加组件 也就是.vue文件 这里需要用到ejs模板
const addCpnAction = async (name, dest) => {
  // 1.有对应的ejs模板 编译ejs模板 得到result
  const result = await compile('vue-component.ejs', { name, lowerName: name.toLowerCase() })
  // 2.写入文件
  const filepath = path.resolve(dest, `${name}.vue`)
  console.log("创建的组件的位置：", filepath);
  writeToFile(filepath, result)
}

// 添加页面和路由
const addPageAndRouteAction = async (name, dest) => {
  // 1.编译
  const data = { name, lowerName: name.toLowerCase() }
  const pageResult = await compile('vue-component.ejs', data)
  const routeResult = await compile('vue-router.ejs', data)

  // 2.写入文件
  // 2.1 先判断文件是否存在
  const targetDest = path.resolve(dest, name.toLowerCase());
  if (createDirSyncIfNeed(targetDest)) {
    const targetPagePath = path.resolve(targetDest, `${name}.vue`)
    // 这里的route.js是固定的 因为项目模板中就是根据route.js来动态加载路由的
    const targetRoutePath = path.resolve(targetDest, 'router.js')

    writeToFile(targetPagePath, pageResult)
    writeToFile(targetRoutePath, routeResult)
  }
}

const addStoreAction = async (name, dest) => {
  // 1.编译
  const data = {}
  const storeResult = await compile('vue-store.ejs', data)
  const typeResult = await compile('vue-types.ejs', data)

  // 2.写入文件
  // 2.1 先判断文件是否存在
  const targetDest = path.resolve(dest, name.toLowerCase());
  if (createDirSyncIfNeed(targetDest)) {
    const targetStorePath = path.resolve(targetDest, `${name}.js`)
    // 这里的route.js是固定的 因为项目模板中就是根据route.js来动态加载路由的
    const targetTypePath = path.resolve(targetDest, 'types.js')

    writeToFile(targetStorePath, storeResult)
    writeToFile(targetTypePath, typeResult)
  }
}

module.exports = {
  createProjectAction,
  addCpnAction,
  addPageAndRouteAction,
  addStoreAction
}