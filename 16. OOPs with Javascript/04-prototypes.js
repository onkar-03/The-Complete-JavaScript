// Each and every function in JS automatically has a property called prototype.
// Every object that is created by a certain constructor function will get access to all the methods and properties that we define on the constructor prototype property

// Object
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// --- Using the .prototype Property of constructor function ---

// --- Define:
// In JavaScript, the prototype property of a constructor function plays a crucial role in the inheritance and method sharing mechanism for objects created by that constructor
// The prototype property of a constructor function is an object
// Any properties or methods added to this prototype object will be shared by all instances created by the constructor

// --- Instance Inheritance:
// When a new object is created using the new keyword with a constructor function, the new object’s internal [[Prototype]] (also accessible via __proto__) is set to the constructor’s prototype object
// This means that all instances inherit methods and properties from the constructor’s prototype

// --- Memory Efficient:
// Since all instances share the same prototype object, methods and properties defined on the prototype are not duplicated across each instance, saving memory

// With prototype only one instance of calcAge is created and shared between all instances created using the Constructor Function
Person.prototype.calcAge = function () {
  return 2024 - this.birthYear;
};
// .prototype is an object property

const onkar = new Person('onkar', 2001);
const matilda = new Person('Matilda', 1989);

// The this keyword is set to the Object that is calling the Method
console.log(onkar.calcAge()); // 23
console.log(matilda.calcAge()); // 35

console.log(onkar); // Person {firstName: 'onkar', birthYear: 2001}

// The .__proto__ property in JavaScript is a reference to the Prototype Object / Constructor Function from which the current object has inherited
console.log(onkar.__proto__); // {calcAge: ƒ}
console.log(onkar.__proto__ === Person.prototype); // true

// Person.prototype.constructor pOints to the Person itself
// console.dir used tio view Objects
console.dir(onkar.__proto__.constructor); // points to the constructor function   Object

// Person.prototype is not the prototype of Person, it is what is going to be used as the prototype of all the objects that are created with the Person constructor function
// .prototype should've been named .prototypeOfLinkedObjects to be more clear and not get confused
console.log(Person.prototype.isPrototypeOf(onkar)); // true

// We can also set properties to the prototype
// Now all the Instances of Person will have the species property in them, inside the prototype which can be accessed using the .__proto__
Person.prototype.species = 'Homo Sapiens';

console.log(onkar.species); // Homo Sapiens
console.log(onkar.__proto__); // {calcAge: ƒ, species: 'Homo Sapiens', constructor: ƒ}

// species property is not directly in the object, so it's not it's own property
// We can check using the .hasOwnProperty method to know if its really contained within the Object or not
// Means the Object has simply access to the species property coz of its prototype, which is linked to the prototype of Person Constructor Function
console.log(onkar.hasOwnProperty('firstName')); // true
console.log(onkar.hasOwnProperty('species')); // false
