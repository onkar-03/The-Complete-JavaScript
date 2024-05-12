'use strict';

// --- Numbers in Js:
// - Numbers are represented using 64 bits in Js, means they have 64 0's and 1's
// - Only 53 are used to store the Number rest are used to store the Decimal Point an sign of the Number

// - Biggest number that JS can represent
console.log(2 ** 53 - 1); // - 9007199254740991

// - Also saved as Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER); // - 9007199254740991

// --- bigInt():
// - BigInt is a relatively recent addition to JavaScript, introduced in ECMAScript 2020 (ES11).
// - It allows you to work with integers of arbitrary precision, overcoming the limitations of the standard JavaScript number type, which is a double-precision floating-point format and has a limited range.
// - LargeNumber followed by n represents bigInt()
// - Also the bigInt() is used to represent the number, but only for small numbers

// - n transforms a regular number into a big int number
console.log(3514935834957345345634553453418n); // - 3514935834957345345634553453418n
console.log(BigInt(3514935834957)); // - 3514935834957n

// --- Operations
// - All Operations work the same as others
// - But some operations like sqrt() wont work here with bigInt()

console.log(10000n + 10000n); // - 20000n
const huge = 1412421414124124242421421412n;
const num = 23;
console.log(huge * num);

// - TypeError: Cannot mix BigInt and other types, use explicit conversions
// - Means we cant mix the bigInt() with regular Numbers
// console.log(huge * num);

// - So we use the bigInt() Constructor to convert the regular number to bigInt ()  and then perform the necessary operations
console.log(huge * BigInt(num)); // - 32485692524854857575692692476n

// --- 2 Exceptions of bigInt() & Regular Number Usage:
// - Works fine with logical operators and + operators when working with strings (String Concatenations)

// - LOGICAL OPERATORS
console.log(20n > 15); // - true
console.log(20n === 20); // - false
console.log(typeof 20n); // - bigint
console.log(20n == 20); // - true
console.log(20n == '20'); // - true

// - STRING CONCATENATION
console.log(huge + ' is REALLY big!!!'); // - 1412421414124124242421421412 is REALLY big!!!

// --- Divisions
// - bigInt() is indeed a Number hence division works here too
// - If we have decimal part while diving bidInt() then the decimal part is cut off here
console.log(10n / 3n); // - 3n
console.log(11n / 3n); // - 3n
console.log(10 / 3); // - 3.3333333333333335
