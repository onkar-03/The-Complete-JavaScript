'use strict';

// ------ The .at() Method :
// - There is a very simple array method introduced in ES2022
// - .at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.
// -  Negative integers count back from the last item in the array
// - It also work with Strings a well

let arr = [23, 56, 79];

// accessing element of array
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// - Fetch the last element of the array
console.log(arr[arr.length - 1]); // 79
console.log(arr.slice(-1)); // 79
console.log(arr.at(-1)); // 79

// - Using .at() method with strings
console.log('Onkar'.at(0)); // O
console.log('Onkar'.at(-1)); // r
