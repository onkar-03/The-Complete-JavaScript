'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// --- Challenge 01:
/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// Render Error
const renderError = function (msg) {
  // Inserting the Text to the Countries Container
  countriesContainer.insertAdjacentText('beforeend', msg);

  // Style Opacity 1 tio view it
  countriesContainer.style.opacity = 1;
};

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

  // Style Opacity 1 to view it
  countriesContainer.style.opacity = 1;
};

// Promisifying Geolocation API
const getLocation = function () {
  // Return a Promise
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getLocation2().then(res => console.log(res));

//WhereAmI Function
const whereAmI = function () {
  getLocation()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      // Fetching Location based on lat & lng using Reverse Geocoding
      // Returning the Promise to handle forward
      // YES!! fetch returns a Promise but we dont have to handle it here we handle it outside the getLocation function hence we explicitly return it to be handled by .then() and .catch() methods ahead
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=	861176342202477130496x5458`
      );
    })
    .then(response => {
      // Handling Errors
      if (!response.ok)
        throw new Error(`Problem with Geocoding: ${response.status} !!`);
      // Converting Response to Javascript Object
      return response.json();
    })
    .then(data => {
      // console.log(data);

      // Printing Info using the Reversed geo coded location Url
      console.log(`You are in ${data.city}, ${data.country}!!`);

      // Fetching Country Data now as Per Lng and Lat
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(country => {
      // Handling Errors
      if (!country.ok) throw new Error(`Country not Found ${country.status}!!`);

      // Converting Response to Javascript Object
      return country.json();
    })
    .then(data => renderCountry(data[1]))
    .catch(err => console.log(`${err.message} 💥💥💥`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// Testing
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

btn.addEventListener('click', whereAmI);
