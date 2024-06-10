// --- Encapsulation Private Properties & Data Privacy: ---
// Properties are usually called fields in OOP Languages, hence we refer to properties as fields now
// With this, JavaScript is moving away from the idea that classes are just syntactic sugar over constructor functions
// With these new class features, classes actually start to have abilities that we didn't previously have with constructor functions

// --- Different kind of Fields & Methods
// 1. Public fields
// 2. Private Fields
// 3. Public methods
// 4. Private methods
// --- ** There is also static version of each of fields and methods in OOP **:

// Class
class Account {
  // 1) Public Fields:
  // Public fields are declared directly within the class body, either outside of any method (such as the constructor) or within the constructor itself
  // We can think of a field as a property that will be on all instances, so we can also call this a public instance field
  // As we want the local to be accessible to all the instances we set them as public fields
  locale = navigator.language;

  // 2) Private Fields:
  // Private fields are properties of a class that cannot be accessed or modified from outside the class
  // Private fields are not inherited by instances in JavaScript.
  // They are defined using a # prefix
  // We wants the movements and the pin to be private
  #movements = [];

  // As we set the input value of the pin in the constructor the situation is a bit different from movements, here we set the pin based on the input to the constructor
  // However we can't define a field in the constructor, they need to be outside any method just like creating empty variable
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // Assigning the value passed to the protected pin property now which as declared out side any method
    this.#pin = pin;

    // Greet on Creating an Account i.e creating a new Object
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods
  // Public methods are functions within a class that can be called from outside the class
  // They do not have a special prefix
  // These Methods are Interface to out Objects called APIs
  // Also called Public interface

  // Now to give access to movements from outside after making them private we need to give a public method
  getMovements() {
    return this.#movements;
  }

  // Deposit Method
  deposit(val) {
    this.#movements.push(val);
  }

  // Withdrawal Method
  withdraw(val) {
    //Pushing negative value in the movements array
    this.deposit(-val);
  }

  // Request Loan Method
  requestLoan(val) {
    // Accessing the private method inside the class only in the requestLoan method
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  // 4) Private Methods:
  // Private methods are functions within a class that cannot be called from outside the class
  // Like private fields, they are prefixed with a #
  // As we dont want anyone to access the _approveLoan method from outside we make it private making it accessible to only requestLoan method

  // Loan Approval
  #approveLoan(val) {
    return true;
  }

  // Static Methods:
  // In JavaScript, you can declare static fields and methods within a class using the static keyword. Static fields and methods are associated with the class itself rather than with instances of the class
  // This means that they are accessible directly from the class and not from instances of the class
  static helper() {
    console.log(`Helper`);
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// Using methods to Interact with Properties:
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);

// Reading Private methods using Public APIs
console.log(acc1.getMovements()); // [250, -140, 1000];

// Trying to read Private Fields
// console.log(acc1.#movements); // Cant read private fields outside the class
// console.log(acc1.#pin); // Cant read private fields outside the class
// console.log(acc1.#approveLoan(100)); // Cant read private fields outside the class

// Calling static methods
Account.helper();
// acc1.helper(); // Not accessible to the Instances of the Class
