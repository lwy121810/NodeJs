const express = require('express')
const path = require('path')
const app = express()

app.get('/',(req, res) => {
  res.json({name:'李青青'})// 自动把json对象转成json格式对数据 并设置Content-type
})

// 下载
app.get('/download', (req, res) => {
  let filepath = path.join(__dirname, 'static','duola.jpeg')
  res.download(filepath)
})

app.listen(8888,()=>console.log("启动"))