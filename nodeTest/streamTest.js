const fs = require('fs');
const http = require('http');
const path = require('path');


const readStream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));
const writeStream = fs.createWriteStream(path.resolve(__dirname, `${new Date().toTimeString()}.txt`));

readStream.pipe(writeStream);


