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

// ---------------- Nullish Coalescing Operator :

// - Introduced in ES2020
// - Used to handle situations like the special case we saw while using the OR operator
// - Written as ??
// - It works with the concept of nullish values and not falsy values
// - nullish values include 'null' & 'undefined' and not ('' & 0)
// - A soon as we get a Nullish value the Engine short circuits

// Example :
// - Here we want the value of guests number to be 0 but still we have 10 as O/P
// - This is because 0 is considered a falsy value hence the || does not print it
// restaurant.numberOfGuests = 0;
// const guests = restaurant.numberOfGuests || 10;
// console.log(guests); // 10

// - To tackle this we have a very new operator called the nullish coalescing operator
// - Here the first value is not a nullish value hence as soon as the Engine reads it it prints it also short circuits the code
const correctGuests = restaurant.numberOfGuests ?? 10; // 0
console.log(correctGuests);
