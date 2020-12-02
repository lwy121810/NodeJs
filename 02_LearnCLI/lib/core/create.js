/*
 * @Author: lwy
 * @Date: 2020-10-22 15:10:38
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-10-24 19:09:44
 * @FilePath: /02_LearnCLI/lib/core/create.js
 */

const { program } = require('commander');

const {
  createProjectAction,
  addCpnAction,
  addPageAndRouteAction,
  addStoreAction
} = require('./actions.js')

// 创建指令
const createCommands = () => {
  // 创建项目思路：从git上下载已经创建好的项目模板 然后放到指定文件夹中
  program
    .command('create <project> [others...]')
    .description('clone repository into a folder')
    .action(createProjectAction);

  // 添加组件的命令
  program
    .command('addcpn <name>')
    .description('创建一个组件,例如：lwy addcpn Home [-d src/components]')
    .action((name) => {
      addCpnAction(name, program.dest || 'src/components')
    });

  // 添加page和路由
  program
    .command('addpage <name>')
    .description('创建一个组件,例如：lwy addpage Home [-d src/pages]')
    .action((name) => {
      addPageAndRouteAction(name, program.dest || 'src/pages')
    });

  program
    .command('addstore <name>')
    .description('add vue store and type config, 例如: lwy addstore Home [-d src/pages]')
    .action((name) => {
      addStoreAction(name, program.dest || 'src/store/modules')
    })


}

module.exports = {
  createCommands
}