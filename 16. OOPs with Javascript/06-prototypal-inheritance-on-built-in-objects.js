const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);

// Prototype Chain Practical Eg:
console.log(jonas.__proto__); // Jonas.prototype === Person.prototype
console.log(jonas.__proto__.__proto__); //  Person.prototype === Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // Object.prototype === null

// --- Arrays: ---
const arr = [7, 5, 1, 5, 7, 5]; // new Array === [] method for array declaration

// Array.prototype has all the methods we have studied, inherited by all arrays that we declare
console.log(arr.__proto__);

// Hence the proto property of arrays defined point to the Array.prototype
console.log(arr.__proto__ === Array.prototype); // true

// All prototypes are objects that's why the array prototype has an object prototype linked to it
console.log(arr.__proto__.__proto__); // Object.prototype === Array.prototype

// In JavaScript, arrays are objects, where the position of a value in the array (its numerical index) is its key.
// They also have their own array prototype, which has various methods and properties that normal objects don't have, such as push and pop, length, indexOf, etc
console.log(arr instanceof Object); // true means arrays are objects

// --- Extending Prototype of Built in Objects ----
// It's not a good idea to extend the prototype of a build in object
// Creating our own function called unique in Array.prototype which can now be used by all the arrays we declare
// Added new method to Prototype property of Arrays Constructor
Array.prototype.unique = function () {
  // To get the Unique values we convert the Arrays to a Set which can only have distinct values
  // The this keyword will point to the array that the method has been called on
  return [...new Set(this)];
};

console.log(arr.unique()); // [5, 1, 7]

// --- Why to not practice Extending Prototype of Objects ??
// First reason is that the next version of JavaScript might add a method with the same name that we are adding, for example this one here, but it might work in a different way. And so your code will then use that new method which, remember, works differently. And then that will probably break your code.
// Second reason why you shouldn't do this is because when you work on a team of developers, then this is really gonna be a bad idea because if multiple developers implement the same method with a different name then that's just going to create so many bugs

// All DOM elements are behind the scenes Objects
// Looking at the Prototype chain of DOM elements
const h1 = document.querySelector('h1');

// To look at the Object we do .dir
console.dir(h1);

// We can look at the Prototype chain which goes as:
// HTMLHeadingElement >> HTMLElement() >> Element() >> Node() >> EventTarget >> Object
