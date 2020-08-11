const http = require('http')

// 根据请求路径分发数据
let server = http.createServer((req, resp) => {
  if (req.url.startsWith('/index')) {
    resp.end('响应index页面')
  } else if (req.url.startsWith('/detail')) {
    resp.end('响应detail页面')
  } else {
    resp.end('响应其他页面')
  }
})

server.listen(80, () => console.log('启动成功'))