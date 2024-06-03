// ---- Static MethodS ----

// --- Static Methods in Constructor Functions:

// Example: Array.from method
// Array.from method is introduced as an example of a static method
// Array.from converts array-like structures into real Arrays
// So we could not use the from method on an Array. So this is not gonna work.
//  This from method here is really attached to the entire constructor, so the Array constructor and not to the prototype property of the constructor, and so therefore all the Arrays do not inherit this method.
// Again because it's not on their prototype. It's simply attached to the constructor itself.
// We also say that the from method is in the Array name space
// And the reason for that is simply so that developers know that it is related to Arrays
console.log(Array.from(document.querySelectorAll('h1')));

// Using on an Instance of Array COnstructor
// [1, 2, 3].from(); // TypeError: [1,2,3].from is not a function

// Example: Number.parseFloat
// So this method is another static method and it's static on the number constructor. So it's not available on numbers, but only on this very constructor

// Static methods in Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Method
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

// Creating Object
const Onkar = new Person('Onkar', 2001);

// Adding a static method to the constructor function
Person.hey = function () {
  console.clear(`Hello There 👋`);

  // In the context of the constructor function, 'this' refers to the constructor function itself
  console.log(this);
};

// Calling the static method
// Method is called directly on the constructor function, not on instances
Person.hey();

// Limitations of static methods in instances:
// Static methods are not inherited by instances
// Attempting to call the static method on an instance is shown to result in an error
// Onkar.hey(); // TypeError: Onkar.hey is not a function

// --- Static methods in Classes:

// Class declaration
class PersonB {
  // Declaring a constructor inside the class, with required properties
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // These are called Instance Methods as they can be inherited by the Instances created by the class
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  // Static Method
  static hey() {
    console.clear(`Hello There 👋`);
    console.log(this);
  }
}

const David = new PersonB('David', 1998);
PersonB.hey();
