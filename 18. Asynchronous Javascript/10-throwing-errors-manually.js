'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////
// --- 10. Throwing Errors Manually:
// Searching for a Country that doesn't exist case is evaluated here !!

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
    // Converting the resolved value of promise to JavaScript object using .json()
    .then(response => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Country Not Found ${response.status}!!`);
      return response.json();
    })

    // Handling the returned promise from .json() function using .then()
    .then(data => {
      // Render the Country Card
      renderCountry(data[0]);

      // Fetching the Neighbour Country
      const neighbour = data[0].borders[0];

      // Invalid Neighbour Case
      // const neighbour = 'abcdef';

      // No neighbour condition
      if (!neighbour) return;

      // Fetching Neighbour Data from API
      return (
        fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
          // Converting Body to JavaScript object
          .then(response => {
            if (!response.ok) {
              throw new Error(`Neighbour Not Found ${response.status}!!`);
            }
            return response.json();
          })
          // Render First Neighbour Card
          .then(data => renderCountry(data[0], 'neighbour'))
      );
    })
    // Catch Method
    // Handling all Errors generated using the catch function
    .catch(err => {
      // Displaying Error in Country Container
      renderError(`Something went wrong 💣💣💣 ${err.message}. Try Again!!`);
    })

    // using Finally Method
    .finally(() => {
      // Style Opacity 1 to view it
      countriesContainer.style.opacity = 1;
    });
};

// Event Listener for Button
btn.addEventListener(
  'click',
  function () {
    // Passing Valid Country Name
    getCountryData('portugal');

    // Passing Invalid Country Name
  }

  //Execute only once
  // { once: true }
);
// getCountryData('abcdefgh');

// ERROR Message: (in display)
// TypeError: Cannot read properties of undefined (reading 'flags') 💣💣💣

// ERROR Message: (in console)
// Failed to load resource: the server responded with a status of 404 ()
// TypeError: Cannot read properties of undefined (reading 'flags') 💣💣💣

// Situation:
// We entered an Invalid Country Name which gave us TypeError: Cannot read properties of undefined (reading 'flags') 💣💣💣
// But we know thats not the case, the situation is that the API couldn't find the data for the specified country name stated by ERROR 404 which was given in the console but not on the page
// Here the Invalid country name Promise is still fulfilled because fetch() only fails during User losing their Internet connection hence the catch() method dose not catch the 404 Error rather it catches the Cannot read properties of undefined (reading 'flags') Error

// Conclusion:
// We want to convey the User that no country by the name passed was found / invalid country name error and not the one displayed on the screen
// Also we want the Promise to be Rejected here because obviously that the correct way
// Rejecting the Promise Manually is what we will do by Throwing Errors Manually !!
