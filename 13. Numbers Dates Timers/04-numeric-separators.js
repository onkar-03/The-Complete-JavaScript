'use strict';
// --- Numeric Separators:
// - Numeric separators in JavaScript are underscores (_) that you can place within numeric literals to make them more readable.
// - They don't affect the value of the number, but they can significantly improve readability, especially for large numbers.
// -  This feature was introduced in ECMAScript 2021.
// - The underscores '_' can be placed only between numbers and not between numbers and decimals, it would lead to syntax errors
// - Also we cant place 2 continuos '_' together between numbers as well
// - They also dont work when we use them in String Numbers trying to convert them using Numbers() Function

// - Example 1: 287,460,000,000
// - Similar thing or comma can be done using the '_' numeric separator in Js
const diameter = 287_460_000_000;
console.log(diameter); // - 287460000000

// - Example 2:
const price = 346_99;
console.log(price); // - 34699

// - Example 3:
const transferFee1 = 15_00;
const transferFee2 = 1_500;

// * --- As we know we can place '_' only between numbers and not between numbers and decimals
// * --- Also we cant place 2 continuos '_' together between numbers as well
// const PI = 3._1415; // - SyntaxError
// const PI = 3.__1415; // - SyntaxError
// const PI = 3_.1415; // - SyntaxError
// const PI = _3.1415; // - SyntaxError

// * --- They also dont work when we use them in String Numbers trying to convert them using Numbers() Function
console.log(Number('230000')); // - 230000
console.log(Number('230_000')); // - NaN

// * - using parseInt()we get only Number before the numeric Separator as O/P
console.log(parseInt('230_000')); // - 230
