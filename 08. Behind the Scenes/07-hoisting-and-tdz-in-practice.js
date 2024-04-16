'use strict';

// ------------- Variables :
console.log(me); // undefined
// console.log(job); // uninitialized
// console.log(year); // uninitialized

var me = 'Jonas'; // Hoisted with value undefined
let job = 'teacher'; // Not Hoisted and give ERROR : can't access before initialization
const year = 1991; // Not Hoisted and give ERROR : can't access before initialization

// ------------- Functions, Function Expressions & Arrow Functions :

console.log(addDecl(2, 3)); // Value: 5
// console.log(addExpr(2, 3)); // ERROR : can't access before initialization
// console.log(addArrow(2, 3)); // ERROR : addArrow is not a function

// A) Function
// Hoisted with the actual function
function addDecl(a, b) {
  return a + b;
}

// B) Function Expression
// Hoisting depends on the Type of Variable
// If its let / const then are not hoisted
// If var declaration then hoisted
const addExpr = function (a, b) {
  return a + b;
};

// C) Arrow Function
// Hoisting depends on the Type of Variable
// If its let / const then are not hoisted
// If var declaration then hoisted
// ! But var variables are hoisted with the value undefined
// ! So if we try to call the undefined variable function we get the error
// ERROR : variableName is not a function
var addArrow = (a, b) => a + b;

// Example
// - Why Not to Use var declarations ??
// - Undefined is a falsy value

if (!numProducts) deleteShoppingCard(); // - !undefined === true hence if executed
var numProducts = 10; // var variables hoisted with value undefine
function deleteShoppingCard() {
  console.log('All products deleted!'); // All products deleted!
}

// ------------- Window Objects :
// - var declarations create window object
// - let adn const declarations don't create window object

// Example :
var x = 1;
let y = 1;
const z = 1;

console.log(x === window.x); // - true  as  window object exists
console.log(y === window.y); // - false as no window object exists
console.log(z === window.z); // - false  as no window object exists
