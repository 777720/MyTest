function learn(something){
  console.log(something);
}
function we(callback,something){
  something+='is Cool'
  callback(something)
}
//we(learn,'nodeJS')
we(function(something){
  console.log(something);
},'jade')
var c=0;

function print(){
  console.log(c);
}
function plus(callback){
  setTimeout(function(){
    c++;
    callback()
  },1000)
}

plus(print)
