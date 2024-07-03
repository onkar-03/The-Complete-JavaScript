('use strict');

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
///////////////////////////////
// --- 17. Return Values form Async Function:

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
  // Implementing the Try Catch Method to Handle Errors
  // Enclosed all the code that can possibly throw an error in try block
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
    // console.log(dataGeo);

    // Country Data
    // Fetch returns a Promise
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );

    // 404 Error Handling
    if (!res.ok) throw new Error(`Can't Fetch the Country Data`);

    // Convert Data to Javascript Object
    const data = await res.json();
    // console.log(data);

    // Render Country Card
    renderCountry(data[1]);

    // Returning Data from Async Function
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    //Using catch to Display potential Errors
    console.error(`${err}`);
    renderError(`Something went wrong 💣💣💣 ${err.message}`);

    // Rethrowing Errors
    // Reject Promise Returned from Async Function in case of Errors
    throw err;
  }
};

////////////////////////////////////////
////////////////////////////////////////
// --- CASE 1: (Without returning anything from Async Function)

// CODE:
// console.log(`1: Will Get Location`);
// whereAmI();
// console.log(`3: Finished Getting Location`);

// O/P:
// - 1: Will Get Location
// - 2: Finished Getting Location
// - Render Card & Console.logs

// Explanation:
// As whereAmI() is an async function we get the Synchronous Code first then the Result of the async function is displayed

////////////////////////////////////////
// --- CASE 2: (Returning values from Async Function: Wrong Way !!!)
// On our natural async await habit we tend to store the result in a variable and display it, but this wont work in here

// CODE:
// console.log(`1: Will Get Location`);
// const city = whereAmI();
// console.log(city);
// console.log(`3: Finished Getting Location`);

// O/P:
// 1: Will Get Location
// Promise {<pending>}
// 3: Finished Getting Location

// Explanation:
// async Function returns a Promise {<pending>}, and it makes sense as we already know async functions return Promises
// But returning Promise {<pending>} actually makes sense as Js does not know what will be returned from teh function as the Async Function is still running in the Background and hasn't completed execution
// So it does not block the Execution and simply returns a Promise {<pending>} state, along with the rest of the Synchronous Code as for sure a Promise is going to be returned by the Async Function
// The value we returned as String is going to be the fulfilled value of the Promise of the Async Function... means the String si the fulfilled value that the current Promise {<pending>} will have

////////////////////////////////////////
// --- CASE 3: (Returning values from Async Function: Correct Way !!!)
// As we Know that the Async Function return a Promise we handle the fulfilled value of the Promise using .then() method

// CODE:
// console.log(`1: Will Get Location`);
// whereAmI().then(string => console.log(`2: ${string}`));
// console.log(`3: Finished Getting Location`);

// O/P:
// 1: Will Get Location
// 3: Finished Getting Location
// 2: 2: You are in City, Country

// Explanation:
// We ge the 2: String at the Last because the whereAmI() is an sync function

// --- CASE 4: (Rethrowing Errors from Async Functions )
// Lets say we deliberately error something like misspell country in fetch
// const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.countryyyy}`);\

// CODE:
// console.log(`1: Will Get Location`);
// whereAmI()
//   .then(string => console.log(`2: ${string}`))
//   .catch(err => console.log(`2: ${err.message}`));
// console.log(`3: Finished Getting Location`);

// O/P:
// GET https://restcountries.com/v3.1/name/undefined 404 (Not Found)
// Error: Can't Fetch the Country Data

// Problem Explanation:
// We still get 2: undefined in O/P
// This means that the console.log() still worked, which means that the callback function is still running, which means that the .then() method was called, which means that the Promise returned from async function was still fulfilled
// So Even when there was an error in async function the Promise was still fulfilled and not Rejected
// We also see that the .catch() attached to Promise also does not receive any error here

// Solution:
// We need to Rethrow the Error from the catch() block in the async function in order to be able to handle it outside
// Now we can see that the catch() handles the error correctly for a rejected promise

// CASE 4:
//If we want to fix the Display of message 3: i.e we want to display it after the render Card, we can simply use the .finally with the Promise only

// CODE:
// console.log(`1: Will Get Location`);
// whereAmI()
//   .then(string => console.log(`2: ${string}`))
//   .catch(err => console.log(`2: ${err.message}`))
//   .finally(() => console.log(`3: Finished Getting Location`));

// O/P:
// 1: Will Get Location
// 2: You are in City, Country
// 3: Finished Getting Location

// --- Converting To Async Function using IIFE:
// IIFE: Immediately Invoked Function Expression
// Also this is the Last type of IIFE function that can be made i.e. asynchronous

(async function () {
  // Code Potential for Error Generation inside the try{} Block
  try {
    const data = await whereAmI();
    console.log(`2: ${data}`);
  } catch (err) {
    // Errors Handling Done inside the catch(){} Block
    console.log(`2: ${err.message}`);
  }
  // Finally Code is written Outside any of the Blocks
  console.log(`3: Finished Getting Location`);
})();
