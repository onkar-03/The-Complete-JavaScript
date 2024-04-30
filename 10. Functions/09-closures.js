'use strict';

// ----------------------- Closure :

// --- Definitions :

// - 1) Closure in JavaScript is when a function remembers the variables from the scope in which it was defined, even if that scope is no longer active. In simpler terms, it's like a function capturing and holding on to its surrounding data, even after that data is technically gone

// - 2) A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone

// - 3) A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

// - 4) A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth

// - 5) A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.

// • A closure makes a function remember all the variables that existed at the function's birth place i.e at the time it was created, hence the booker function remembers all the variables that were created in the function when the booker was created like the passengersCount

// • A function has access to the variable environment of the execution context in which it was created even after that execution context is gone, in this case the passengerCount var that was created in that execution context

// • Closure: variable environment (VE)  attached to the function, exactly as it was at the time and place the function was created.

// • We do NOT have to manually create closures, this is a JavaScript feature that happens automatically. We can't even access closed-over variables explicitly. A closure is NOT a tangible JavaScript object.

// • The closure has priority over the scope chain.

// --- Example :s
// - Closure is not a feature that we explicitly use, we don't create closures manually.
// - Closures happen implicitly in certain situations.
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// - Closure preserved the passengersCount variable
const booker = secureBooking();
booker(); // - 1 passenger
booker(); // - 2 passengers
booker(); // - 3 passengers

// • console.dir() - allows us to look at the closure of a function
// - We can see the closure of secureBooking having the passengerCount
console.dir(booker);
