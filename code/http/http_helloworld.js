const http = require('http')

// 创建服务器应用 若有请求过来 那么会执行下面
let server = http.createServer((request, response)=> {
  // 设置状态码 相应数据类型 编码格式
  response.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'})
  // 设置相应数据
  response.end("青青子衿，悠悠我心。但为君故，沉吟至今。")
})

// 启动应用 监听8888端口
server.listen(8888, ()=>{
  console.log("启动成功！");
})