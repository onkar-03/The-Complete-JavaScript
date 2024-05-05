// --- Reduce Method:
// - Reduce method which we use to boil down all the elements of the original array into one single value.
// - It also has a callback function as an argument
// - But unlike the map() / filter() the parameters of the callback are not (Value,Index,Array) rather its (Accumulator,Value,Index,Array)
// - An example of this can be to add all the elements of an array together.
// - Now it's this value that then actually gets returned from the reduce method in the end. So there is no new array in this case but only the reduced value.
// - So you can imagine this as a snowball, it keeps getting bigger and bigger as it rolls down a hill. And so this is known as the snowball effect and reduce is pretty similar to that, okay? So keep that in mind as a nice analogy.
// - It also Returns a value at the end of the method execution, and if nothing is returned undefined is displayed in console

'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// --- Using Reduce Method
// - accumulator -> SNOWBALL
// - 0 is the reset value of the accumulator after each iteration
const balance = movements.reduce(function (acc, value, index, arr) {
  console.log(`Iteration ${index}: ${acc}`);
  return acc + value;
}, 0);
console.log(balance); // - 3840

// --- Using for of loop
// - external var required like balance2 for for loop
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2); // - 3840

// --- Get maximum value
const maxValue = movements.reduce((acc, curr) => (acc < curr ? curr : acc), 0);
console.log(maxValue); // - 3000
