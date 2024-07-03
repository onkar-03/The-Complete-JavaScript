///////////////////////////////
// --- 16. Error Handling using Try Catch:
// In Async Await we an't use the .catch() method as we can't attach it anywhere
// Here instead we use the try catch() method to handle errors
// The try catch() method is used in Regular Js as well since the Beginning

// Summary:
// try: Encloses the code that might throw an error
// catch: If an error occurs within the try block, control jumps to catch, where you can handle the error
// finally (optional): Executes after try and catch blocks, regardless of whether an error occurred or not

// Example:
// try {
//   let y = 1;
//   const x = 3;
//   x = 2; // can't reassign to const variable
// } catch (err) {
//   alert(err.message);
// }

// Implementing on the async await functions
('use strict');

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

// Promisifying Geolocation API
const getLocation = function () {
  // Return a Promise
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// --- Creating an Async Await Function
// Makes the Code look like Regular Synchronous Code but works Asynchronously

const whereAmI = async function () {
  // Implementing teh Try Catch Method to Handle Errors
  // Enclosed all teh code that can possibly throw an error in try block
  try {
    // GeoLocation
    // As getLocation() returns a Promise we await and then store it in a variable
    const pos = await getLocation();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    // Similarly fetch() returns a promise hence we await and store it in a variable and so on ...
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=  861176342202477130496x5458`
    );

    // 404 Error Handling
    if (!resGeo.ok) throw new Error(`Can't Fetch the DATA`);

    // Convert Data to Javascript Object
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country Data
    // Fetch returns a Promise
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    // 404 Error Handling
    if (!res.ok) throw new Error(`Can't Fetch the DATA`);

    // Convert Data to Javascript Object
    const data = await res.json();

    // Render Country Card
    renderCountry(data[1]);
  } catch (err) {
    //Using catch to Display potential Errors
    console.error(err.message);
    renderError(`Something went wrong 💣💣💣 ${err.message}`);
  }
};

// Calling Async Function
whereAmI();
