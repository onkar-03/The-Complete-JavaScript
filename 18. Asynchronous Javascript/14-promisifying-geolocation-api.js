///////////////////////////////
// --- 14. Promisifying the Geolocation API:

// --- Old Way of Using the Geolocation API:
// First callback is to display the location
// Second is to Show Error inc ase the User denies the Location Access

// CODE:
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );

// --- Promisifying GeoLocation API:
// Create a Function that returns a Promise

// Method 1
const getLocation1 = function () {
  // Return a new Promise
  // Promise has one Function i.e Executor Function
  // Executor Function takes in 2 Parameters: resolve & reject
  // - resolve: It is called when the Promise is fulfilled (i.e., the task is done successfully)
  // - reject: It is called when the Promise is rejected (i.e., the task fails)
  return new Promise((resolve, reject) => {
    // Use the Geolocation API to get the current position
    // Encapsulating the Asynchronous Operation of Geolocation API inside the Promise
    navigator.geolocation.getCurrentPosition(
      // If successful, resolve the Promise with the position
      // As the first callback of Geolocation API is for success we return the position using resolve
      position => resolve(position),

      // If there is an error (e.g., user denies access), reject the Promise with the error
      // If User denies the location access, then reject the Promise with the error
      err => reject(err)
    );
  });
};

// Calling the function and handling the Promise returned
getLocation1().then(
  /// Log the resolved value (position) to the console
  res => console.log(res)
);

// Method 2
const getLocation2 = function () {
  // Return a new Promise
  // Use the Geolocation API to get the current position
  // Directly pass resolve and reject as the success and error callbacks in the geolocation API
  // As we know its first callback if for success and second oen is for reject
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// Calling the function and handling the Promise returned
getLocation2().then(
  // Log the resolved value (position) to the consol
  res => console.log(res)
);
