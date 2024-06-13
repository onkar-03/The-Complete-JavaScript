'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Selecting Elements
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//////////////////////////////////////////////////////////////////////////////
// --- Geolocation API ---
// A Browser API, just like Internationalization / Timer etc ...used to access the current location of the User
// On using this Browser asks to Access our Current Location through a Popup window

// Method: navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
// Parameters
// 1) successCallback: A function that is called if the position is successfully obtained. This function receives a position object as its parameter.
// 2) errorCallback (optional): A function that is called if there is an error in obtaining the position. This function receives a PositionError object as its parameter.
// 3) options (optional): An object that specifies additional options to tailor the behavior of the method.
navigator.geolocation.getCurrentPosition(
  function (position) {
    // Access the Latitude and Longitude of the Current Location

    // Method 1:
    // const latitude = position.coords.latitude;
    // const longitude = position.coords.longitude;

    // Method 2:
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    // Create Map URL
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    //////////////////////////////////////////////////////////////////////////////
    // --- Displaying Map using Leaflet Library ---
    const map = L.map('map').setView(coords, 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords)
      .addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
  },
  function () {
    // If we block the Position Access Permission then we get this error Message
    // We can also ge this error message in case the Geolocation API is unable to access our location ue to other reasons
    alert(`Could not get current position !!`);
  }
);
