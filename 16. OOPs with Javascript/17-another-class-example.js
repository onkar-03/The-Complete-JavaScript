class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;

    // We can also create properties which are not given as inputs, like this
    this.movements = [];
    this.locale = navigator.language;

    // Greet on Creating an Account i.e creating a new Object
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 1) Public methods
  // These Methods are Interface to out Objects called APIs
  // Also called Public interface

  // Show Movements
  getMovements() {
    return this.movements;
  }

  // Deposit Method
  deposit(val) {
    this.movements.push(val);
    return this;
  }

  // Withdrawal Method
  withdraw(val) {
    //Pushing negative value in the movements array
    this.deposit(-val);
    return this;
  }

  // Loan Approval
  approveLoan(val) {
    return true;
  }

  // Request Loan Method
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// --- Pushing Movements into account:
// Its not the best idea to interact with properties like this instead we should use methods to interact with properties

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

// Using methods to Interact with Properties:
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

// PROBLEM:

// 1) Despite having methods to interact with the `movements` array
// nothing currently prevents someone on the team from directly accessing and modifying the `movements` array, which can lead to bugs
acc1.movements.push(100); // Example of direct access that can cause issues

// 2) The same issue exists for the `pin` property.
// It's currently possible to access and modify the `pin` from outside the class.

console.log(acc1.pin); // Example of accessing `pin` directly

// Ideally, the `pin` should be private and not accessible from outside the class.
// However, at the moment, it is still accessible.

acc1.pin = 1234; // This should not be allowed for security reasons

// 3) Despite having the `approveLoan` method to handle loan approvals, there's nothing currently stopping someone on the team from calling this method directly.
// This could potentially lead to loans being approved without the necessary checks.

acc1.approveLoan(1000); // Example of direct method call that can approve a loan without proper validation

// Ideally, the loan approval process should be restricted and controlled, and only accessible to requestLoan( )method ensuring that all necessary checks and validations are performed before approving a loan
// However, as it stands, this method can be called directly from outside the class, bypassing any intended security or business logic.

// CONCLUSION:
// This concern is real and important because it can lead to serious security vulnerabilities and business logic errors if loans are approved without the correct checks and balances
// This concern is both real and important.  Allowing direct access to sensitive properties can lead to serious security vulnerabilities and bugs
// Basically just to justify that we really need data encapsulation and data privacy
