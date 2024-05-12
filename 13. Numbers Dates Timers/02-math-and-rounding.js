'use strict';

// - Find the square root of a number
console.log(`Square root of 25: ${Math.sqrt(25)}`); // 5

// - Finding the square root using the exponentiation operator
console.log(`Square root of 25: ${25 ** (1 / 2)}`); // 5

// - Finding the maximum number
console.log(`Max: ${Math.max(5, 3, 18, 22, 11)}`); // - 22
console.log(`Max: ${Math.max(5, 3, 18, '22', 11)}`); // - 22
console.log(`Max: ${Math.max(5, 3, 18, '22px', 11)}`); // - NaN

// - Find the minimum number
console.log(`Min: ${Math.min(5, 3, 18, 22, 11)}`); // - 3

// - Calculate the area of a circle
// - Math.PI is a constant value of 22/7 (PIE) stored in js
console.log(`Value of PI: ${Math.PI}`); // 3.141592653589793
console.log(
  `Area of circle of radius 10px: ${(
    Math.PI *
    Number.parseFloat('10px') ** 2
  ).toFixed(2)}`
); // - 314.16

// - Generate random number using Math.random()
// - Remove decimal part using Math.trunc()
console.log(
  `Random Numbers between 1 & 6: ${Math.trunc(Math.random() * 6 + 1)}`
);

// - Generate a random number between a max and a min number
// - Math.random() generate Number between 0...1
// - Number between 0...1 * (max-min) generate number between 0 ... (max-min)
// - [0 ...(max-min)]+ min generate number between min...max
const randomInt = (min, max) => Math.trunc(Math.random() * (max - min)) + min;
console.log(`Random Number between 10 & 20: ${randomInt(10, 20)}`);

// - Rounding integers
// - All of the below methods do type coercion means that even if we write strings they are implicitly converted to numbers and then operated
console.log(`Rounding(trunc) 23.3: ${Math.round(23.3)}`); // - 23
console.log(`Rounding(trunc) 23.9: ${Math.round(23.9)}`); // - 24

// - Goes to the nearest Upper limit Number
console.log(`Rounding(ceil) 23.3: ${Math.ceil(23.3)}`); // - 24
console.log(`Rounding(ceil) 23.9: ${Math.ceil(23.9)}`); // - 24

// - Goes to the nearest Lower limit Number
console.log(`Rounding(floor) 23.3: ${Math.floor(23.3)}`); // - 23
console.log(`Rounding(floor) 23.9: ${Math.floor('23.9')}`); // - 23

// - trunc with negative numbers
console.log(`Rounding(trunc) -23.3: ${Math.trunc(-23.3)}`); // - -23

// - With negative numbers rounding works the other way around
console.log(`Rounding(floor) -23.3: ${Math.floor(-23.3)}`); // - -24
console.log(`Rounding(ceil) -23.3: ${Math.ceil(-23.3)}`); // - -23

// - Rounding decimals
// - + used to convert to numbers
console.log(+(2.7).toFixed(0)); // - "3"
console.log(+(2.7).toFixed(2)); // - "2.70"
console.log(+(2.7516).toFixed(2)); // - "2.75"
