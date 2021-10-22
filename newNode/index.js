// const canadianDollar = 0.91;

// function roundTwo(amount) {
//     return Math.round(amount * 100)  / 100;
// }

// exports.canadianToUs = canadian => roundTwo(canadian * canadianDollar);
// exports.USToCanadian = (us) => roundTwo(us / canadianDollar) 




setImmediate(() => {
    console.log('setImmediate');
})
setTimeout(() => {
    console.log('setTimeout');
})


process.nextTick(() => {
    console.log('process')
})