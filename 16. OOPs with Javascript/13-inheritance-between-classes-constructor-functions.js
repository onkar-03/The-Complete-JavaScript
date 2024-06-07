// ---- Inheritance between Classes: Constructor Functions ----
// We wan to  make the Person Class the Parent of the Student Class
// Some real inheritance now between classes / constructor functions, we use the term c,asses as its easier to understand

// Person: Constructor Function
const Person = function (firstName, birthYear) {
  // Constructor Function Operations
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Adding Method to Constructor Function
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

// Student: Constructor Function
const Student = function (firstName, birthYear, course) {
  // Constructor Function Operations
  /*this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;*/

  // PROBLEM:
  // In the student constructor function, we initially duplicated code from the person constructor function.
  // This duplication violates the "don't repeat yourself" principle and can lead to maintenance issues.
  // If the implementation of the person function changes, the changes won't reflect in the student function.

  // Example of duplicated code:
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  // }

  // Instead of duplicating, we want to call the person function from within the student function. However, simply calling the person function like this won't work:
  // function Student(firstName, birthYear, course) {
  //   Person(firstName, birthYear);
  //   this.course = course;
  // }

  // This fails because calling the person function in this manner is a regular function call and in a regular function call, the 'this' keyword is undefined, leading to errors when trying to set properties using the this keyword

  // SOLUTION:
  // To call the person function correctly, we need to set the 'this' keyword to the current instance of student.
  // We achieve this using the call method, which allows us to specify 'this' explicitly.

  // Correct implementation:
  // Call the Person function, setting 'this' to the current instance of Student
  Person.call(this, firstName, birthYear);
  this.course = course;

  // By using Person.call(this, firstName, birthYear), we ensure the Person constructor function is called with 'this' correctly set to the new Student instance, allowing the properties to be assigned properly.
};

// ---- Inheritance:
// SITUATION:
// We want the Student class to inherit from the Person class
// This means that Student instances should have access to methods defined in Person's prototype, like calcAge
// By inheriting, the Student class (child) can share behavior from the Person class (parent)
// This is achieved by linking Student.prototype to Person.prototype, forming a prototype chain
// We need to set Person.prototype as the prototype of Student.prototype.
// This means Student instances will first look for methods on Student.prototype,
// and if not found, they will look up to Person.prototype.

// SOLUTION:
// We manually create this prototype chain using Object.create because Object.create allows us to create a new object with a specified prototype, which in this case is Person.prototype

// Linking
Student.prototype = Object.create(Person.prototype);

//Adding Method to Student
Student.prototype.introduce = function () {
  console.log(`Hello my Name is ${this.firstName} and I Study ${this.course}`);
};

// Creating a Student
const mike = new Student('Mike', 1997, 'CS');
console.log(mike);

// Calling Introduce
mike.introduce();

// After proper inheritance of Person Function for the Student using the Object.crate() we can now use the calcAge() function to calculate the age of students too
mike.calcAge();

console.log(mike.__proto__); // introduce() method
console.log(mike.__proto__.__proto__); // Person.prototype method: calcAge()

// Points to the Person Function but should rather point to the Student Function itself
// This happens because we set the Student.prototype using Object.create() to Person.prototype, this make it though that constructor of student is still person
console.dir(mike.__proto__.constructor);

// SOLUTION
Student.prototype.constructor = Student;

// Checking Inheritance
console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true
