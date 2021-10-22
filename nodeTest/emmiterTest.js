const EventEmitter = require('events').EventEmitter;


const emitter = new EventEmitter();


emitter.on('getUp', (date) => {
    console.log(`getuop--${date}`)
})

emitter.emit('getUp', '6:00')