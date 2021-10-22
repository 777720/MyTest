
   
onmessage = function(e) {
    console.log('Worker: Message received from main script', e, e.data === 'start');
    if (e.data === 'start') {
      const res = fibnact(120)
      console.log('res', res);
      postMessage(res)
    }
}

const fibnact = (n) => {
  if(n <= 2) {
      return 1
  }
  return fibnact(n-2) + fibnact(n-1)
}

