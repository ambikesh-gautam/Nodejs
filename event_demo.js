const EventEmmiter = require('events');

// Create a class 
class MyEmitter extends EventEmmiter{}

// INit object 
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', ()=> console.log('Even fired'));

// Init event
myEmitter.emit('event');