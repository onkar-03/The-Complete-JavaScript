///////////////////////////////
// --- 13. Building a Promise:

// Creating a Promise using Constructor Promise()
// Takes in Exactly One Argument i.e the Executor Function
// Executor Function:
// - It gets called automatically when the Promise is created
// - It takes two arguments: resolve(fulfilled) & reject
// - resolve: It is called when the Promise is fulfilled (i.e., the task is done successfully)
// - reject: It is called when the Promise is rejected (i.e., the task fails)
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening ��');
  // Simulating a random task completion time
  setTimeout(function () {
    // Fulfilled / Resolved Condition
    if (Math.random() >= 0.5) {
      // Using the resolve function that was passed ine executor function used here
      resolve('You won 🥳🥳🥳'); // Task completed successfully
    }
    // Rejected Condition
    else {
      // Using the reject function that was passed ine executor function used here
      // Instead of just displaying a message we can create an Error Objet which makes more sense
      reject(new Error('Sorry, you lost💥💥')); // Task failed
    }
  }, 2000);
});

// --- Consuming Promise Created
// What ever we pass in the resolve function will be the Value handled in the .then() method i.e res === You won 🥳🥳🥳
// Value Passed in the rejected() function is what the .catch() method obtains i.e err === Sorry, you lost💥💥
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// --- A) Old Callback Hell
// setTimeout(() => {
//   console.log('Task 1');
//   setTimeout(() => {
//     console.log('Task 2');
//     setTimeout(() => {
//       console.log('Task 3');
//       setTimeout(() => {
//         console.log('Task 4');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Output:
// Task 1
// Task 2
// Task 3
// Task 4

// --- B) Promisifying setTimeOut Async function

// What is promisifying ??
// Promisifying is the process of converting a function that uses callbacks (typically in the form of error-first callbacks) asynchronous behavior into a function that returns a promise
// This allows you to use modern JavaScript features like 'async/await' & 'then/catch' for handling asynchronous operations, making your code cleaner and easier to manage

// --- Creating a wait() function
// The wait() function does not take a callback instead returns a promise
// wait() function takes a parameter seconds, which determines the delay for the setTimeout
// It explicitly returns a promise that resolves after seconds seconds using setTimeout(resolve, seconds * 1000)
// wait() is similar to fetch() function as it too returns a promise all together after retrieving the data
// wait( )is just a more Real World Example !!
const wait = function (seconds) {
  // --- Encapsulating Async Function setTimeout using promisifying
  // Why do we need to return the Promise Explicitly ??
  // You use this when you need to create a new promise around an existing asynchronous operation that does not already return a promise (like setTimeout, which uses callbacks).
  // This allows you to integrate such operations into the promise chain structure
  // No reject as its practically impossible for timer to fail
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

// Calling the Function
// wait(1) returns a resolved Promise that waits for 1 Second thats it no resolved values given
// Hence we hav eno arguments in teh .then() of the promise handling
// We just simply log that 1 Second ahs passed as we received a resolved promise after 1 second
wait(1)
  .then(() => {
    console.log('1 Second Passed');

    // Why return wait(1) ??
    // When you call a function that returns a promise (like wait(1)), you use return wait(1) to chain the resolution of that promise to the next .then() in your promise chain
    // In simple words to handle it using further .then() method we need to return the promise
    return wait(1);
  })
  .then(() => {
    console.log('2 Seconds Passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 Seconds Passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 Seconds Passed');
  });

// --- Fulfill / Resolve Promise Immediately
Promise.resolve('abc').then(res => console.log(res));

// --- Reject Promise Immediately
Promise.reject(new Error('abc')).catch(res => console.error(res));
