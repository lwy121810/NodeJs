const http = require('http')
const path = require('path')
const ejs = require('ejs')

let server = http.createServer((req, resp) => {
  let filename = path.join(__dirname, 'views','books.ejs')
  let data = {books:['红楼梦','三国演义','水浒传','西游记']}
  ejs.renderFile(filename, data, (err, str) => {
    if(err) {
      console.error(err);
    } else {
      resp.writeHead(200, {'Content-Type':'text/html;chartset=utf-8'})
      resp.end(str)
    }
  })
})

server.listen(80, ()=> console.log('启动'))