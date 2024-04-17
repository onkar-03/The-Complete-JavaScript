'use strict';
// ---------- IMPORTANT :
// 1) Never use the Arrow Functions as methods

// - If we use var declaration this.firstName will print "Matilda" and this is one more reason not to use var
// Arrow function this points to the parent which in this case is global Scope where this points to the Window object
// As var declarations are defined in Window object var firstName is also defined there
// So this.firstName from Window will be Matilda
// var firstName = 'Matilda';

// View the Window Object
console.log(this);

let firstName = 'Matilda';

// --------- Object
const onkar = {
  firstName: 'onkar',
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);

    // Solution 1 : Preserving the this keyword to be used in some normal function call
    // const self = this; // stores the this of the object onkar
    // const isMillenial = function () {
    //   // Undefined this keyword here
    //   // console.log(this.year >= 1981 && this.year <= 2001);

    //   // As we preserved the this keyword in a variable not the this of onkar object can be accessed
    //   // Self not defined in current scope so engine looks up the chain and finds it in the parent scope
    //   console.log(self.year >= 1981 && self.year <= 2001);
    // };

    // Solution 2 using Arrow Function
    // As the arrow function does not have this keyword
    // So using them automatically refers to the this of the parent
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 2001);
    };

    // Calling without preserving this keyword or using arrow function gives error
    // ERROR : As it's a regular function call
    // Even if its inside a method it still is a regular function call
    // hence the this = undefined and gives us error
    // Clear rule that his keyword called by regular function call gives undefined
    // Calling after preserving the this keyword in another variable gives no error
    isMillenial();
  },

  // --------- Arrow Function
  // - You should never use arrow functions as methods
  // - As the arrow function dont have their own this keyword
  // - this.firstName will check automatically on the parent scope which is this.firstName in the Window Object Globally
  greet: () => console.log(`Hey ${this.firstName}`),
};

// Remember the Object Block is not considered a Code block, its and Object Literal
// Hence the Parent is the Global Scope where the this.firstName keyword is undefined
onkar.greet();
onkar.calcAge();

// --------- arguments keyword :
const addExpr = function (a, b) {
  // arguments keyword used to view the parameters of function
  console.log(arguments);
  return a + b;
};

// Passing arguments
addExpr(2, 5);

// Completely legal to pass more than the specified arguments
// they wont have a name but we can see how many arguments were passed
addExpr(2, 5, 5, 6, 7);

var addArrow = (a, b) => {
  // arguments keyword is only available in arrow functions
  // console.log(arguments);
  return a + b;
};

// As arguments keyword isn't defined for arrow function we get an ERROR
addArrow(2, 5, 8);
