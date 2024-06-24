'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// --- AJAX Calls: ---
// All process is asynchronous non blocking ... behind the scene process

const getCountryData = function (country) {
  // Old School way Of doing AJAX in Js
  // Doing this because
  // 1. To know that XML Http Request Exists
  // 2. How AJAX was handled using events and callback functions
  const request = new XMLHttpRequest();

  // Obtaining URL
  // 1. Type: 'GET' used to get Data from Server
  // 2. A String containing url to which AJAX call should be made
  // Using the Rest Countries Public API
  request.open(`GET', 'https://restcountries.com/v3.1/name/${country}`);

  // Sending Request to Server to get data from Server
  request.send();

  // Using Event Listener 'load' waiting for the Event of Fetching Data from the Server asynchronously
  request.addEventListener('load', function () {
    // View Received Data
    // Json Data String Format
    // Converting JSON to Object
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Building Card Component
    const html = `<article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.language}</p>
            <p class="country__row"><span>💰</span>${data.currencies}</p>
          </div>
        </article>`;

    // Insert HTML to Page
    countriesContainer.insertAdjacentHTML('beforeend', html);

    // Style Opacity 1 tio view it
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('Portugal');
