// ---- Constructor Function ----
// A Constructor Function is just like a normal function, the only difference between a regular function and a constructor function is that we call the new operator
// Both Function Expression and Function Declaration work as a Constructor Function
// Arrow Functions wont work as Function Constructor

// In OOP there is a convention that constructor functions should start with a capital letter
const Person = function (firstName, birthYear) {
  console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function, because a new copy of the method is created on each new instance created using the constructor function
  // Hence if we use this method then say for 1000 objects create there will be 1000 copies of the method which is a very bad practice
  // this.calcAge = function () {
  //   return 2037 - this.birthYear;
  // };

  // Also remember the function returns the create properties implicitly at the end of the constructor
};

// Calling Constructor
const jonas = new Person('Jonas', 1991);
console.log(jonas); // → Person {firstName: 'Jonas', birthYear: 1991}

//  What happens when we call a function with the new operator ??
// ---- Method Explanation for Function Constructors & ES6 Classes  ----
// 1. A new empty object is created '{}'
// 2. The function is called and the this keyword is set to the newly created object, this = {}
// 3. The new object is linked (__proto__ property) to the constructor function's prototype property (Here: Person.prototype), this happens internally by adding the  __proto__ property to the newly create Object. Person.prototype is now the new Objects prototype denoted in the __proto__ property of the Object.
// 4. The function implicitly returns the empty object that we created {}, but at this point the Object doesn't need to be empty and this is the trick of making the constructor function work
// - IMPORTANT: This method does not apply for the (.) operator method to create Objects which we will study ahead

// Creating Multiple Instances from Person
const matilda = new Person('Matilda', 1989);
console.log(matilda);

const david = new Person('David', 1989);
console.log(david);

// Here we didn't create objects from classes because doesn't really have classes
// Rather we created, multiple Objects from a Constructor Function they have been used in Js to simulate Classes for a long time now
// Function constructors are not really a feature of the JS language, they are simply a pattern that was created by other developers.

// The instanceof operator allows us to check whether an object belongs to a certain constructor function
console.log(jonas instanceof Person); // → true
