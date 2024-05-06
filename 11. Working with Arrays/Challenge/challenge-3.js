/* Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4] */

'use strict';

function calcAverageHumanAge(ages) {
  // - Calculating Human Age
  return ages
    .map(age => (age < 2 ? age * 2 : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, age, index, arr) => acc + age / arr.length, 0)
    .toFixed(2);
}

console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
