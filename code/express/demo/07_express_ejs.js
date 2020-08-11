const express = require('express')
const path = require('path')
const app = express()

// ejs中使用模版引擎
//1.设置模版文件位置
app.set('views', path.join(__dirname, 'views'))
// 设置使用模版引擎或者技术(这里使用ejs)
app.set('view engine', 'ejs')

app.get('/a', (req, res) => {
  res.render('books',{books:['西游记','三国演义','红楼梦','水浒传']})
})

app.listen(8888,()=>console.log("启动成功！"))