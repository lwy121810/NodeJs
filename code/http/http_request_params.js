const http = require('http')
const url = require('url')
const querystring = require('querystring')

// GET 获取请求参数 获取路径上的参数
// let server = http.createServer((req, resp) => {
//   let params = url.parse(req.url, true)
//   console.log(params.query.name)
//   resp.end("GET")
// })

// server.listen(80, ()=> console.log('启动成功'))

// POST请求 参数在请求体中
let server = http.createServer((req, resp) => {
  let params = '';
  // 监听 有数据传递过来会执行该方法
  req.on('data', chunk => {
    params += chunk
  })
  req.on('end', ()=> {
    // querystring.parse 将字符串转为对象
    let obj = querystring.parse(params)
    console.log(obj.name);
  })

  resp.end('POST')

})

server.listen(80, ()=> console.log('启动成功'))