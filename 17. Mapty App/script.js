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

// ---- Global Variables ----
// So that we can access this var inside other functions as well
let map, mapEvent;

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
    // Remember the Global Variables of all the Scripts loaded before the current script, can be accessed bty the current script
    // This is why the script.js has access to the L variable that is defined globally in the Leaflet script that we included before the script.js in the HTML

    // Storing the Map in a variable 'map'
    // 15 refers to the  Zoom level of the current location on the Map
    map = L.map('map').setView(coords, 13);

    // The map which we see is mae of tiles which come from the URL named openstreetmap, a open source map accessible to all
    // Leaflet also does work with other maps as well like google maps if u want to use it
    // .org/ is a style of of the openstreetmap
    // .fr/hot/ is also a style that we use instead of the .org/
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // ---- Handling Clicks on Map ----
    // Add a Marker whenever we clock on the Map
    // Cant use the normal .addEventListener() function as we want to add a marker at the exact coordinates where we click it, whereas using normal event listener we listen to the whole map and not the exact coordinates
    // Hence we use the .on() method of the leaflet library
    // .on() method in the Leaflet library is used to attach event listeners to Leaflet objects, such as maps, layers, and markers similar to .addEventListener() of Js
    // Leaflet objects can trigger a wide variety of events, such as click, mouseover, zoom, and many more, depending on the type of object
    map.on('click', function (mapE) {
      // Assigning Global Variable
      mapEvent = mapE;

      // Render a From whenever we click on teh Map for a Marker
      // Hence we remove the 'hidden' class form the form element
      form.classList.remove('hidden');

      // Focus on teh Input Distance field on teh Form as we click on the Map
      inputDistance.focus();
    });
  },
  function () {
    // If we block the Position Access Permission then we get this error Message
    // We can also ge this error message in case the Geolocation API is unable to access our location ue to other reasons
    alert(`Could not get current position !!`);
  }
);

// ---- Submit Form ----
// We want to display the Marker when the Form is Submitted /Enter is pressed
// Remember the 'submit' action on addEventListener() works for the Enter keypress as well
form.addEventListener('submit', function (event) {
  // Disable auto reloading
  event.preventDefault();

  // ---- Display Marker
  // Extract the latitude and longitude from the Event Object & add a Marker there
  const { lat, lng } = mapEvent.latlng;

  // --- Clear Input Fields
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';

  // Using the lat and lon retrieve from the Object and adding a pointer at that place only
  //.marker() method creates the marker
  //.addTo() method adds the marker to the Map
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      // Creating a Popup Of desired Size
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        // To disable the Auto close of popups are Markers are created
        autoClose: false,
        // Also disabling the close Popups while clicking somewhere else
        closeOnClick: false,
        // Set new class '.running-popup' to the Markers created using teh Leaflet Library
        className: `running-popup`,
      })
    )
    // Set Content in the Popup
    .setPopupContent('Workout')
    .openPopup();
});

// ---- Change Input type of running & Cycling
// Whenever we change the Options an Event is Triggered called the 'change' event
inputType.addEventListener('change', function () {
  // .closest() selects the CLosest parent field with the Matching class
  // ,form__row--hidden is the class that is used to hide the form field
  // Toggle Fields as per selection suing the .toggle() method
  // By this we make sure that one of them is hidden and then other is visible
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
