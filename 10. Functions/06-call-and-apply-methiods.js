'use strict';

// --- PART 1 :
// - Airline Company
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  // - Advanced Object literal function / method declaration
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}`
    );
    // - Push booking into the Array
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// - Booking Flight for Lufthansa Airline
lufthansa.book(239, 'Onkar');
lufthansa.book(635, 'David');

// - Printing the Object
console.log(lufthansa);

// --- PART 2 :
// - Say now the same Company started a new Airline service with a new name
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],

  // - Writing the same methods again and again is a bad practice
  // - Hence we store the reusable code in an external function
};

// --- External Function :
// - Storing the reusable code in an external function
// - Possible as Java Script has First Class Function
const booking = lufthansa.book;

// ! --- CONFLICT :
// - But here we get Undefined error on booking using booking function
// - Here the booking function is just a regular function
// - In regular Function call in strict mode the 'this' keyword is 'undefined'
// - So actually the booking function is no longer the book() function written above, its just a copy having the same code but its not a Method rather a Simple Function
// - Now we know what does "The value of 'this' depends on how the function is actually called"
// booking('LH23', 'Onkar'); // Undefined Error

// *--- Resolving this Issue :
// - How to tell javascript which Object are we referring to currently the lufthansa / the eurowings ??
// - For this we need to tell Js explicitly what this keyword should be like, i.e when we want the this to point to lufthansa and when we want the this to point to eurowings
// - For this we have three methods : call() , apply() , bind()

// --- 1) call(objectName,Parameters) :
// - call() method is used to invoke a function, allowing you to specify the value of this explicitly within the function's execution context. This is particularly useful in JavaScript, where functions are first-class citizens and this can change depending on how a function is called.
// - EG: greet.call(person, 'Hi');
// - Explanation: greet.call(person) explicitly sets this inside the greet function to refer to the person object, allowing greet to access person.name.

// --- Using call() method
// * Remember Functions are Objects and Objects do have Methods so call is one of the Methods of Functions in general
booking.call(eurowings, 23, 'Onkar');
console.log(eurowings);

booking.call(lufthansa, 239, 'Andy');
console.log(lufthansa);

// --- 2) apply(objectName,Array Parameter)  :
// - .apply()  method invokes a function with a specified this value and allows you to pass arguments to the function as an array (or an array-like object).
// - EG: booking.apply(eurowings, flightData);
// - Explanation: Here booking.apply(eurowings, flightData) invokes the booking function where this refers to eurowings, and flightData Array as the argument.

// --- Using apply() method
const flightData = [567, 'Anderson'];
booking.apply(eurowings, flightData);
console.log(eurowings);

// - Not used any more as we have a better way to do the same thing
// - Alternate way to do the same using .call() using spread operator '...'
const swiss = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};
booking.call(swiss, ...flightData);
console.log(swiss);
