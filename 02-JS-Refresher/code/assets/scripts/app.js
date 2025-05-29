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

// 2. Revisiting Variables & Value
const userMessage = `Hello Jacob!!! It's a great day on horizon!`;
// ⬆️
// You must used let to change the value of a variable later
// userMessage = `Change the message to something else!`;

console.log(userMessage);
console.log(userMessage);

// 3. Revisiting Operators
const a = 10;
const b = 5 + 5;
if (a === b) {
  console.log('works');
}

// 4. Functions
function createGreeting(userName, message = 'Hello!') {
  console.log(userName);
  console.log(message);
  return `Hi, I am ${userName}. ${message}`;
}

const greeting1 = createGreeting('Jacob');
console.log(greeting1);
