'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////
// --- 06. Consuming Promises::

// Render Country Function
const renderCountry = function (data, className = '') {
  // Building Card Component
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>$${(
              +data.population / 1000000
            ).toFixed(1)} million</p>
            <p class="country__row"><span>🗣️</span>${Object.values(
              data.languages
            ).join(' ')}</p>
            <p class="country__row"><span>💰</span>${Object.values(
              data.currencies
            )
              .map(currency => `${currency.name} (${currency.symbol})`)
              .join(' ')}</p>
          </div>
        </article>`;

  // Insert HTML to Page
  countriesContainer.insertAdjacentHTML('beforeend', html);

  // Style Opacity 1 tio view it
  countriesContainer.style.opacity = 1;
};

// Consuming Promises
// A) Detailed Version
const getCountryData = function (country) {
  // Use the fetch function to make a network request to the REST Countries API.
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    // Once the fetch request completes, it returns a promise
    // A promise is then Settle after Pending State say 'FullFilled' means we get a resolved Value as a response form server to work with
    // The .then() method is used to handle the resolved value of a promise
    // The .catch() method is used to handle any errors that occur

    // We use the .then() method to handle the resolved promise from fetch
    // The .then() method takes in a callback function, this contains the code we want to be execute as soon as we receive a resolved value from server
    // Calling the resolved value === response
    .then(function (response) {
      // Log the response object to the console for viewing an Debugging
      console.log(response);

      // The Data is in the Response Boy which we cant read at present
      // To Read the Data we need to call the .json() method on response received from server
      // The .json() method is available on all the response we receive from the fetch function
      // It parses the response body into a JavaScript object
      // This .json() function is also an async function, means that it also returns a promise on being called hence we return this promise to be handled ahead
      return response.json();
    })
    // The second .then() method handles the resolved promise response from response.json().
    // Here the response is called 'data'
    // The data parameter now contains the parsed JSON data
    .then(function (data) {
      // Log the data to the console for viewing
      // The Data returned is a Array
      console.log(data);

      // Call the renderCountry function with the first element of the data array
      // This assumes that the API returns an array of country objects, and we are interested in the first one
      renderCountry(data[0]);
    });
};

// --- B) Simplified using Arrow Functions
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// Calling Function
getCountryData('portugal');
