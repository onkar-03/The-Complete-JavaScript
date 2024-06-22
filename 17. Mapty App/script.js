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
  // CLicks
  clicks = 0;

  // Date for Each Object
  // Creating Global Var by not declaring the type of variable
  date = new Date();

  // Creating Ids
  // For this we generally use a libraries to generate nice ids
  // But here we simply use the combination of date to get a string as the id

  // Using Date.now()
  // Date.now(): Returns the current timestamp in milliseconds since January 1, 1970
  // + '': Converts the timestamp to a string
  // .slice(-10): Extracts the last 10 characters from the string

  id = (Date.now() + '').slice(-10);

  // Why not using new Date() ??
  // new Date(): Creates a Date object representing the current date and time
  // + '': Converts the Date object to a string. This string will be in the format like "Tue Jun 18 2024 15:06:17 GMT+0200 (Central European Summer Time)" (the exact format may vary depending on the environment)
  // .slice(-10): Extracts the last 10 characters from this string, which are not useful as an identifier (e.g., "GMT+0200)")
  // Remember that Date.now() returns the current timestamp ... if we use the new Date() it creates an object
  // The new Date() method returns a formatted date string, not a numeric timestamp

  // COnstructor
  constructor(coords, distance, duration) {
    // Initializing Variables
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  // Set Description Function
  _setDescription(description) {
    // If we want the prettier to ignore / not format the next line we use this commented line:
    // prettier-ignore
    const months = ['January','February','March','April','May','June', 'July','August','September','October','November','December'];

    // Creating Description Sentence
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  // CLicks Incrementing Function
  click() {
    this.clicks++;
  }
}

// Cycling Class
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    // Reusing the Parent Class code for the following parameters using super()
    // This also initializes the this keyword
    super(coords, distance, duration);
    this.elevationGain = elevationGain;

    // Calling the Speed function
    this.calcSpeed();

    // Setting Description of Workout
    this._setDescription();
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
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    // Reusing the Parent Class code for the following parameters using super()
    // This also initializes the this keyword
    super(coords, distance, duration);
    this.cadence = cadence;

    // Calling pace function to display the pace as soon as the object is created
    this.calcPace();

    // Setting Description of Workout
    this._setDescription();
  }

  // Creating Function to Calculate the Pace
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

// Checking the Class creation
// const run1 = new Running([39, -12], 5.2, 2.4, 178);
// const cycle = new Cycling([39, -12], 27, 95, 523);
// console.log(run1);
// console.log(cycle);

// Class For App Loading
class App {
  // Private Properties
  #map;
  #mapEvent;
  #workouts = [];
  #zoomLevel = 13;

  // Constructor called immediately as soon as the object is created
  constructor() {
    // Invoking the Location Function as soon as an object is created
    // To get the Users Location
    this._getPosition();

    // get Data from Local Storage
    this._getLocalStorage();

    // --- Adding Event Listeners:
    // A) ---- Submit Form ----
    // We want to display the Marker when the Form is Submitted / Enter is pressed
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

    // Using Event Delegation
    // Adding event Listener to Parent of Form Element instead of every Element
    // Binding the this keyword as .addEventListener make the this keyword point to the one on which it is being called which we dont want hence we point the this keyword to the current object
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
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
    this.#map = L.map('map').setView(coords, this.#zoomLevel);

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

    // Render Marker on the Page
    // As the map is already loaded hence we cna now load the markers from local storage
    this.#workouts.forEach(work => this._renderWorkoutMarker(work));
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

  // --- Hide Form
  _hideForm() {
    // Empty Inputs
    // prettier-ignore
    inputCadence.value = inputDuration.value = inputElevation.value = inputDistance.value= 0;

    // !IMPORTANT: Hiding Form
    // To skip the transition while hiding we quickly hide it using display:none
    form.style.display = 'none';

    // Add hidden class again
    form.classList.add('hidden');

    // Set the Layout back to Grid after 1se exact transition time of the form display and hiding
    setTimeout(() => {
      form.style.display = 'grid';
    }, 1000);
  }

  // Toggle Fields
  _toggleElevationField() {
    // .closest() selects the CLosest parent field with the Matching class
    // ,form__row--hidden is the class that is used to hide the form field
    // Toggle Fields as per selection suing the .toggle() method
    // By this we make sure that one of them is hidden and then other is visible
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  // Create a Workout
  _newWorkout(e) {
    // --- Function to Check if all the Values are Numbers
    // ...inputs returns an Array hence we loop over using the .forEach method
    // .every Methods returns true only when all values are Finite Numbers
    const validInputs = (...inputs) => {
      return inputs.every(inp => Number.isFinite(inp));
    };

    // --- Function to check Positive Value or not
    // ...inputs returns an Array hence we loop over using the .forEach method
    // .every Methods returns true only when all values are Finite Numbers
    const allPositive = (...inputs) => {
      return inputs.every(inp => inp > 0);
    };

    // Disable auto reloading
    e.preventDefault();

    // Extract the latitude and longitude from the Event Object & add a Marker there
    const { lat, lng } = this.#mapEvent.latlng;

    ///////////////////////////////////////////////////////////////////////////
    // Render a Workout on the App: The Map & The List

    // --- 1. Get data from form
    // Remember that the Data from Comes as String so convert to Number if required
    // '+' operator is used to convert the string to number
    // Number()is used to convert String to Number

    // Getting the running / cycling type from the form in 'type' variable
    const type = inputType.value;

    // Getting Distance
    const distance = +inputDistance.value;

    // Getting Duration
    const duration = +inputDuration.value;

    let workout;

    // --- 2. If workout running, create running Object

    // Get cadence only if its running type
    if (type === 'running') {
      const cadence = +inputCadence.value;

      // --- Check if the Data is Valid
      // Alert if All Values are Not Numbers || Positive
      if (
        //Method 1 to check
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence) ||
        // !allPositive(distance, duration, cadence)

        // Method 2
        // Using Helper Function
        // Whenever its not true that the All are Numbers then we show the alerting Window
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert(`Inputs have to be Positive Numbers!!`);
      }
      // Crate Running Object
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // --- 4. If workout cycling , then create cycling object

    // Get elevationGain only if its cycling type
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      // --- Check if the Data is Valid
      // Alert if All Values are Not Numbers || Positive
      // Elevation Gain can be negative
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        return alert(`Inputs have to be Positive Numbers!!`);
      }
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // --- 5. Add new Object to workout Array
    this.#workouts.push(workout);
    // console.log(workout);

    // --- 6. Render workout on Map as Marker
    this._renderWorkoutMarker(workout);

    // --- 7. Render Workout on List
    this._renderWorkout(workout);

    // --- 8. Hide form and clear fields
    this._hideForm();

    // ---9 . Set Local Storage to All Workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    // ---- Display Marker on Map:
    // Using the latitude and longitude extracted above in const {lat,lng}
    // Using the lat and lon retrieve from the Object and adding a pointer at that place only
    //.marker() method creates the marker
    //.addTo() method adds the marker to the Map
    L.marker(workout.coords)
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
          // Set new class '${type}-popup' to the Markers created using teh Leaflet Library
          // If its cycling it has the yellowish color else the green for running
          className: `${workout.type}-popup`,
        })
      )
      // Set Content in the Popup
      .setPopupContent(
        `${workout.name === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  // Rendering Workout on the Page
  // Generating Required HTML
  _renderWorkout(workout) {
    let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.name === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          `;

    // Additional HTML if its Running
    if (workout.type === 'running')
      html += `<div class="workout__details">
    <span class="workout__icon">⚡️</span>
    <span class="workout__value">${workout.pace.toFixed(1)}</span>
    <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
    <span class="workout__icon">🦶🏼</span>
    <span class="workout__value">${workout.cadence}</span>
    <span class="workout__unit">spm</span>
    </div>
    </li>`;

    // Additional HTML if its Cycling
    if (workout.type === 'cycling')
      html += `
    <div class="workout__details">
    <span class="workout__icon">⚡️</span>
    <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;

    // Inserting the HTML Generated as  Sibling of the Form
    form.insertAdjacentHTML('afterend', html);
  }

  // Move Marker
  _moveToPopup(e) {
    // We store the Form element on which we click in workoutEl
    // Using closest to find the nearest ancestor of Target From Element on which we click that matches a given CSS selector '.workout'
    const workoutEl = e.target.closest('.workout');
    // console.log(workoutEl);

    if (!workoutEl) {
      return;
    }

    // Storing the Workout we created in the workout variable
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    // console.log(workout);

    // Moving Marker to the Marker Place
    // Using the .setView method of the Leaflet Library
    this.#map.setView(workout.coords, this.#zoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });

    // Using Public Interface
    // workout.click();
  }

  // Local Storage Function
  // Implementing the Local Storage feature across multiple Reloads of the Page
  // The Data is Stored and linked to the url of the Page
  // Now whenever the page loads, then we will load all the workouts from the local storage, and render them on the map and also on the list
  _setLocalStorage() {
    // Using the Local Storage API provided by the Browser to store the Markers Data
    // Using the .setItem method of Local Storage
    // First Argument is Key / Name by which we want to store
    // Second Argument is Value : which is a String we want to store which is associated with the Key
    // Converting Object to String Using JSON.stringify
    // Local Storage is very Simple API only to be used for Small Amounts of Data, because local storage is blocking which is very bad and slows down the application
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    // Getting the Data in Local Storage
    // Converting the String back to Object, Using JSON.parse() for it
    // But now when we convert the Object => String => Back to Object we loose the Prototype chain now these objects are just regular Objects
    // SO now the Workouts dont have clicks() method in them anymore as no chaining
    const data = JSON.parse(localStorage.getItem('workouts'));
    // console.log(data);

    // Check if Local storage is empty or not
    // If no data in Local Storage then simply return
    if (!data) return;

    // Restore Data across multiple reloads
    // As this is called right at the beginning, so incase there is no data / workouts on the page then the workouts array is empty and we then use the data stored in local storage to retrieve the old workouts array and store it in the workouts
    this.#workouts = data;

    // Render the List
    // Rendering the Previously created workout list from local storage
    this.#workouts.forEach(work => this._renderWorkout(work));

    // Render the Markers
    // Rendering the Previously created workout markers from local storage
    // As we said we are doing all these at the very beginning, i.e when the map isn't loaded and the  geolocation hasn't retrieved the location of the user
    // So we can only render the Marker when some predefined conditions are executed and not at the very beginning like the list
    // Hence we execute the Marker loading after the Map is loaded in teh _loadMap method
  }

  // Public Method
  // To clear the Workouts form Local Storage
  reset() {
    // Removing Workouts
    localStorage.removeItem('workouts');

    // Reloading Page
    // Location has a lot of methods and properties one of them is to reload the Page
    location.reload();
  }
}

// Creating Objects
const app = new App();
// console.log(app);

// Using app.reset() in console will reset the Page
