const EventEmitter = require('events');

// make a instance/object of the EventEmitter class 
const emitter = new EventEmitter();

// listener for the event "custom-event", it will run when the "custom-event" event is fired or emitted
emitter.on('custom-event', () => {
  console.log('custom event occured');
});

// listener for the event "greeting" which recieves an argument, it will run when the "greeting" event is fired or emitted and the emitter will pass the name arguement
emitter.on('greeting', name => {
  console.log(`Hello, ${name}`);
});

// Emitter for greeting event, and name passed as "john" 
emitter.emit('greeting', 'john');
