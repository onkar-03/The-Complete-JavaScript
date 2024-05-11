'use strict';

// --- Numbers in Js:
// - 1. In JavaScript all numbers are represented internally as floating point numbers
console.log(23 === 23.0); // true

// - 2. Base 10:
// - Numbers from 0 - 9 are considered as Base 10 Numbers
// - Fractions like 3/10 are infinite fraction in Base 10 = 3.33333...

// - 3. Binary base 2:
// - It consists of numbers only 0 & 1
// - Here the fractions such as .1 are very difficult to represent because of which the final result we get is very weird
// - Javascript tries to mask the fractions behind the scenes but certain conditions cant be masked like this one
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// - Hence Js cant be used to do very precise scientific / financial calculations as such

// --- Conversion:
// - A) Converting String to Numbers using Number() function:
console.log(Number('23')); // 23

// - B) Converting Numbers to Strings using +:
// - Her eas we use the + before the string the Js does 'type coercion' which converts all of the operands to Numbers before operations
console.log(+'23'); // 23

// --- Parsing:
// - Parsing in JavaScript typically refers to the process of converting a string into a different data type or format
// - The Number() function is also an Object as all function are Object
// - This Number() function has various methods of parsing a string with it, it tries to remove all the unnecessary symbols & spaces other than numbers
// - Can be very helpful where we wan tto get rid of units while taking it from say CSS
// - But for them to work the String must start with a number only

// - parseInt():
// - Used to Represent only the Integer value of a number
// - Takes in 2 Arguments String & Radix (Base of Number System we are using)
// - If we use Base 10 then 10 is the radix, if we use Binary then 2 is the Radix
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e30px', 10)); // NaN

// - parseFloat():
// - best Method to read Values from say CSS
// - Used to Represent the Floating value of a number as well
// - Takes in 2 Arguments String & Radix (Base of Number System we are using)
console.log(Number.parseFloat('30px', 10)); // 30 (As no decimals to read)
console.log(Number.parseFloat(' 2.5px', 10)); // 2.5

// - Using them Globally
// - But its the Old way of doing it, nowadays its advised to use the Number.parseFloat() / Number.parseInt() instead
console.log(parseFloat(' 2.5px', 10)); // 2.5
console.log(parseInt('23px)')); // 23

// --- Check if value is NaN (Not a Number):
// - .isNaN() function is used to determine whether a value is NaN (Not-a-Number).
// - It takes a single argument
// - Returns true is its not a Number otherwise returns false
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false

// --- Check if a value is a Number / Finite:
// - Best ay to Check if its a Number / Not
// - .isFinite() is used to determine whether a value is a finite number.
// - It returns true if the value is a finite number, and false otherwise
console.log(Number.isFinite(20)); // true;
console.log(Number.isFinite('20')); // false;
console.log(Number.isFinite(+'20X')); // false;
console.log(Number.isFinite(23 / 0)); // false;

// --- Check if value is an Integer
// -  is used to determine whether a given value is an integer or not.
// - It was introduced in ECMAScript 6 (ES6).
// - It returns true if the value is an integer, and false otherwise.
console.log(Number.isInteger(23)); // true;
console.log(Number.isInteger(23.0)); // false;
console.log(Number.isInteger(23 / 0)); // false;
