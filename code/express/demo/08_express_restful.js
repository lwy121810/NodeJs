const express = require('express')

const app = express()

app.get('/user/:id', (req, res) => {
  console.log(req.params);
  // { id: '1000' }
  res.send('GET')
})

app.listen(8888,()=>console.log("启动成功！"))