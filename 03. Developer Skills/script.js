// Using strict mode in all scripts now!
// Changed the default "" for all strings and scripts of Js to '' in Prettier
'use strict';

const x = 23;

// Removed the () formatting by prettier in case of single parameters in function declarations,
const calcAge = birthYear => {
  2024 - birthYear;
};

// After setting Snippets 'cl' works for console.log()
console.log(x);
