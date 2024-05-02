'use strict';

// ----------- What are Arrays ?? :
// - Firstly lets think why arrays have methods ??
// - Well Methods are simply functions that we can call on objects, so basically they are functions attached to Objects
// - If we have Array Methods that means Arrays are also Objects, so basically array methods are functions attached to all Arrays that wee create in Js

// ----------- Simple Array Methods :

// --- 1) .slice() :
// - The slice method is used to extract a section of an array and returns a new array
// - It does not mutate the original array
// - It takes two parameters: the start index (inclusive) and the end index (exclusive) of the section you want to extract, negative index means that we start the index number from the end of the array

let arr1 = ['a', 'b', 'c', 'd', 'e'];

console.log(arr1.slice(2)); // c d e
console.log(arr1.slice(0, 2)); // a b
console.log(arr1.slice(-1)); // f
console.log(arr1.slice(-2)); // d e
console.log(arr1.slice(1, -2)); // b c

// - No parameters passed mans the whole array is printed
console.log(arr1.slice()); // a b c d e

// --- 2) .splice() :
// - splice can both remove and add elements to an array, thus modifying it in place. .
// - It does mutate the original array
// - It takes two parameters: the 'startIndex' & 'deleteCount' which is the number of elements you wan to remove from the original array starting from the startIndex, negative index means that we start the index number from the end of the array
// - Basically it removes the specified segment from the original array

// - removing the last element of the original array
let arr2 = ['a', 'b', 'c', 'd', 'e'];
arr2.splice(-1); // remove e the last element
console.log(arr2); // a b c d

// - removing 2 elements from the start index mentioned
console.log(arr2.splice(1, 2)); // remove b & c
console.log(arr2); // a d

// --- 3) .reverse() :
// - This method is used to reverse the order of elements in an array.
// - It modifies the original array in place and returns the reversed array.
let arr3 = ['i', 'h', 'g', 'f', 'e'];
console.log(arr3.reverse()); // e f g h i

// --- 4) .concat() :
// - concat() method is used to merge two or more arrays, creating a new array with the combined elements of the arrays being concatenated.
// - It does not modify the original arrays.
let letters = arr1.concat(arr3);
console.log(letters);

// --- 5) join() :
// - Thi method is used to join all elements of an array into a single string.
// - It concatenates the elements of the array, separating each element with a specified separator string.
// - If no separator is provided, a comma (,) is used by default.
console.log(letters.join('-'));
