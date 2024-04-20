' use strict';

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here are the Ingredients : ${ing1}, ${ing2}, ${ing3}`);
  },

  // - Destructuring Elements and also binding teh rest of the Ingredients except the main one into an array using rest function
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ------------- Looping Arrays using for-of loop :

// For Of Loop :
// - for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc.
// - It provides a more concise syntax compared to the traditional for loop when dealing with such collections.
/* - Syntax : for (variable of iterable) {
              code block to be executed
            } 
*/
// - Here we dont have to worry about counter and conditions
// - We can still use the 'break' and 'continue' keywords
// - Originally created to give of the current element
// - If we want the Index we can do it too but a bit of pain in the ass

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Printing elements
for (const item of menu) {
  console.log(item);
}

// View Menu Entries
for (const item of menu.entries()) {
  console.log(item);
}

// Getting Index of Elements
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
