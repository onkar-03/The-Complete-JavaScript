'use strict';

// -Array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// - .includes() checks only for equality
// - EQUALITY
console.log(movements.includes(-130)); // - true

// --- SOME Method
// - The some method tests whether at least one element in the array passes the test implemented by the provided callback function.
// - It returns true if at least one element in the array passes the test, otherwise, it returns false.
// - The callback function takes three arguments: element, index (optional), and array
// - .some() checks for a certain condition

//  - CONDITION
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); // - true

// --- EVERY Method :
// - The every method tests whether all elements in the array pass the test implemented by the provided callback function.
// - It returns true if all elements in the array pass the test, otherwise, it returns false.
// - The callback function takes three arguments: element, index (optional), and array (optional).
// - .every() checks for a certain condition

// - CONDITION
console.log(movements.every(mov => mov > 0)); // - false

// - Separate callback
// - Here we wrote the function logic separately and then used them inside the some() callback function
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // - true
