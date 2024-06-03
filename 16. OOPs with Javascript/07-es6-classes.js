'use strict';
// --- We can declare classes via expression / declaration

// Class expression
const PersonA = class {};

// Class declaration
class PersonB {
  // Declaring a constructor inside the class, with required properties
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

// Creating Object
// The constructor gets called directly as we use the new keyword to declare the Object
const Onkar = new PersonB('Onkar', 2001);
Onkar.calcAge(); // 41

console.log(Onkar.__proto__ == PersonB.prototype); // true

// Adding Methods Manually to the Class
// What happens behind the scenes when you add a method inside the class
PersonB.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

Onkar.greet(); // Hey Onkar

// --- Things to know about classes
// 1. Classes are NOT hoisted even if they are class declarations, where as function declarations are hoisted
// 2. Classes are first-class citizens (they are treated as variables), can be passed to function an returned from functions
// 3. Classes are always executed in strict mode, even if we didn't mention it for the whole code the code of class is execute in strict mode only
