// Start Test
console.log(`Test Start`);

// A Timeout Function that needs to wait 0 seconds before being put to the CallBack Queue
setTimeout(() => console.log(`0 Seconds Timer`), 0);

// Promise.resolved()
// Resolved means Settled (can be rejected / fulfilled), and not Pending
// It's a method in JavaScript that returns a Promise object that is resolved with a given value
// A promise is considered "resolved" when it has settled, meaning it is no longer pending. A resolved promise can be either fulfilled or rejected
Promise.resolve(`Resolved Promise 1`).then(response =>
  console.log(`${response}`)
);
Promise.resolve(`Resolved Promise 2`).then(response => {
  for (var i = 0; i < 20000; i++) {
    console.log(`${response}`);
  }
});

// End Test
console.log(`Test End`);

// --- Execution Flow:
// 1. Synchronous Code Execution:
// The first synchronous statement is console.log('Test Start'). This gets executed immediately and outputs: Test Start

// 2. setTimeout Function:
// setTimeout(() => console.log('0 Seconds Timer'), 0) schedules the provided callback to run after a 0-millisecond delay. However, it does not run immediately. Instead, it is placed in the Callback Queue (also known as the macrotask queue) to be executed after the current synchronous code and all microtasks are completed

// 3. First Promise.resolve():
// Promise.resolve('Resolved Promise 1') creates a resolved promise with the value 'Resolved Promise 1'. The then method is called on this resolved promise, scheduling the callback (response => console.log(response)) to be executed as a microtask
// Microtasks have a higher priority than macrotasks (setTimeout callbacks), so the promise's then callback will be executed before the timeout callback, even if the timeout is set to 0 milliseconds

// 4. Second Promise.resolve():
// Promise.resolve('Resolved Promise 2') creates another resolved promise with the value 'Resolved Promise 2'. The then method schedules the callback (response => { for (var i = 0; i < 100000; i++) { console.log(response); } }) to be executed as a microtask.

// 5. End of Synchronous Code:
// The next synchronous statement is console.log('Test End'). This gets executed immediately and outputs: Test End

// --- Microtasks and Macrotasks
// Microtasks (like the .then callback of a resolved promise) are executed immediately after the current synchronous code finishes and before any macrotasks (like setTimeout callbacks)
// Macrotasks (like setTimeout callbacks) are executed only after all microtasks have been processed

// --- Detailed Output Explanation
// Output 1. Test Start: This is logged first as it is part of the initial synchronous execution.
// Output 2. Test End: This is logged next as it is also part of the initial synchronous execution.
// Output 3. Microtasks Execution:
// --- 3.1 The event loop checks for microtasks. The first microtask (Promise.resolve('Resolved Promise 1').then(...)) is executed, logging Resolved Promise 1.
// --- 3.2 The second microtask (Promise.resolve('Resolved Promise 2').then(...)) is executed next. This microtask contains a loop that logs Resolved Promise 2 100,000 times. This will take some time to complete and will block the execution of subsequent tasks during this period.
// Output 4. Macrotask Execution:
// Finally, after all microtasks have been processed, the event loop processes the macrotask from setTimeout, logging 0 Seconds Timer.
