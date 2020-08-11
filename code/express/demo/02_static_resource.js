const express = require('express')
const path = require('path')

const app = express()

// 响应静态资源
app.use('/static', express.static(path.join(__dirname, 'static')))

app.listen(8888, ()=>console.log("启动express"))