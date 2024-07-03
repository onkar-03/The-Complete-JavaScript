///////////////////////////////
// --- 15. Consuming Promises using Async Await:
// An even Better & Easier Way to Consume Promises using Async Await

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

// Promisifying Geolocation API
const getLocation = function () {
  // Return a Promise
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// --- Creating an Async Await Function
// Makes the Code look like Regular Synchronous Code but works Asynchronously

// What is async Function ??
// A function that will keep running in the Background is called async function
// When the Function is done it automatically returns Promise
// Inside async Function we can have 1 / more await statements
const whereAmI = async function () {
  // What is await ??
  // await can only be used inside functions that are declared with the async keyword
  // In JavaScript, await is used in asynchronous functions to pause execution until a Promise is settled (either resolved or rejected), and to resume execution after that
  // If the Promise is resolved, await returns the resolved value
  // If the Promise is rejected, await throws the rejected value as an exception (you can handle this with try...catch)

  // Await is Non Blocking !!
  // While waiting for the Promise to settle, the JavaScript engine can execute other tasks, making await non-blocking for other code running on the same thread
  // Remember its an async function its already running in the web APIs section... in the background
  // Blocking async function in the background wont stop the execution of other Code by JavaScript Engine

  ///////////////////////////
  // ! REMEMBER:
  // Async & Await are just syntactic Sugar over the .then() Method used in promises
  // We can just await the Promise and then Store it a Variable, instead of returning the Promise and handling it using the .then() method multiple times

  // --- Promises and .then() Method:
  // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
  //   console.log(res)
  // );

  // --- Async Await
  // const value = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  // console.log(value);

  // GeoLocation
  // As getLocation() returns a Promise we await and then store it in a variable
  const pos = await getLocation();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse Geocoding
  // Similarly fetch() returns a promise hence we await and store it in a variable and so on ...
  const resGeo = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=  861176342202477130496x5458`
  );
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  // Country Data
  // Fetch returns a Promise
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo.country}`
  );
  const data = await res.json();
  console.log(data);
  renderCountry(data[1]);
};

// Calling Async Function
// Executing in background
whereAmI();

// Checking async function behavior
// Until Async Function finishes implementation, synchronous code is displayed
console.log('First');

// Output:
//  First
// Response Javascript Objet returned
