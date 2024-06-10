// ---- Chaining Methods: ----
// Do you remember how we chained array methods one after another, for example filter, map, and reduce?
// So by chaining these methods, we could first filter an array, then map the result, and finally reduce the results of the map, all in one line of code
// And we can actually implement the same ability of chaining methods in the methods of our class
//  So all we have to do is to return the object itself at the end of a method that we want to be chainable

// --- What if we dont return the this on chainable methods ??
// The deposit method does return undefined because we're not returning anything explicitly here.
// So all we have to do is return... this. Because this is of course, the current object
//  And so then undefined gets returned. And so then here, in this next one, we are trying to call the deposit method on undefined which is the result of all this

// --- So returning this will essentially make the method chainable. And this makes most sense, in methods that actually set some property ---
// Class
class Account {
  // 1) Public Fields: fields
  locale = navigator.language;

  // 2) Private Fields:
  // Private Movements array
  #movements = [];

  // Declaring Private pin var
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // Assigning the value passed to the protected pin property now which as declared out side any method
    this.#pin = pin;

    // Greet on Creating an Account i.e creating a new Object
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public Methods:
  // Now to give access to movements from outside after making them private we need to give a public method
  getMovements() {
    return this.#movements;
  }

  // Deposit Method
  deposit(val) {
    this.#movements.push(val);

    // If we dont return anything then undefined is returned by default, which makes no sense while chaining methods
    // Hence we return the Current Object, which is to be used while chaining
    return this;
  }

  // Withdrawal Method
  withdraw(val) {
    //Pushing negative value in the movements array
    this.deposit(-val);

    // If we dont return anything then undefined is returned by default, which makes no sense while chaining methods
    // Hence we return the Current Object, which is to be used while chaining
    return this;
  }

  // Request Loan Method
  requestLoan(val) {
    // Accessing the private method inside the class only in the requestLoan method
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);

      // If we dont return anything then undefined is returned by default, which makes no sense while chaining methods
      // Hence we return the Current Object, which is to be used while chaining
      return this;
    }
  }

  // Private Methods:
  // Loan Approval
  #approveLoan(val) {
    return true;
  }

  // Static Methods:
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

// Chaining Methods
acc1.deposit(250).deposit(200).withdraw(140).requestLoan(2500).withdraw(400);

// Watch the movements we did
console.log(acc1.getMovements());
