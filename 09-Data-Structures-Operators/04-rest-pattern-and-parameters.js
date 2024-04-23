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

// ------------- 1) Destructuring Using Rest  :
// - Its the opposite of spread operator !!
// - Used during Destructuring of Array & Objects
// - We know spread operator was used for building new arrays or to pass multiple values to a function
// - Rest is used to Collect different Elements and condense them into a single Array / Object
// - So spread operator (...) is used to unpack an array while the rest (...) is used to pack elements into a single array
// - Spread operator is used on the RHS of '='
// - Rest is used on the LHS of '='
// - Also the rest element must be the last element in the array, hence there can only be one rest in any destructuring assignment
// - Can be used where we want the variable names separated by commas and not values separated by commas

// Spread, as on RHS of '=' :
const arr2 = [1, 2, ...[7, 8, 9]];
console.log(arr2); // Array
console.log(...arr2); //Individual elements

// A) Using on Arrays :
// Rest, as on LHS of '=' :
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

// - Extracting Individual Elements from main Menu, also destructuring them into an array
// - While Destructuring also using the rest to bind the left over elements in a variable
// - Also using the spread Operator to gain individual elements access from arrays of the object restaurant
const [pizza, , risotto, ...others2] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, others2);

// B) Using on Objects :
// - Saving saturday property explicitly and other properties into a new object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// ------ 2) Functions Using Rest :
// - In Functions we used the spread operator to pass multiple arguments to the function
// - Rest used to bind multiple arguments into a single one and use it in the Function

// EG: Lets say we want to create a function add that gives us the sum of any number of arguments passed to it
// - Hence binding all the arguments passed to teh function under one head using rest
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

// Calling
add(2, 3);
add(2, 3, 7);
add(2, 3, 7, 9, 8);

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// Spread elements and sending it to the function
// Where the Rest operator again binds them under one single head
add(...x);

// Pizza Ingredients
restaurant.orderPizza('mushroom', 'sauce', 'cheese', 'veggies');
