'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// --- 02. First AJAX Calls: ---
// All process is asynchronous non blocking ... behind the scene process

const getCountryData = function (country) {
  // Old School way Of doing AJAX in Js:
  // XMLHttpRequest is a built-in browser object that provides an easy way to retrieve data from a URL without having to do a full page refresh
  // Doing this because
  // 1. To know that XML Http Request Exists
  // 2. How AJAX was handled using events and callback functions
  const request = new XMLHttpRequest();

  // Obtaining URL
  // 1. Type: 'GET' used to get Data from Server
  // 2. A String containing url to which AJAX call should be made
  // 3. Using the Rest Countries Public API 'https://restcountries.com/v3.1/name/${name}'
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  // Sending Request to Server to get data from Server
  request.send();

  // Using Event Listener 'load' waiting for the Event of Fetching Data from the Server asynchronously
  // So when the whole data is fetched the Load event is fired and then we handle that data
  request.addEventListener('load', function () {
    // View Received Data
    // Json Data String Format
    // Converting JSON to Object
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Building Card Component
    const html = `<article class="country">
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
  });
};

// the Order in which the cards appear might not be the same as here, i.e first portugal then the usa card
// This is Asynchronous call AJAX and the fetching of data happens behind the scenes
// On reading the request the Engine moves to the next line of code ... the resources that load first are visible first
getCountryData('Portugal');
getCountryData('usa');
