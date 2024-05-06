// --- The Find Method:
// - It also Loops over the entire array like the map(), filter() and reduce()
// - It also has a callback function that
// - It retrieves an Element from the array
// - It only returns the FIrst element that satisfies the condition form the Array
// - It does not return any array
'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// - Finding the First withdrawal Amount
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal); // -400;

// - Array of Objects
const accounts = [
  { name: 'Peter', accountID: 723556781012 },
  { name: 'Linus', accountID: 126528791369 },
  { name: 'John', accountID: 220356081771 },
  { name: 'William', accountID: 901240187955 },
];

// - Finding account named John
const account = accounts.find(({ name }) => name === 'John');
console.log(account); // - {name: 'John', accountID: 220356081771}
