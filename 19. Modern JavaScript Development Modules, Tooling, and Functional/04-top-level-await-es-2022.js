///////////////////////////////////////
// 04. Top Level Await [ES2022]:
// We can now use the 'await' keyword outside the async function, but only in Modules
// This 'await' is called Top Level Await
// Remember to include the type="module" while Linking Js Files

// --- Top Level Await:

// EXAMPLE 1:
console.log('Start Fetching Data');

// Fetching Data
const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

// Converting the Response to JavaScript Object
const data = await response.json();
console.log(data);

console.log('Data Fetching Ends');

// O/P:
// Start Fetching Data
// Array (100)
// Data Fetching Ends

// Explanation:
// 1. The synchronous Code console.log('Start Fetching Data'); is executed First
// 2. Then the Fetching of Data Occurs, and as we used the await function here means that the Engine will wait until the Fetching Ends to execute further Code
// 3. Then after the Fetching Ends the Last Line of synchronous Code gets Executed

// Issue:
// The issue with using Top Level Await is that it stops the Execution of code of the Modules until the request is settled
// Using this can be good in some cases, but has very bad effect in situations where the Fetch request takes a lot of Time

// EXAMPLE 2:

// Fetching Posts and Returning the Last Post
const getLastPost = async function () {
  try {
    //Fetching Data & Converting to JavaScript Object
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();

    // Async Function returns a Promise
    return data[data.length - 1];
  } catch (err) {
    console.log(err.message);
  }
};

// Method 1: [WRONG]
// Wont work as The promise returned isn't fulfilled when the console.log() is read hence we get a Pending{promise}
// We already saw this problem in teh Last Section
const lastPost = getLastPost();
console.log(lastPost);

// Method 2: [RIGHT]
// We can make it work using the .then() method to handle the resolved value of the Promise returned
lastPost.then(res => console.log(res));

// Method 3: [RIGHT]
// This is a good place to use the Top Level Await to wait for the promise returned to get resolved and then display the value
const lastPost2 = await getLastPost();
console.log(lastPost2);
