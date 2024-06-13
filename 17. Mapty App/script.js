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

// --- Geolocation API ---
// A Browser API, just like Internationalization / Timer etc ...
// On using this Browser asks to Access our Current Location through a Popup window

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
  },
  function () {
    // If we block the Position Access Permission then we get this error Message
    // We can also ge this error message in case the Geolocation API is unable to access our location ue to other reasons
    alert(`Could not get current position !!`);
  }
);
