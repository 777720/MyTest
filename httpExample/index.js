const http = require('http')
const home = '127.0.0.1'
const port = 3000
const server =http.createServer((req,res) => {
  res.statusCode=200
  res.setHeader('Content-Type','text/plain')
  res.end('Hello World/n')
});
server.listen(port, home, () => {
  console.log(`服务正运行在 http://${home}:${port}`);
});
