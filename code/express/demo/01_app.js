const express = require('express')

// 创建一个web应用
const app = express()
// get请求
app.get('/',(req, resp) => {
  // 响应数据
  resp.send('Hello Express')
})
app.post('/',(req, resp) => {
  resp.send('Hello Express Post')
})
app.listen(8888, ()=>console.log("启动"))


