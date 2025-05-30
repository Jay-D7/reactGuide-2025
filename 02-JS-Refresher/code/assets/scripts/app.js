// 1. "Import" & "Export"
import { apiKey, abc as content } from './util.js';
// import { apiKey } from './util.js';
// import apiKey from './util.js';

// import { apiKey, abc } from './util.js';
// import * as util from './util.js';

// console.log(util.apiKey);
// console.log(abc);
console.log(apiKey);
console.log(content);

//
// 2. Revisiting Variables & Value
const userMessage = `Hello Jacob!!! It's a great day on horizon!`;
// ⬆️
// You must used let to change the value of a variable later
// userMessage = `Change the message to something else!`;

console.log(userMessage);
// console.log(userMessage);

//
// 3. Revisiting Operators
const a = 10;
const b = 5 + 5;
if (a === b) {
  console.log('works');
}

//
// 4. Functions
function greet() {
  console.log('Hello There!');
}

greet();

function createGreeting(userName, message = 'Hello!') {
  //   console.log(userName);
  //   console.log(message);
  return `Hi, I am ${userName}. ${message}`;
}

const greeting1 = createGreeting('Jacob');
console.log(greeting1);

const greeting2 = createGreeting('Manuel', "Hello, what's up?");
console.log(greeting2);

//
// Coding Exercise 1: Exercise: Working with Functions
const combine = (a, b, c) => {
  let value = (a * b) / c;
  return console.log(value);
};

combine(10, 2, 4);

//
// Arrow Functions
// const add = (a, b) => a + b;
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 10));

export default (userName, message) => {
  console.log(`Hello`);
  return userName + message;
};

//
// Revisiting Objects & Classes
const user = {
  name: 'Jacob',
  age: 31,
  greet() {
    console.log('Greet function from User Function!');
    console.log(this.age);
  },
};

console.log(user.name);
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hi from class User!');
  }
}

const user1 = new User('Janice', 39);
console.log(user1);
user1.greet();
