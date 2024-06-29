'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////
// --- 05. Promises and Fetch API:

// 1. Using AJAX Method
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// 2. Using Fetch API
// Fetch API in JavaScript allows you to make network requests to retrieve resources from a server
//It is a modern replacement for the older XMLHttpRequest API and provides a more powerful and flexible feature set for handling HTTP requests and responses
// Fetch API builds a Promise and returns a promise representing the response to the request
// Now we can Consume the Promise returned to us by the Fetch API
const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
console.log(request); // Promise

// Promise:
// ES6 Feature
// An Object which is called a Container / Placeholder to store Values of an Asynchronous Js Operation

// Advantages of Promises:
// We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results
// Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell

// Promise Life Cycle:
// --- Pending:
// When a Promise is created, it starts in the "pending" state. In this state, the Promise neither has a value nor an error; it is waiting for the asynchronous operation to complete

// --- Settled:
// 1. Full-filled:
//A Promise transitions from "pending" to "fulfilled" when the asynchronous operation completes successfully and the Promise now has a value

// --- 2.Rejected
//  Promise transitions from "pending" to "rejected" if the asynchronous operation fails and the Promise now has a reason (an error message or object) for the failure

// Benefits of Promises over Callbacks:
// Avoids Deep Nesting: Promises help to avoid the deeply nested structure of callbacks
// Better Error Handling: Promises provide a centralized mechanism to handle errors
// Code Readability: Promises make the code cleaner and easier to understand
// Control Flow Management: Promises offer more control over the flow of asynchronous operations
