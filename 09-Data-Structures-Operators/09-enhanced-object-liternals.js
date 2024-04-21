' use strict';

// ------------- Object Literals :
// - Objects that we write literally on our own are called object literals, like the one written below
// - ES6 enhancements to object literals are :

// 1. Including External Objects as a property of another object
// 2. Improved Method Declaration
// 3. We can compute property names instead of writing them down manually / literally

// Example :
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Object
const openingHours = {
  // Compute property names from array weekDays
  [weekDays[1]]: {
    open: 12,
    close: 22,
  },
  [weekDays[3]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
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

  // - Included the external openingHours Object as a property of current object
  openingHours,

  // - Improved function declaration without : and function keyword
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
