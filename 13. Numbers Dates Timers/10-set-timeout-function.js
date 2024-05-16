'use strict';

// --- SetTimeout Function:
// - The setTimeout() function is used to execute a specified function once after a specified delay.
// - It takes two parameters:
// - 1. A callback function or code snippet to be executed.
// - 2. The interval, in milliseconds, between each execution of the function
// - The setTimeout() function calls the callback function on its own after a specified delay time assigned to it we cant call it from outside

// - A) Normal Case:
setTimeout(() => console.log(`Here is your Pizza 🍕`), 3000);
console.log(`Waiting !!!`);
// Output:
// Waiting !!!
// 10-timers-set-timeout-and-set-intervals.js:12 Here is your Pizza 🍕

// Process
// - When the `setTimeout()` function is encountered, it gets executed, and the timer assigned runs in the background
// - The engine starts executing the remaining lines of code immediately, without waiting for the timer to complete
// - After the specified delay (3000 milliseconds in this case), the callback function is executed
// - The callback function is moved to the execution queue by the engine
// - The JavaScript engine continuously checks the execution queue for tasks to execute
// - Finally, the callback function is executed, logging `"Here is your Pizza 🍕"` to the console

// B) Assigning Parameters to Callback Function:
setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  'olives',
  'cheese'
);

// C) Clear Timeout:
// - In JavaScript, you can use the clearTimeout() function to cancel a timeout previously established by calling setTimeout().
// - This can be useful if you want to prevent the execution of a function that was scheduled to run after a delay.
// -The clearTimeout() function takes as its argument the unique identifier returned by setTimeout() when it was called

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);

if (ingredients.includes('olives')) {
  clearTimeout(pizzaTimer);
} // Hence as the condition is true hence the pizzaTimer is not executed after 3 seconds of delay
