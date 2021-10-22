
   
// const first = document.querySelector('#number1');
// const second = document.querySelector('#number2');

// const result = document.querySelector('.result');



// if (window.Worker) {
//     const myWorker = new Worker("./webwork.js");

//     myWorker.postMessage('start');


//     myWorker.onmessage = function(e) {
//         console.log('Message received from worker', e);
//     }
//   } else {
//     console.log('Your browser doesn\'t support web workers.');
//   }


import { fromEvent } from  'rxjs';
import { map, takeUntil, switchMap } from 'rxjs/operators'



const ball = document.getElementById('ball');
const getMouseEventPos = (event) => {
  console.log(event);
  return {
    x: event.clientX,
    y: event.clientY
  }
}
const $mousedown = fromEvent(ball, 'mousedown').pipe(
  map(getMouseEventPos)
)

const $mousemove = fromEvent(document, 'mousemove').pipe(
  map(getMouseEventPos)
)


const $mouseup = fromEvent(document, 'mouseup')


const $drag = $mousedown.pipe(
  switchMap((initPos) => {
    const { top, left } = ball.getBoundingClientRect();
    return $mousemove.pipe(
      map(({ x, y }) => (
        {
          top: y - initPos.y + top,
          left: x - initPos.x + left
        }
      )),
      takeUntil($mouseup)
    )
  })
)


$drag.subscribe(({top, left}) => {
  console.log('rop', top, left);
  ball.style.top = `${top}px`;
  ball.style.left = `${left}px`;
  ball.style.bottom = '';
  ball.style.right = '';
})


