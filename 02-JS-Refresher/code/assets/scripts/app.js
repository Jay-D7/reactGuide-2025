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
console.log('\nRevisiting Variables & Value:');
const userMessage = `Hello Jacob!!! It's a great day on horizon!`;
// ⬆️
// You must used let to change the value of a variable later
// userMessage = `Change the message to something else!`;

console.log(userMessage);
// console.log(userMessage);

//
// 3. Revisiting Operators
console.log('\nRevisiting Operators:');
const a = 10;
const b = 5 + 5;

// if (a === b) {
//   console.log('works🔥');
// } else {
//   console.log('does not work🤦🏼‍♂️');
// }

// Shortened version of the above if-else statement
// This is called a Ternary Operator

//function declaration
// function checkEquality(a, b) {
//   console.log(a === b ? 'works🔥' : 'does not work🤦🏼‍♂️');
// }

// Arrow function expression
const checkEquality = (a, b) => {
  console.log(a === b ? 'works🔥' : 'does not work🤦🏼‍♂️');
};

checkEquality(a, b);

//
// 4. Functions
console.log('\nFunctions:');
function greeting() {
  console.log('Hello There!');
}

// This is called invoking a function
greeting();
// Calling the function multiple times
for (let i = 0; i < 5; i++) {
  greeting();
}

// Function with parameters
function createGreeting(userName, message = 'W3LC0M3!') {
  // console.log(userName);
  // console.log(message);
  return `Hi, I am ${userName}⚡️. ${message}`;
}

const greeting1 = createGreeting('Jacob');
console.log(greeting1);

const greeting2 = createGreeting('Manuel', "what's up?");
console.log(greeting2);

//
// Coding Exercise 1: Working with Functions
console.log('\nCoding Exercise 1: Working with Functions:');
// const combine = (a, b, c) => {
//   let value = (a * b) / c;
//   return console.log(value);
// };

// Shortened version of the above function
const combine = (a, b, c) => console.log((a * b) / c);

combine(10, 2, 4);

//
// Arrow Functions
console.log('\nArrow Functions:');
// const add = (a, b) => {
//   return a + b;
// };

// Don't use the return keyword if you have only one line of code in the arrow function
// This is called an implicit return
const add = (a, b) => a + b;

console.log(add(5, 10));

export default (userName, message) => {
  console.log(`Hello`);
  return userName + message;
};

// Example usage:
const result = ((userName, message) => {
  console.log(`Hello`);
  return userName + message;
})('Jay-D', ' - Welcome!');

console.log(result);

//
// Revisiting Objects & Classes
console.log('\nRevisiting Objects & Classes:');

const user = {
  name: 'Jacob',
  age: 31,
  greet() {
    console.log('Greet function from User Function!');
    console.log(this.age);
  },
  greet2: function (a, b) {
    console.log('Greet2 function from Jay-D Function!');
    return console.log(a + b);
  },
};

console.log(user.name);
user.greet();
user.greet2(4, 3);

// Class syntax in JavaScript. constructor is a special method that is called when a new instance of the class is created
// Classes are a blueprint for creating objects
// They encapsulate data and behavior in a single entity
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

//
//  Arrays & Array Methods like map()
console.log('\nArrays & Array Methods:');
// Technically arrays are also objects in JavaScript but they have some special methods
const hobbies = ['Sports', 'Cooking', 'Reading'];
console.log(hobbies[0]);

// Push adds an item to the end of the array
hobbies.push('Working');
console.log(hobbies);

// Find index of an item in the array
const index = hobbies.findIndex((item) => item === 'Cooking'); // Using arrow function syntax
console.log(index);
// const index2 = hobbies.findIndex((item) => { // Using function expression syntax
//   return item === 'Reading';
// });
// console.log(index2);

// Map creates a new array by applying a function to each item in the original array
const editedHobbies = hobbies.map((item) => ({ text: item }));
// Longer version of the above code
// const editedHobbies = hobbies.map(function (item) {
//   return { text: item };
// });
console.log(editedHobbies);

// pop removes the last item from the array
hobbies.pop();
console.log(hobbies);

// Coding Exercise 2: Arrays & Array Methods
console.log('\n Coding Exercise 2: Arrays & Array Methods:');

const numberArray = [1, 2, 3];

// Function declaration (reusable)
const transformToObjects = (numberArray) => {
  return numberArray.map((item) => ({ val: item }));
};
console.log(transformToObjects(numberArray));

// Direct usage (one-time)
// Constructing an array of objects from the numberArray
const transformToArray = numberArray.map((item) => {
  return { val: item };
});
console.log(transformToArray);

//
// Destructuring Arrays & Objects
console.log('\nDestructuring Arrays & Objects:');

// Old way of extracting values from an array
// const userNameData = ['Jacob', 'Smith'];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

// New way of extracting values from an array using destructuring
const [firstName, lastName] = ['John', 'Wick'];
console.log(firstName);
console.log(lastName);

const { name: userName, age: jamesAge } = {
  name: 'James',
  age: 31,
};

console.log(userName);
console.log(jamesAge);

// Spread operator
console.log(`Spread Operator:`);

// Array spread example
const spreadHobbies = ['Sports', 'Cooking'];

// Object spread example
const spreadUserDetails = { name: 'John', age: 31 };

const newSpreadHobbies = ['reading'];

// Merging arrays using spread operator
const mergedSpreadHobbies = [...spreadHobbies, ...newSpreadHobbies];
console.log(mergedSpreadHobbies);

// Merging objects using spread operator
const extendedUser = {
  isAdmin: true,
  ...spreadUserDetails,
};

console.log(extendedUser);

// Revisiting Control Structures
console.log('\nRevisiting Control Structures:');

// const password = prompt('Please enter your password:');

// if (password === 'Hello') {
//   console.log('Correct Password!🎉');
// } else if (password === 'hello') {
//   console.log('Almost correct, but case sensitive!🤦🏼‍♂️');
// } else {
//   console.log('Wrong Password!');
// }

const hobbiesControl = ['Sports', 'Cooking'];

for (const hobby of hobbiesControl) {
  console.log(hobby);
}

// Manipulating the DOM - not with React!
console.log('\nManipulating the DOM - not with React!:');

const list = document.querySelector('ul');

const newListItem = document.createElement('li');
newListItem.textContent = 'Newly added list item';
list.append(newListItem);
//
// list.remove();

// Calculating the difference between two dates in days
console.log('calculateDaysBetweenDates function:');
function calculateDaysBetweenDates(begin, end) {
  const startDate = new Date(begin);
  const endDate = new Date(end);
  const timeDiff = endDate - startDate;
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}
// Example usage:
const days = calculateDaysBetweenDates('2023-01-01', '2023-01-31');
// console.log(`Example output calculation: ` + days + ` days`);
console.log(`Example output calculation: ${days} days`);

// Dom Manipulation
console.log('\nDom Manipulation: highlightImagesWithAlt');
// console.log(document);
// write a function to
// find all images without alternate text
// and give them a red border
const highlightImagesWithAlt = () => {
  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    if (image.alt) {
      image.style.border = '2px solid red';
    }
  });
};
highlightImagesWithAlt();
