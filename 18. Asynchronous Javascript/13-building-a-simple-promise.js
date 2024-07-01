///////////////////////////////
// --- 13. Building a Promise:

// Creating a Promise using Constructor
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
      reject('Sorry, you lost💥💥'); // Task failed
    }
  }, 2000);
});

// --- Consuming Promise Created
// What ever we pass in the resolve function will be the Value handled in the .then() method i.e res === You won 🥳🥳🥳
// Value Passed in the rejected() function is what the .catch() method obtains i.e err === Sorry, you lost💥💥
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
