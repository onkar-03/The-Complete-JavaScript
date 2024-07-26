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

// Refactored sendJSON & getJSON
export const AJAX = async function (url, uploadData = undefined) {
  try {
    // Conditional fetchPro to take different forms based on getting a Recipe from API or creating a new Recipe
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);

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

/*
export const getJSON = async function (url) {
  try {
    // API Request
    // Using Promise.race[] to race between fetch or timeout seconds .. and fail the fetch if it exceeds the timeout limit
    // Fetch time Limit 10 seconds

    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);

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

export const sendJSON = async function (url, uploadData) {
  try {
    // By default the fetch() has the GET request to retrieve data from the API
    // If we want to send request we need to specify the POST request method
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);

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
*/
