'use strict';

// Function Scope calcAge
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  // Practice 1 :
  // - No Error
  // - As when the Engine can't find the Variable in the Function Scope it looks up in the Scope Chain
  // So in Global Scope finds the firstName
  console.log(firstName);

  // Practice 2 :
  // ERROR : 'lastName is not defined' as lastName is nowhere to be found in the Scope Chain
  // console.log(lastName);

  function printAge() {
    // Creating new variable with the same name as the outer scope
    const firstName = ' Harry';

    // Practice 4 :
    // - Child Function of calcAge
    // - Hence can access all the Parent Variables
    // - Accessed age from parent Function
    // - Accessed firstName from Current scope
    // Whenever we dont find the Variable in the current scope then we look up in the scope chain
    // As we have the firstName here defined as Harry, this is used instead of global firstName
    // Functions can have same parameters name as they are only valid inside the function
    let output = `${firstName},You are ${age} born in ${birthYear} `;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = ` Oh! you are a Millennium ${firstName}`;
      console.log(str);
    } else {
      var millenial = true;
      const str = ` Oh! you are not a Millennium ${firstName}`;
      console.log(str);

      // Reassigning already existing outer scope variable
      output = 'NEW STRING';
    }
    // Practice 5 :
    // - Trying to Print str here
    // - ERROR : str is not defined
    // - As only the Children can access the Parent Variables and Function not the other way around
    // console.log(str);

    // Practice 6 :
    // - Trying to Print the millennium
    // - No ERROR
    // - As the var variables aren't block scoped, only let and const are
    console.log(millenial);

    // Practice 7 :
    // Printing output after overwriting it using a child function
    console.log(output);
  }

  // Scope of function such as printAge() is only within the Blocks {} it was defined
  // When we use the strict mode 'use strict';
  printAge();

  return age;
}

// Global Variable
const firstName = 'Onkar';
const age = calcAge(2001);

// Practice 3 :
// Cant call print age function here
// ERROR : printAge is not defined
// As only the Children can access the Parent Variables and Function not the other way around
// printAge();
