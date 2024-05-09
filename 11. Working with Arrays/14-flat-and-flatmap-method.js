'use strict';

// --- flat() Method:
// - .flat(depth) is used to flatten a nested array by removing its nested structure.
// - It takes an optional depth parameter to specify how many levels of nesting should be flattened.
// - If no 'depth' is provided, it defaults to flattening one level of nesting
// - In short used to flatten the array

// - A) 2D Array (2levels of nesting)
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// - Flattens an array by default 1 Level only
console.log(arr.flat()); // - (8) [1, 2, 3, 4, 5, 6, 7, 8]

// - B) 3D Array (3levels of nesting)
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// - Flattens an array two levels deep
// - Here we specify 2 as we want to flatten completely
console.log(arrDeep.flat(2)); // - (8) [1, 2, 3, 4, 5, 6, 7, 8]

// - If we dont specify 2 it will flatten only one level of nesting
console.log(arrDeep.flat()); // -  [[1,2], 3, 4, [5,6], 7, 8]

const accounts = [
  {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  },
  {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  },
  {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  },
];

// - Chaining the map and flat methods is common
const overallBalance = accounts
  // - Moving all the movements array from all accounts to a single array
  .map(acc => acc.movements)
  // - Flattening all the movements arrays to a single array
  .flat()
  // - Reducing them to calculate the overall transactions across all accounts
  .reduce((accumulator, curr) => accumulator + curr, 0);
console.log(overallBalance); // - 15570

/* 
SUMMARY : 
map: [[200, 450, -400, 3000, -650, -130, 70, 1300],[5000, 3400, -150, -790, -3210, -1000, 8500, -30], [200, -200, 340, -300, -20, 50, 400, -460]]

flat:  [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460]

reduce: 15570
*/

// --- flatMap() Method:
// - The flatMap() method is combination between the map and flat methods with better performance
// - .flatMap() goes only one level deep
// - The key difference is that flatMap() is more powerful as it allows you to perform a one-to-many mapping, where each input element can be mapped to multiple output elements. This makes flatMap() particularly useful when working with nested data structures
// - In short used for both mapping and flattening arrays in a single operation

// - Flattening Array by one level
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((accumulator, curr) => accumulator + curr, 0);
console.log(overallBalance); // - 15570
