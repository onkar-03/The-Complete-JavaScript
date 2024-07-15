// Polyfilling Async Functions
import { async } from 'regenerator-runtime/runtime';

// Importing Config Variable
import { TIMEOUT_SECONDS } from './config';

// Functions that are used again and again are store here

// Timeout Function in case of Bad Internet Connection
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    // API Request
    // Using Promise.race[] to race between fetch or timeout seconds .. and fail the fetch if it exceeds the timeout limit
    // Fetch time Limit 10 seconds
    const res = await Promise.race([fetch(`${url}`), timeout(TIMEOUT_SECONDS)]);

    // Convert to Js Object
    const data = await res.json();

    // Check Response
    if (!res.ok) {
      throw new Error(`${data.message}(${res.status})`);
    }

    // Return the JSON Data
    return data;
  } catch (err) {
    // If we want the model.js to present the error encountered here we need to throw the error from here in order to be catch it by the other catch method in the model.js
    throw err;
  }
};
