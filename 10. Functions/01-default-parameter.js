'use strict';

// ------------- Default Parameters :
// - Default parameters allow you to initialize a function's parameters with default values if no value or undefined is passed
// - There are Two ways to set Default Values
// --- 1) ES5 Method ( Using Logical OR '||')
// --- 2) ES6 Method
// - One good thing about Default values is that we can use any expression to declare default values  EG : price = 199 * 1.2
// - One more thing is that we can use other variables as well to declare default values for variables EG : price = 199 * numPassengers, but this only works if we use the parameters like 'numPassengers' which are declared before the current parameter
// - If we want to skip a parameter simply pass undefined as the argument value in the function, and then the skipped parameter will have the default value

const bookings = [];

// - ES6 Method to declare default values
const createBooking = function (
  flightNumber,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // - ES5 Method for Default Values
  // - Setting default values using || Logical OR Method
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    // - Using Advance object literals to declare a property with the same name
    flightNumber,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

// - Passing only Flight Number, hence numPassengers = 1 & price = 199
createBooking('LH123');

// - Passing all parameters
createBooking('LH123', 2, 305);

// - Passing only first two parameters & price getting calculated on the basis of number of passengers
createBooking('LH123', 2);

// - Skipping the numPassengers parameter
// - Hence the numPassengers parameter will have the default value
createBooking('LH123', undefined, 2000);
