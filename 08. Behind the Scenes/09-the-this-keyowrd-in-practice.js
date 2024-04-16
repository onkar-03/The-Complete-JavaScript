'use strict';
console.log(this); // Window object

// Normal Function
const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  // If strict mode enabled
  // For a function This is undefined
  console.log(this);
};
calcAge(2001);

// Arrow Function
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
  // This is pointing to Window Object because arrow functions do not get their own this keyword, they use the lexical this keyword
  // Here the parent is the is the lexical parent of the arrow function
  // Here the Global scope is the parent with the window object as this keyword
};
calcAgeArrow(2001);

// Method
const onkar = {
  year: 2001,
  calcAge: function () {
    console.log(this); // Points to onkar object
    console.log(2024 - this.year); // this.year : uses the year defined inside the object
  },
};

// This points to the object that calls the method
// Here the onkar object called the method hence the his points to onkar object
onkar.calcAge();

const matilda = {
  year: 2004,
};

// Method borrowing
// copying then calcAge function to matilda object from onkar object
matilda.calcAge = onkar.calcAge;
matilda.calcAge(); //  It will call the birth year of Matilda 20
// As now the matilda object calls the method hence the this keyword refers to the year declared in the matilda object

// Copying the object method to f variable similar to copying the calcAge method to matilda
const f = onkar.calcAge;

// this keyword here will be undefined
// ERROR as undefined.year does not exist
// f();
