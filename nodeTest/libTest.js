

console.log("this is lib");

const  a = function() {
    console.log('aaaa');
}

exports.test = '123'
exports.textObj = {
    a: 1
}

module.exports = a

setTimeout(() => {
    console.log(exports);
}, 1000)