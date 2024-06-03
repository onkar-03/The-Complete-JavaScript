// --- Setters & Getters ---
// Every Object in Js can have Setter and Getter properties
// We call these special properties the assessor properties while the more normal properties are called data properties
//  So getters and setters are basically functions / methods that get and set a value so just as the name says, but on the outside they still look like regular properties
// Not mandatory to specify a getter if we have a setter and visa versa

// Object Literal
const account = {
  name: 'Onkar',
  movements: [199, 2000, 3000],

  // Getter Method
  // Uses the get keyword
  get latest() {
    // Taking out the last element in the array using slice() and pop() method
    return this.movements.slice(-1).pop();
  },

  // Setter Method
  // It can only have one parameter
  // Uses the set keyword
  set latest(mov) {
    //Add a new movement
    this.movements.push(mov);
  },
};

// Calling getter
console.log(account.latest);

// As we know they behave just like properties outside and not methods
// Hence we can set it like other properties
account.latest = 5000;
console.log(account);

// --- Getters & Setters with Classes ---
// Classes also have getter and setters in the exact same way, lets see them now
class PersonA {
  // Declaring a constructor inside the class, with required properties
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  // Getter
  get age() {
    return 2024 - this.birthYear;
  }

  // Setter
  // Setting a Property that already exists
  // The Setter argument name refers to the fullName property of the Constructor
  set fullName(name) {
    // LOGIC: If name includes a space then consider it a full name

    // PROBLEM:
    // Creating a new instance of Jessica with potential error
    // When trying to create 'Jessica Davis', the error "maximum call stack size exceeded" occurs. This error is cryptic, but the root cause is a conflict in property names.
    // Both the setter function and the constructor function are trying to set the same property name. This leads to recursion, causing the call stack to exceed its maximum size.

    // SOLUTION:
    // To resolve this, we need to rename the property to avoid the conflict.
    // The common convention is to use an underscore prefix for the property name in the setter. This avoids naming conflicts and prevents recursion.
    // This naming convention (using an underscore) is just a convention, not a JavaScript feature.
    // It simply ensures different variable names are used to avoid conflicts.
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a Full Name !!`);
    }
  }

  // PROBLEM:
  // When we look at 'Jessica Davis' now, we see that the property that exists is '_fullName'. This means we cannot access 'jessica.fullName' directly because it doesn't exist.

  // SOLUTION:
  // To fix this, we need to create a getter for the 'fullName' property.
  // This getter will return the '_fullName' property.
  // Let's see how this works:
  // Adding a getter method that returns 'this._fullName'.
  get fullName() {
    return this._fullName;
  }

  // Summary:
  // With this getter in place, accessing 'jessica.fullName' will now work correctly, allowing us to see the full name again.
  // The actual property stored in the object remains '_fullName', because that's how the setter function sets it.
  // We can compute this full name just as we can compute the age property.
  // This pattern is important to understand whenever we set a property that already exists to avoid conflicts and ensure proper access to the intended values.
}

// Creating Object
const Onkar = new PersonA('Onkar Patel', 2001);

// Getter Property
console.log(Onkar.age);

console.log(Onkar);
