// ---- Object.Create() ----
// So far, we've explored constructor functions and ES6 classes for implementing prototypal inheritance
// However, there's a third method that utilizes a function called Object.create, which operates quite differently from the other two

// --- Key Differences with Object.create:
// With Object.create, we still follow the concept of prototypal inheritance, but there are significant differences:
// 1. prototype properties: We don't use prototype properties directly.
// 2. constructor functions: There's no need for constructor functions.
// 3. new operator: The new keyword is not involved.

// Object Literal
const personProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  greet() {
    console.log(`Hey ${this.name}`);
  },

  walk() {
    console.log(`${this.name} is walking`);
  },

  // Method just like COnstructor
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Creating Object
// The Object is linked to the personProto Object
// Explicitly mentioning that personProto is prototype of Person object
const Person = Object.create(personProto);

//Declaring Properties
Person.name = 'Onkar';
Person.birthYear = 2001;

console.log(Person);
console.log(Person.name);
console.log(Person.birthYear);
console.log(Person.greet());
console.log(Person.walk());
console.log(Person.calcAge());

// Creating Object
const David = Object.create(personProto);

// Assigning Properties using teh method declared
David.init('David', 1999);
console.log(David.calcAge());

// --- Understanding the Difference

// Constructor Functions and Classes:

// The new operator automatically sets the prototype of instances.
// The instances are linked to the constructor's prototype property.

// With Object.create:

// We manually set the prototype of an object to any specified object. The prototype chain works the same way, but without needing constructor functions or the new operator

console.log(Person.__proto__);
