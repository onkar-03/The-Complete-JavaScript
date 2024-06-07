// Create the Base Prototype (`PersonProto`):
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Creating Object of Parent Class
const steven = Object.create(PersonProto);

// Inheriting Parent Class into Student Class
// We aim to establish a prototype chain where:
// - `PersonProto` serves as the base prototype, containing common methods for all person objects
// - `StudentProto` should inherit from `PersonProto`, adding specific methods and properties for student object
const StudentProto = Object.create(PersonProto);

// Create the Intermediate Prototype (`StudentProto`):
StudentProto.init = function (firstName, birthYear, course) {
  // We use the .call() method here as well to refer to the this keyword
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  // BUG:
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);

  // FIX:
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

// ### Explanation

// - Prototype Chain Establishment: By using `Object.create`, `StudentProto` is linked to `PersonProto`. Consequently, `jay` inherits from `StudentProto`, and `StudentProto` inherits from `PersonProto`. This forms a chain where `jay` can access properties and methods from both `StudentProto` and `PersonProto`.

// - Initialization Method (`init`): The `init` method in `StudentProto` calls the `init` method of `PersonProto` to set the common properties (`firstName`, `birthYear`) and then sets the `course` property specific to students.

// - Method Inheritance: The `introduce` method in `StudentProto` is specific to students, while the `calcAge` method is inherited from `PersonProto`. This shows how specific and shared methods can be distributed across the prototype chain.

// Summary:
// Using `Object.create` to establish a prototype chain in JavaScript offers a clean and straightforward way to handle inheritance. It simplifies the process by directly linking objects, avoiding the complexities associated with classes and constructor functions. This method highlights the flexibility and power of JavaScript's prototypal inheritance model, making it easier to understand and implement object-oriented concepts
