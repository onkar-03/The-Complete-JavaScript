// --- Encapsulation Protected Properties & Data Privacy: ---
// Encapsulation is about keeping certain properties and methods private within a class, ensuring they're not accessible from outside the class. The remaining methods are exposed as the public interface or API, crucial for anything beyond a basic application.

// Two primary reasons drive the need for encapsulation and data privacy:
// 1) Firstly, it prevents external code from accidentally altering or accessing internal data. This also underscores the importance of implementing a public interface, directing external interactions
// 2) Secondly, by exposing only a limited interface, we can confidently modify internal methods, knowing external code isn't reliant on them, thus preventing potential code breakage during internal changes.

// While JavaScript classes lack built-in support for true data privacy and encapsulation, a proposal exists to introduce private class fields and methods. However, until this feature is fully realized, developers can simulate encapsulation using conventions

// The convention is to use '_' (underscore) in front of property names to signify that they are protected properties and should not be accessed and manipulated from outside

// Class
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
  }

  // Withdrawal Method
  withdraw(val) {
    //Pushing negative value in the movements array
    this.deposit(-val);
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
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// Using methods to Interact with Properties:
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements());
