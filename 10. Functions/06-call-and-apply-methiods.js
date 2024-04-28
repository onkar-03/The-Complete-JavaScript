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
// - For this we have three methods :

// --- 1) call(objectName,Parameters) :
// - call() method is used to invoke a function, allowing you to specify the value of this explicitly within the function's execution context. This is particularly useful in JavaScript, where functions are first-class citizens and this can change depending on how a function is called.
// - EG: greet.call(person, 'Hi');
// - Explanation: greet.call(person) explicitly sets this inside the greet function to refer to the person object, allowing greet to access person.name.

// --- 2) apply()  :
// - .apply()  method invokes a function with a specified this value and allows you to pass arguments to the function as an array (or an array-like object).
// - EG: greet.apply(person, ['Hi']);
// - Explanation: Here greet.apply(person, ['Hi']) invokes the greet function where this refers to person, and 'Hi' as the argument.

// --- 3) bind() :
// - bind(): This method creates a new function that, when called, has its this keyword set to a specified value. Unlike .call() and .apply(), .bind() does not immediately invoke the function.
// - Instead, it creates a new function with the specified this value and optionally, pre-set arguments.
// - EG: const greetPerson = greet.bind(person)
// - Explanation : Here greet.bind(person) creates a new function greetPerson where this is bound to person. When greetPerson is invoked, it behaves as if it were invoked within the context of the person object

// * Remember Functions are Objects and Objects do have Methods so call is one of the Methods of Functions in general
booking.call(eurowings, 23, 'Onkar');
console.log(eurowings);

booking.call(lufthansa, 239, 'Andy');
console.log(lufthansa); // console
