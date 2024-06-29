'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////
// --- 08. Chain Promises:

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

// --- Chaining Promises
// Here we already chained promises in order to get the Javascript Object using the .json() function
// This .json() function is also an async function, means that it also returns a promise on being called hence we return, we chained the returned promise to be handled by another .then() function
// Now we Chain promises to get the neighbouring countries as well
const getCountryData = function (country) {
  // Fetch Data from API
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    // Handling the resolved value og Promise
    // Converting the resolved value to JavaScript object
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
    });
};

getCountryData('germany');
