// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//        setTimeout(resolve, ms, 'done'); 
//     });
// }
// timeout(2000).then((value) => {
//     console.log(value);
// });
var p1 = new Promise(
    (resolve, reject) => {
        setTimeout(() => reject(new Error("fail")), 1000)
    }
)
var p2 = new Promise(
    (resolve, reject) => {
        setTimeout(() => resolve(p1), 1000);
    }
)
p2
.then(
    (result) => console.log(result)
)
.catch(
    (error) => console.log(error)
)