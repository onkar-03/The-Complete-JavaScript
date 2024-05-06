// --- Chaining:
// - Chaining map, filter, and reduce methods in JavaScript is a powerful technique to manipulate arrays in a concise and expressive way.
// - This chaining of methods allows for a concise and readable way to perform complex operations on arrays in JavaScript

'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);

console.log(totalDepositsUSD.toFixed(2)); // → 5522.00
