///////////////////////////////
// --- 19. Other Promise Combinators: (race, allSettled & andy)

// --- Get JSON
// To Fetch Data, convert to Javascript Object & Check Valid Inputs
const getJson = function (url, errMsg = 'Something is Wrong!!') {
  // Fetch Data from API
  return (
    fetch(`${url}`)
      // Converting the resolved value of promise to JavaScript object using .json()
      .then(response => {
        // Checking ok status of Response
        if (!response.ok) {
          throw new Error(`Country Not Found ${response.status}!!`);
        }
        // JConverting to Javascript Object
        return response.json();
      })
  );
};

// --- Promise.race()
// Promise.race returns a new promise
// Promise.race is a method in JavaScript that takes an iterable (usually an array) of promises and returns a single Promise that resolves or rejects
// This returned promise settles as soon as the first promise in the iterable settles (either resolves or rejects)
// he result of the returned promise is the result of the first settled promise (whether it's a resolved value or a rejection reason)
// Hence Promise.race() short circuits as soon as a Promise is Rejected / Fulfilled

// (async function () {
//   const res = await Promise.race([
//     getJson(`https://restcountries.com/v3.1/name/usa`),
//     getJson(`https://restcountries.com/v3.1/name/portugal`),
//     getJson(`https://restcountries.com/v3.1/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// O/P: can be different based on which promise gets settled first among the 3

// --- Creating a Timeout Function
// Promisifying the Timeout Function and then passing it as a Promise in Promise.race()
// If the Fetching of DATA took too long we Reject the Promise an Display Error

const wait = function (sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too Long !!`));
    }, sec * 1000);
  });
};

(async function () {
  const res = await Promise.race([
    getJson(`https://restcountries.com/v3.1/name/usa`),
    // wait(2),
    wait(0.1),
  ]);
  console.log(res[0]);
})();

// O/P:
// Request took too long if the Request isn't fetched in the Time Mentioned for seconds in wait() function
// Otherwise we get the Requested COuntry Information

// --- Promise.allSettled():
// Promise.allSettled is a method in JavaScript that takes an iterable (usually an array) of promises and returns a single Promise that resolves when all the promises in the iterable have either resolved or rejected
// Unlike Promise.all, which short circuits as soon as one promise rejects, Promise.allSettled waits for all the promises to settle (either resolve or reject)

Promise.allSettled([
  Promise.resolve('Success 1 !!'),
  Promise.reject('Failure !!'),
  Promise.resolve('Success 2 !!'),
]).then(res => console.log(res));

// Short circuits as soon as a Rejected Promise Encountered
Promise.all([
  Promise.resolve('Success 1 !!'),
  Promise.reject('Failure !!'),
  Promise.resolve('Success 2 !!'),
]).then(res => console.log(res));

// --- Promise.any() [ES2021]
// Promise.any is a method in JavaScript that takes an iterable (usually an array) of promises and returns a single Promise that resolves as soon as any of the promises in the iterable resolves
// In short returns the First Fulfilled Promise
// If none of the promises resolve (i.e., all of them reject), it rejects with an AggregateError containing all the rejection reasons
Promise.any([
  Promise.resolve('Success 1 !!'),
  Promise.reject('Failure !!'),
  Promise.resolve('Success 2 !!'),
]).then(res => console.log(res));

// O/P: Success 1
