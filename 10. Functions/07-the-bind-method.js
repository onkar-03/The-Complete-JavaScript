'use strict';

// Airline 1
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

// Airline 2
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],

  // - Writing the same methods again and again is a bad practice
  // - Hence we store the reusable code in an external function
};

// - Storing the Functions in a variable
const booking = lufthansa.book;

// --- A) The Bind Method : .bind(objectName,parameters)
// - Some or All parameters can be already set if we want for the function that we are going to call
// - This method creates a new function that, when called, has its this keyword set to a specified value. Unlike .call() and .apply(), .bind() does not immediately invoke the function.
// - Instead, it creates a new function with the specified this value and optionally, pre-set arguments.
// - Its also used for partial application which we will see below with an example

// - EG: const bookFlight = booking.bind(eurowings)
// - Explanation : Here booking.bind(eurowings) creates a new function bookFlight where this is bound to eurowings. When bookFlights is invoked, it behaves as if it were invoked within the context of the eurowings object

// - Creating a new Function for each airline
// - Now the this keyword refers to the Object Defined inside ()
// - Also a new function is created which contains the this keyword, which is of the same name as the variable declared to hold the response of the .bind() method
const bookEU = booking.bind(eurowings);
const bookLU = booking.bind(lufthansa);

// - Booking for eurowings
bookEU(777, 'Henry');
console.log(eurowings);

// - Booking for lufthansa
bookLU(888, 'Mathew');
console.log(lufthansa);

const swiss = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

// --- Partial parameter setting using bind method
// - Here we Bind the Object Name and the Number as well now only thing we need to pass in teh function is the name of the passenger
const bookSU = booking.bind(swiss, 333);
bookSU('James');
console.log(swiss);

// --- B) With Event Listeners
// - Assigning new property
lufthansa.planes = 200;
// - Assigning new Method
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// - If we do this we get Incremented expected result as the this keyword here refers to the lufthansa Object
// lufthansa.buyPlane(); // 201 (Incremented by 1)

// - Adding event listener to increase number of planes as we click the Buy Button
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // NaN

// - O/P:  We get NaN because we learned that in addEventListener the 'this' keyword refers to the element on which that element is attached to
// - So we can see that the 'this' keyword refers to the button element having class 'buy'

// - Solution
// - We need to make the this keyword refer to the Oject we want to using teh .bind() method as we want, because the bind method returns a new function where the this points to the specified object

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // 201

// --- C) partial Application :
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// - As the 'this' keyword is not there in the function we define objectName as null
const addVAT = addTax.bind(null, 0.23);
// - addVAT = value => value + value * 0.23
console.log(addVAT(100));
console.log(addVAT(23));

// --- Challenge :
// Create the above example with one function returning the other function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.23); // Contains thee returned Function
console.log(addVat2(100)); // Calling the Returned function with required value
