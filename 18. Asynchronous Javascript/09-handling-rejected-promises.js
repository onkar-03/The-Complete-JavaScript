'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////
// --- 09. Handling Rejected Promises:
// The only way Fetch Fails to fulfill a promise is when the User Loses Internet Connection

// --- Error Handling Methods:
// Method 1:
// --- using .then() method
// .then() method takes in 2 callback functions first one for fulfillment and second for rejection of promises
// Eg: .then(function(){},err => alert(err));
// We can write a second call back function to handle the errors generated everywhere, But this violates the Do not Repeat Principle
// Hence we generally dont use the .then() method to handle the errors generated everywhere, and say that we use it only when a Promise is fulfilled

// Method 2:
// --- Using .catch() Method:
// The .catch() method is used to handle any errors that occur, all throughout the chain single handedly
// Eg: .catch(err => alert(err))
// It is called only when the Promise is Rejected

// --- Simulating Losing Internet Connection
// Go to Developer Tools(Ctrl + Shift + J)
// Go to Network and Set status as offline
// Then click on Who am I? button

// We ge the Following Error
// GET https://restcountries.com/v3.1/name/germany net::ERR_INTERNET_DISCONNECTED
// Uncaught (in promise) TypeError: Failed to fetch at getCountryData ....

// --- Finally Method:
// The finally method is used to execute a block of code regardless of whether the promise was fulfilled or rejected
// It’s typically used for cleanup actions that need to occur after an asynchronous operation completes
// It only works on Promises

// Render Error Message Function
const renderError = function (msg) {
  // Inserting the Text to the Countries Container
  countriesContainer.insertAdjacentText('beforeend', msg);

  // Style Opacity 1 tio view it
  countriesContainer.style.opacity = 1;
};

// Render Country Card Function
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

// Fetch Country Data
const getCountryData = function (country) {
  // Fetch Data from API
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    // Handling the resolved value of Promise using .then()
    // Converting the resolved value of promise to JavaScript object
    // Adding Callback Function for Rejected Promises handling / Catching Error
    .then(response => response.json())

    // Handling the returned promise from .json() function using .then()
    .then(data => {
      // Render the Country Card
      renderCountry(data[0]);

      // Fetching the Neighbour Country
      const neighbour = data[0].borders[0];

      // No neighbour condition
      if (!neighbour) return;

      // Fetching Neighbour Data from API
      fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        // Converting Body to JavaScript object
        .then(response => response.json())
        // Render First Neighbour Card
        .then(data => renderCountry(data[0], 'neighbour'));
    })
    // Catch Method
    // Handling all Errors generated using the catch function
    // Complete Error is printed in console & Error Message is rendered on the page
    // This is a good practice to avoid hiding errors in production environment
    // The Error Message is also used to notify the user about the error
    // So, if the user tries to search for a country, and the API fails to fetch data, the user will know about it
    .catch(err => {
      console.log(`${err} 💣💣💣`);

      // Displaying Error in Country Container
      renderError(`Something went wrong 💣💣💣 ${err.message}. Try Again!!`);
    })

    // using Finally Method
    // To always set the Opacity of the Container to 1 no matter if a promise is fulfilled or not
    .finally(() => {
      // Style Opacity 1 to view it
      countriesContainer.style.opacity = 1;
    });
};

// Event Listener for Button
btn.addEventListener(
  'click',
  function () {
    getCountryData('germany');
  }

  //Execute only once
  // { once: true }
);
