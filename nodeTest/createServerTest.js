const fs = require('fs');
const  http = require('http')

http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHeader(200);
        res.end();
        return
    }
    res.writeHead(200);
    fs.createReadStream(`${__dirname}/testHtml.html`).pipe(res);
}).listen(3000)