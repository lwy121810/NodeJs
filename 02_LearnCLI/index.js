#!/usr/bin/env node

// #!/usr/bin/env node: 在当前电脑环境中寻找node指令 
// 最后会让node执行index.js文件的内容
// #!/usr/bin/env node必须写在文件的第一行
// 同时还需要在package.json文件中配置bin（也就是命令名）
// "bin": {
//   "lwy":"index.js"  // 这里代表lwy命令执行的是index.js文件
// },
// 之后执行 npm link命令 会让bin跟我们的环境变量做一个链接
// 做完链接之后就会把lwy作为一个终端命令配置到环境变量
// 因为只有配置到环境变量 在终端输入指令的时候才能找到我们自己的命令

// 导入commander https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md
const { program } = require('commander');

const { helpOpts } = require('./lib/core/help.js')

const { createCommands } = require('./lib/core/create.js')

// 设置版本号
// 可以读取package.json文件中的版本号
// require函数导出的是一个对象 可以通过点语法取出对应的内容
program.version(require('./package.json').version);

// 定义options
helpOpts()

// 创建命令
createCommands()

program.parse(process.argv)

// 获取参数
// console.log(program.dest);