'use strict';
// Object
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
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
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// ------------- Maps :
// - A Built in Data Structure in Js Introduced in ES6
// - We use Maps to map values to keys
// - Here also like Objects Data is stored in key: value; pairs
// - keys in a Map can be any value (including objects or primitive values) and can even include functions or objects as keys.
// - Unlike objects, where keys are always strings (or Symbols), keys in a Map can be of any data type.

// ------------- Method of Maps :
// - 0. new Map(); : Used to create a Map
// - 1. .set : Used to Add values to Map, also returns the updated map after adding values & we can see by using console.log();
// - 2. .get() : Used to read values from Map
// - 3. .has() : Used to check if key:value are present in the Map or not
// - 4. .delete() : Used to delete key:value from Map
// - 5. .size : Used to get the size of the Map
// - .clear() : Used to clear the Map completely

// --- Creating a Map
const rest = new Map();

// --- Set Values in Map
rest.set('name', 'Taj Hotel');

// --- Seeing the Updated Map after element addition
console.log(rest.set(1, 'Pizza'));

// --- We can chain Elements addition in map like this
console.log(
  rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are Open :D')
    .set(false, 'We are Closed :(')
);

// --- Reading values from Map
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get('categories'));
console.log(rest.get(1));

// --- Using Booleans as Map keys
const time = 21;
// - This means console.log(rest.get(true));
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // true

// --- Delete Elements form the map :
rest.delete(1);
console.log(rest);

// --- Check if Map has a key: value; pair
console.log(rest.has(1)); // false

// --- Size of the Map
console.log(rest.size);

// --- Empty Map
const rest2 = new Map();
console.log(rest2);

// --- Clear the Map
rest.clear();
console.log(rest);

// - Setting Arrays / Objects as Key in Maps
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);

// - Fetch Values using arrays as key

// - Method 1 :
// - This wont work as its not teh same Object as in the Heap
// - For it to work arrays as key we need to save the array in a variable and use that variable instead to fetch the value
// console.log(rest.get([1, 2]));

// - Method 2 :
console.log(rest.get(arr));

// - Setting Objects as Key in Maps
// - Storing the Heading One of the Page as a key
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
