'use strict';

// --- Example 1
// - f is defined outside the function scope
let f;

const g = function () {
  const a = 23;

  // - But when its reassigned as a function it still performs closure
  // - Hence access to a variable via closure
  f = function () {
    console.log(a * 2);
  };
};

g();
f(); // - 46
console.dir(f); // → [[Scopes]] → Closure(g)

const h = function () {
  const b = 777;

  // - f function reassigned here to a new function
  // - Lets see what happens, we know closure remains intact but whose closure the a / the b one
  f = function () {
    console.log(b * 2);
  };
};

// - Previous call again
g();
f();

// --- Re-assigning f function
// - We can see that when we re-assigning a function to a new value than the old closure disappears.
h();
f(); // → 1554
console.dir(f); // → [[Scopes]] → Closure(h)

// --- Example 2
const boardPassengers = function (n, wait) {
  // - Diving Number of Passengers into Three Groups
  const perGroup = n / 3;

  // - Using timer function in Js
  // - FOr this we use the setTimeOut function
  // - It takes 2 parameters a function() and wait time in ms
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  // - this console.log() function wont wait for 3 seconds
  // - Its executed simultaneously with the setTimeout function()
  // - Only the code inside the setTimeOut function() gets executed after a delay that we mentioned
  console.log(`Will start boarding in $${wait} seconds`);
};

// • The closure has priority over the scope chain
// - Even after the preGroup assigned as 1000 passengers we can see that the 180 is taken and not 1000 for passengers as closure variables have clear priority in scope chain
const perGroup = 1000;

// - Passing teh wait time in seconds by the user
boardPassengers(180, 3);
/* → Will start boarding in $3 seconds
     We are now boarding all 180 passengers
     There are 3 groups, each with 60 passengers */
