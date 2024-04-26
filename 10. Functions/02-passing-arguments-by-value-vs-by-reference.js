'use strict';

// - This flight is a String Primitive Type
const flight = 'LH234';
const onkar = {
  name: 'Onkar Patel',
  passport: 123456789,
};

// - Here teh flightNum carries the copy of value of flight & not original value
const checkIn = function (flightNum, passenger) {
  // - Changing the Flight Number
  // - As Strings are primitive data type hence when passed its their copy that is created, which does to affect the original data
  flightNum = 'LH999';

  // - Changing the Passenger Name
  // - As Object Copies are not really a copy but an alias pointing at the same address / reference hence changes in original data take place
  // - Manipulating teh passenger Object is same as manipulating the onkar Object
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 123456789) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// - Success as passport number is correct
checkIn(flight, onkar);

console.log(flight); // LH234 (Not Changed)
console.log(onkar.name); // Mr. Onkar Patel (Changed)

// - Summary :
// --- passing a primitive data type means creating a copy of it
// --- Whenever Objects are copied its just an Alias that points to the same address along with teh original one, hence changes made using teh alias affect the original data

// - IRL we can encounter errors while sending arObjects as arguments
// - EG :

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

// - Passing the Object as Argument
newPassport(onkar);

// - Wrong Passport as we now altered teh original data / passport of 'onkar' Object
checkIn(flight, onkar);

// - IMPORTANT :
// --- JS has nothing as Passing by reference, only passing by value
// --- Js has nothing called like passing by reference
// --- For Objects we do as in pass a reference however the reference is still a value which contains a memory address. So basically we pass a reference to as function and don't pass by reference to a function
