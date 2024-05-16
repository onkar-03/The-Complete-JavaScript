'use strict';

// --- A) SetInterval Function:
// - The setInterval() function is used to repeatedly execute a specified function at specified intervals.
// - It also takes two parameters:
// - 1. A callback function or code snippet to be executed.
// - 2. The interval, in milliseconds, between each execution of the function
setInterval(function () {
  const date = new Date();
  console.log(date);
}, 1000);

// Process
// - The `setInterval()` function is called with a callback function that logs the current date to the console every 1000 milliseconds (1 second).
// - Upon encountering `setInterval()`, the JavaScript engine starts a timer that repeatedly executes the provided callback function at the specified interval.
// - The callback function is executed for the first time immediately upon setting the interval, and then it continues to run every 1000 milliseconds thereafter.
// - The callback function retrieves the current date and time using `new Date()` and logs it to the console.
// - This process repeats indefinitely until it is explicitly stopped or the webpage is closed.

// --- B) Clear Interval:
// - In JavaScript, the clearInterval() function is used to stop the execution of a function that was previously scheduled to run periodically using setInterval()
// - It cancels the recurring execution of the specified function
// - intervalID: The identifier returned by the setInterval() function that you want to clear is passed as an argument in clearInterval
const interval = setInterval(function () {
  const date = new Date();
  console.log(date);
}, 1000);

clearInterval(interval);
// Now the interval is not executed as its execution is denied by using clearinterval
