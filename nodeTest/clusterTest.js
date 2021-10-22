const   cluster  = require('cluster');
const http = require('http');

const cpuNum  = require('os').cpus().length;



if (cluster.isMaster) {
    console.log(`Master进程启动了 ${process.pid}`);

    for (let i = 0; i < cpuNum; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} 已退出`) 
    })
} else {
    http.createServer((res, req) => {
        res.end(`你好世界 ${process.pid}`)
        
    }).listen(8000)
    console.log(`Worker 进程 ${process.pid} 已启动`)
}