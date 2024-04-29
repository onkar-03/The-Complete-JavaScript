'use strict';
// -------------- Immediately Invoked Function Expression :
// - An IIFE in JavaScript is a way to execute a function immediately after it's defined.
// - A function that is only executed once and than never again, a function that disappears right after execution
// - It's often used to create a separate scope for variables to avoid polluting the global scope and to encapsulate code.
// - We need this kind of Functions for something called async/await which we will see later

// --- Normal Function
const runOnce = function () {
  console.log('This will never run again');
};

// This can be called again whenever we wan thought the code
// - This is not what we want, we want a function to work just once after declaration and vanish
runOnce();

// --- IIFE Example :
// --- Immediately invoked function expression, wrapped inside a '()' and added another () to immediately call it
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})(); // - This will never run again

// - ReferenceError, as variable is scoped inside the function only
// - All data inside a function is encapsulated
// console.log(isPrivate);

// --- Arrow function as IIFE
(() => console.log('This will never run again'))(); // This will never run again

// --- Block Declaration
{
  const isPrivate = 23;
  var notPrivate = 46;
}

// - We know that the let and const are Block Scoped hence they cant be accessed outside
// console.log(isPrivate); // ReferenceError

// var variables completely ignore the block scope
console.log(notPrivate); // 46
