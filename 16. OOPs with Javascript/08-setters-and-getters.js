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

  set fullName(name) {
    // If name includes a space then consider it a full name
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a Full Name !!`);
    }
  }
}

// Creating Object
const Onkar = new PersonA('Onkar Patel', 2001);

// Getter Property
console.log(Onkar.age);

console.log(Onkar);
