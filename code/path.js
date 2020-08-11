const path = require('path')

// 获取当前操作系统路径分隔符
console.log(path.sep); // mac 下是 / windows下是\
// // 获取当前操作系统的环境变量分隔符 
console.log(path.delimiter); // mac下是: windows下是;

// 用于连接路径，该方法的主要用途在于会正确使用当前系统的路径分隔符
// path.join([...paths]) // 可以传递多个路径名 不要有路径分隔符 // 
console.log(path.join(__dirname, 'path.js'));// 获取当前文件路径
// 只写目录名或者文件名 不要写分隔符
console.log(path.join(__dirname, 'a','a.js'));

// ... 还有其他方法 不再举例