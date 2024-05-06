// --- Map Method :
// - First the map method is yet another method that we can use to loop over arrays.
// - So, map is actually similar to the forEach method that we studied before but with the difference that map creates a brand new array based on the original array.
// -  So essentially the map method takes an array, loops over that array and in each alteration, it applies a callback function that we specify on our code to the current array element, and stores it in a new array
// -  We say that it maps the values of the original array to a new array and that's why this method is called map.
// - Also the Map method has access to all three parameters Value, Index & Array
// - We always return the value we wan th new array to have in the callback function

'use strict';

// --- Using Map:
// - Array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// --- A) Conversion to Euro to USD
const eurToUsd = 1.1;

// - Using arrow function in the callback function
const movementsToUsd = movements.map(value => {
  // - Fixed Decimal Parts to 2 places only
  let number = value * eurToUsd;
  number = number.toFixed(2);

  // - Returned the calculated value that we want the new Array to have
  return number;
});

console.log(movements);
console.log(movementsToUsd);

// --- B Using three parameters in Map Method
// - Using Arrow Function in the callback function
// - abs() remove the negative part of the value
const movementsDesc = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDesc); // - (8) [220.00, 495.00, -440.00, ...]

// --- C) Using For of Loop
const movementsUsd = [];
for (const value of movements) {
  let number = value * eurToUsd;
  number = number.toFixed(2);
  movementsUsd.push(number);
}
console.log(movementsUsd); // - (8) [220.00, 495.00, -440.00, ...]
