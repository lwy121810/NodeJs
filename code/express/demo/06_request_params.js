const express = require('express')

const app = express()

// 使用中间件 如果提交数据时是表单类型的 需要使用该中间件 将请求参数封装到body中
// 若请求头的Content-type是application/x-www-form-urlencoded
// 它会解析请求体的请求参数 封装到req的body中
app.use(express.urlencoded())

// 若请求头的Content-type是application/json 
// 它会解析请求体的请求参数 封装到req的body中 (对应postman中raw中请求参数)
app.use(express.json())

// req.query: 获取URL的查询参数串 ?username=lwy&age=18
// req.params: 获取路径的参数 /user/1
app.get('/a',(req, res) => {
  console.log(req.ip);
  console.log(req.query);
  res.send("get")
})

app.post('/b', (req, res) => {
  console.log(req.body);
  res.send('POST')
})


app.post('/c', (req, res) => {
  console.log(req.body);
  res.send('POST c')
})

app.listen(8888,()=>console.log("启动"))