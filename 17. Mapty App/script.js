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

// Class for Workout Type
class Workout {
  // Date for Each Object
  // Creating Global Var by not declaring the type of variable
  date = new Date();

  // Creating Ids
  // For this we generally use a libraries to generate nice ids
  // But here we simply use the combination of date tio ge ta string as the id
  id = (Date.now() + '').slice(-10);

  // COnstructor
  constructor(coors, distance, duration) {
    // Initializing Variables
    this.coors = coors; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

// Cycling Class
class Cycling extends Workout {
  constructor(coors, distance, duration, elevationGain) {
    // Reusing the Parent Class code for the following parameters using super()
    // This also initializes the this keyword
    super(coors, distance, duration);
    this.elevationGain = elevationGain;

    // Calling the Speed function
    this.calcSpeed();
  }
  // Creating Function to Calculate the Speed
  calcSpeed() {
    // km/hr
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// Running Class
class Running extends Workout {
  constructor(coors, distance, duration, cadence) {
    // Reusing the Parent Class code for the following parameters using super()
    // This also initializes the this keyword
    super(coors, distance, duration);
    this.cadence = cadence;

    // Calling pace function to display the pace as soon as the object is created
    this.calcPace();
  }

  // Creating Function to Calculate the Pace
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
// Checking the Class creation
const run1 = new Running([39, -12], 5.2, 2.4, 178);
const cycle = new Cycling([39, -12], 27, 95, 523);

console.log(run1);
console.log(cycle);

// Class For App Loading
class App {
  // Private Properties
  #map;
  #mapEvent;

  // Constructor called immediately as soon as the object is created
  constructor() {
    // Invoking the Location Function as soon as an object is created
    this._getPosition();

    // --- Adding 2 Default Event Listeners:
    // A) ---- Submit Form ----
    // We want to display the Marker when the Form is Submitted /Enter is pressed
    // Remember the 'submit' action on addEventListener() works for the Enter keypress as well

    // --- 'this' keyword Issue in Event Handler:
    // Calling thi._newWorkout method to create a new Workout
    // Remember on Event Handler Function the this keyword refers to the DOM element to which it is attached
    // Here the this keyword refers to the form element here & not to the App Object
    // Hence we set the this keyword using bind
    // the Pain of working with Event Handlers in Class, we always need to bind the this to the Class using .bind() method
    form.addEventListener('submit', this._newWorkout.bind(this));

    // B) ---- Change Input type of running & Cycling
    // Whenever we change the Options an Event is Triggered called the 'change' event

    // 'this' keyword Issue in Event Handler
    // As this keyword of Event Handlers points to the one to which the EventListener is attached to, hence we use the .bind() method to se the this keyword to the App object instead
    // However here as the toggle doesn't use the this keyword anywhere not using .bind() will work as well
    inputType.addEventListener('change', this._toggleElevationField.bind(this));
  }

  // --- Access Current Location of the User
  _getPosition() {
    //////////////////////////////////////////////////////////////////////////////
    // --- Geolocation API ---
    // A Browser API, just like Internationalization / Timer etc ...used to access the current location of the User
    // On using this Browser asks to Access our Current Location through a Popup window

    // Method: navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    // Parameters
    // 1) successCallback: A function that is called if the position is successfully obtained. This function receives a position object as its parameter.
    // 2) errorCallback (optional): A function that is called if there is an error in obtaining the position. This function receives a PositionError object as its parameter.
    // 3) options (optional): An object that specifies additional options to tailor the behavior of the method.

    if (navigator.geolocation)
      // Takes in a Success Function & a Failing Function as callback functions
      navigator.geolocation.getCurrentPosition(
        // Callback functions are called as Normal Function calls
        // In normal function calls the this keyword is set to undefined
        // Hence we bind the Function using the .bind() method to the Instance of the class which will be then used by the _loadMap function
        this._loadMap.bind(this),
        function () {
          // If we block the Position Access Permission then we get this error Message
          // We can also ge this error message in case the Geolocation API is unable to access our location ue to other reasons
          alert(`Could not get current position !!`);
        }
      );
  }

  // --- Load the Map ont eh Screen
  _loadMap(position) {
    // Access the Latitude and Longitude of the Current Location

    // Method 1:
    // const latitude = position.coords.latitude;
    // const longitude = position.coords.longitude;

    // Method 2:
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    // Create Map URL
    // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    //////////////////////////////////////////////////////////////////////////////
    // --- Displaying Map using Leaflet Library ---
    // Remember the Global Variables of all the Scripts loaded before the current script, can be accessed bty the current script
    // This is why the script.js has access to the L variable that is defined globally in the Leaflet script that we included before the script.js in the HTML

    // Storing the Map in a variable 'map'
    // 15 refers to the  Zoom level of the current location on the Map
    this.#map = L.map('map').setView(coords, 13);

    // The map which we see is mae of tiles which come from the URL named openstreetmap, a open source map accessible to all
    // Leaflet also does work with other maps as well like google maps if u want to use it
    // .org/ is a style of of the openstreetmap
    // .fr/hot/ is also a style that we use instead of the .org/
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // ---- Handling Clicks on Map ----
    // Add a Marker whenever we clock on the Map
    // Cant use the normal .addEventListener() function as we want to add a marker at the exact coordinates where we click it, whereas using normal event listener we listen to the whole map and not the exact coordinates
    // Hence we use the .on() method of the leaflet library
    // .on() method in the Leaflet library is used to attach event listeners to Leaflet objects, such as maps, layers, and markers similar to .addEventListener() of Js
    // Leaflet objects can trigger a wide variety of events, such as click, mouseover, zoom, and many more, depending on the type of object

    // .on of Leaflet Lib is similar to Event Handler in Js
    // Hence the this keyword here refers to the map and not the Object of App
    // Hence we again use the .bind() method to set the this keyword to the App explicitly
    this.#map.on('click', this._showForm.bind(this));
  }

  // --- Show Form
  _showForm(mapE) {
    // Assigning Global Variable
    this.#mapEvent = mapE;

    // Unhide
    // Render a From whenever we click on teh Map for a Marker
    // Hence we remove the 'hidden' class form the form element
    form.classList.remove('hidden');

    // Focus on teh Input Distance field on teh Form as we click on the Map
    inputDistance.focus();
  }

  _toggleElevationField() {
    // .closest() selects the CLosest parent field with the Matching class
    // ,form__row--hidden is the class that is used to hide the form field
    // Toggle Fields as per selection suing the .toggle() method
    // By this we make sure that one of them is hidden and then other is visible
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    // Disable auto reloading
    e.preventDefault();

    // ---- Display Marker
    // Extract the latitude and longitude from the Event Object & add a Marker there
    const { lat, lng } = this.#mapEvent.latlng;

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
      .addTo(this.#map)
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
  }
}

// Creating Object
const app = new App();
