const http = require('http')
const path = require('path')
const fs = require('fs')
const mime = require('../mime.json')

// 响应json格式的数据
let server = http.createServer((req, resp) => {
  resp.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'})
  let obj = {name:'lwy', age:18}
  // json对象转为字符串
  let data = JSON.stringify(obj)
  resp.end(data)
})

server.listen(80, ()=> console.log('启动成功'))