// --- B) Filter Method:
// - It iterates over the entire array same as forEach() an map()
// - It also has the access to the Value, Index and the entire Array on each iteration
// - Next up we have the filter method, which as the name says, is used to filter for elements in the original array which satisfy a certain condition.
// - So all the elements that pass the test that we specified will make it into a new filtered array.
// - So essentially the filter method takes an array, loops over that array and in each alteration, it applies a callback function that we specify on our code to the current array element, and if the element for which the condition is true will be included in a new array that the filter method returns, and the rest will get filtered out so they will not be included in the new array.

'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// --- A) Using filter method
// - Deposits
// - New Array deposits created
const deposits = movements.filter(mov => mov > 0);
console.log(deposits); // - (5) [200, 450, 3000, 70, 1300]

// - Withdrawals
// - New Array withdrawals created
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); // - (3) [-400, -650, -130]

// --- B) Using for of loop
// - Deposits
const depositsFor = [];
for (const mov of movements) {
  mov > 0 && depositsFor.push(mov);
}
console.log(depositsFor); // - (5) [200, 450, 3000, 70, 1300]

// - Withdrawals
const withdrawalsFor = [];
for (const mov of movements) {
  mov < 0 && withdrawalsFor.push(mov);
}

console.log(withdrawalsFor); // (3) [-400, -650, -130]
