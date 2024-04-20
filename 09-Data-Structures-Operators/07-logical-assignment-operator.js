' use strict';
// ---------------- Logical Assignment Operator :
// - Introduced in ES2021
// - Written as '='

// OBJECT 1
const restaurant1 = {
  name: 'Classico Italiano',
  numGuests: 23,
};

// OBJECT 2
const restaurant2 = {
  name: 'Hotel Taj',
  owner: 'David Jones',
};

// - Setting Default value if property doesn't exist using Logical || 'OR'
restaurant2.numGuests = restaurant2.numGuests || 10;
restaurant1.numGuests = restaurant1.numGuests || 10;

// - Printing Result
console.log(restaurant1.numGuests); // 23
console.log(restaurant2.numGuests); // 10

// - Using Logical Assignment Operator with OR
restaurant1.numGuests ||= 10;
restaurant2.numGuests ||= 10;

// - Using Logical Assignment Operator with AND
// - If owner name exists then its a truthy value hence the owner name is set to anonymous as && works for falsy values, so when expression evaluated and no falsy values found the last value of the expression is printed
// - If owner name doesn't exist === undefined then undefined prints in console
restaurant1.owner &&= 'Anonymous';
restaurant2.owner &&= 'Anonymous';

// - Printing Result
console.log(restaurant1);
console.log(restaurant2);

// Object 3
const restaurant3 = {
  name: 'Classico Italiano',
  numGuests: 0,
};

// - Here as the Default number of guests is 0 || wont work
// - Using the nullish operator with logical assignment operator
restaurant3.numGuests ??= 10;
console.log(restaurant3.numGuests); // 0
