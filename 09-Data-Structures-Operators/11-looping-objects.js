' use strict';

// Object
openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// ------------- Looping Objects using for-of loop :

// for-of Loop :
// - for...of loop is used to iterate over objects as well which are not iterable
// - Here we have options iof Looping :
// - 1. Loop over Property Names ('keys') : Object.keys(objectName)
// - 2. Loop over Values : Object.values(objectName)
// - 3. Loop over Both : Object.entries(objectName)
// - 'for-of' provides a more concise syntax compared to the traditional for loop when dealing with such collections.

// - Object.keys(obj1) return an array of all the property / key names of the Object 'obj1'
// - Object.values(obj1) return an array of all the values of the Object 'obj1'
// - Object.entries(obj1) return key val;ue pairs of Object in an array

// - Hence primarily we destructure the Object into Array using these then loop over the array and retrieve required information

// - Property Names
const properties = Object.keys(openingHours);
console.log(properties); // Array containing keys of openingHours

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  // Adding days to the string
  openStr += `${day}, `;
}

console.log(openStr);

// - Object Values
const values = Object.values(openingHours);
// Logs all the values
console.log(values);

// - Loops Both
const entries = Object.entries(openingHours);
console.log(entries);

// - Entry now is an array of property names and values of openingHours
// - Applying destructuring arrays on entries
// - Also as the days are objects itself hence destructuring objects
for (const [key, { open, close }] of entries) {
  // Logs all key value pairs
  // console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
