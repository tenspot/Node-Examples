// Example of Node's Events module

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
  console.log('tutorial event has occured', num1+num2);
});

// Generate an event
eventEmitter.emit('tutorial',1,4);

// Adding event emitter to a class
class Person extends EventEmitter{
  constructor(name){
    super();
    this._name = name;
  }

  get name(){
    return this._name;
  }
}

// Instantiate Person objects
let person1 = new Person('Punch');
let person2 = new Person('Judy');

// Add listen for the person1 name event
person1.on('name', () => {
  console.log('person 1 name is: ' + person1.name);
});

// Add listen for the person2 name event
person2.on('name', () => {
  console.log('person 2 name is: ' + person2.name);
});

// Generate person name events
person1.emit('name');
person2.emit('name');

// Console output is
// person 1 name is: Punch
// person 2 name is: Judy