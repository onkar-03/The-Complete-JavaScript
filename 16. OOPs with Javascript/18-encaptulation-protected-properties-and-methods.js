// --- Encapsulation & Data Privacy: ---

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // Protected Property:
    // Using '_' is a convention, but it does not make the property truly private hence we call it protected
    // So we can still manipulate it from outside but at least now the developers know that its wrong

    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    // Greet on Creating an Account i.e creating a new Object
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 1) Public methods
  // These Methods are Interface to out Objects called APIs
  // Also called Public interface

  // Show Movements
  // Now to give access to movements from outside after making them protected we need to give a public method
  // People outside can use the getMovements() method to get the protected movements, then can still use the acc1._movements() method to manipulate directly but as we said now they know its not the correct way
  getMovements() {
    return this._movements;
  }

  // Deposit Method
  deposit(val) {
    this._movements.push(val);
    return this;
  }

  // Withdrawal Method
  withdraw(val) {
    //Pushing negative value in the movements array
    this.deposit(-val);
    return this;
  }

  // Protected Method
  // Loan Approval
  _approveLoan(val) {
    return true;
  }

  // Request Loan Method
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// Using methods to Interact with Properties:
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements());
