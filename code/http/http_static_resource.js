// 响应静态资源
// 根据请求路径找到对应文件，读取文件内容返回给客户端
const http = require('http')
const path = require('path')
const fs = require('fs')
const mime = require('./mime.json')

let server = http.createServer((req, resp) => {
  // 获取要访问的资源路径 一般会将文件放在一个文件夹中 方便管理
  let resource = path.join(__dirname,'static', req.url)
  // 读取对应路径的文件
  fs.readFile(resource,(err, data) => {
    if (err) {
      // 文件不存在/读取时发生错误
      console.log(err);
      // 出错了 
      // 设置响应头
      resp.writeHead(404,{'Content-Type':'text/plain;chatset=utf-8'})
      // 设置响应数据
      resp.end('访问的页面不存在')
    } else {
      // 读取到了文件内容
      // 把文件内容响应回去 设置响应数据类型
      // 通过url的后缀名来设置数据类型
      let extname = path.extname(req.url) // .html .css 等等类型
      let mimeType = mime[extname]
      if (mimeType && mimeType.startsWith('text')) {
        // 文本内容设置为utf-8编码
        mimeType += ";charset=utf-8"
      }

      // 设置响应头
      resp.writeHead(200,{'Content-Type':mimeType})
      resp.end(data)
    }
  })
})

server.listen(80,()=> {
  console.log("启动成功！");
})