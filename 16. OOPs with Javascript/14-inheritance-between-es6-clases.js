// ---- Inheritance between Classes: ES6 Classes ----

// Parent: ES6 Class
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

// Child: ES6 Class

// Define the child class StudentCL which extends PersonCL
// In Js extends is used in class syntax to set up inheritance between a parent class and a child class. This enables the child class to inherit methods and properties from the parent class
// We dont need to set the .prototype property of child to that of parent class as in constructor functions here
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Call to the super function, which is the constructor function of the parent class
    // Needs to happen first because it sets up the this keyword for the child class
    // The super function automatically calls the constructor of the parent class with the provided arguments
    // We don't need to manually call personCL or reference the parent class again in the constructor using the .call() method as before
    // It is enough to pass the arguments that the parent's constructor requires
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // Overwriting the method which is already there in the Parent Class
  // So this will now overwrite the old accelerate method of the Parent Class, as it appears first in the prototype chain
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
