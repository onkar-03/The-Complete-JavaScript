'use strict';

// ------------- Destructuring Objects :
// - Destructuring refers to the process of resolving COmplex Data structures into simple ones
// - An ES6 Feature that allows you to extract values from Object and assign them to variables in a concise and readable way.
// During Destructuring the original arrays are not destroyed / changed
// For Array Destructuring we use {}

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

  // - Destructuring the Object Received via function call
  orderDelivery: function ({ time, place, mainIndex, starterIndex }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${place} at ${time}`
    );
  },
};

// ---------------- Destructuring Objects :
// - Here we write the property names inside the {} that we want to fetch from the object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// ---------------- Assigning Different Names :
// - Helpful when we work with Third Party Data
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// ---------------- Assigning Default Values :
// - Assigning default values to menu and starterMenu which we saved as start
// - As the menu does not exist in the object it will have the default value
// - Where as as the startMenu Exists in Object it will have the value assigned above
// - Also we gave [] as default value as we are referring to arrays here and not integers etc..
const { menu = [], starterMenu: start = [] } = restaurant;
console.log(menu, start);

// ---------------- Switching / Mutating Variables :
let a = 999;
let b = 777;
const obj = { a: 23, b: 7, c: 90 };

// - {} writing this then Js expects a CodeBlock and since we cant assign anything to a code block so writing {a,b}=obj; will give us an error
// - Hence to swap value to variables in Objects we need to close all of them inside ()
({ a, b } = obj);
console.log(a, b); // 23 7

// ---------------- Nested Objects :
// - We have nested objects inside the openingHours which are thu, fri, sat
// - We have already stored the openingHours inside a var hours so we will destructure it
// - We fetch friday from it
// - If we want to fetch the open and close separately we can do that as well

// Method 1
// const {
//   fri: { open: o, close: c },
// } = openingHours;

// Method 2
const {
  fri: { open: o, close: c },
} = hours;

console.log(o, c); // 11 23

// - Example
// - Passed an Object a single argument to the function
restaurant.orderDelivery({
  time: '23:40',
  place: 'Via del Sol 21',
  mainIndex: 2,
  starterIndex: 2,
});
