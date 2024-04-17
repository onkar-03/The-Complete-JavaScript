'use strict';

// ------------- Destructuring Arrays :
// - Destructuring refers to the process of resolving COmplex Data structures into simple ones
// - An ES6 Feature that allows you to extract values from arrays and assign them to variables in a concise and readable way.
// During Destructuring the original arrays are not destroyed / changed

// Example 1 :
const arr = [1, 2, 3];

// A) Method 1
// - Here we retrieve the data from array and store them in different variables one by one
const a = arr[0];
const b = arr[1];
const c = arr[2];

// B) Method 2
// - Assigned the values of array to variables
// - Whenever Js sees the [] on the LHS it knows its destructing array thats on the right side
// - const [ ] = array; -> Destructuring Syntax
const [x, y, z] = arr;
console.log(x, y, z);

// Example 2 :
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

// - Destructuring / Extraction of Data from arrays
// - Storing two categories of food of the restaurant
// - If we only want the First and Third elements of categories to be selected then we can do this by leaving a hole in there
let [first, , third] = restaurant.categories;
console.log(first, third); // Italian Vegetarian

// ----------- Switching Variables :

// Method 1 :
// - Using a Temporary Variable
// let temp = first;
// first = third;
// third = temp;
// console.log(first, third);

// Method 2 :
// Using Destructing method
// Simply write the way & the way we wan tit to be
[first, third] = [third, first];
console.log(first, third);

// - Destructing Starter and Main Menu array items of the Object
const [starter, mainCourse] = restaurant.order(0, 1);
console.log(starter, mainCourse); // Focaccia Pizza

// ----------- Destructing Nested Arrays :
// - To skip any Element we leave a hole
const nested = [1, 2, [4, 5]];
const [i, , j] = nested;
console.log(i, j);

// - Extracting all individual Elements even form nested arrays
// - To skip any Element we leave a hole
const [k, , [m, n]] = nested;
console.log(k, m, n);

// - Assigning default values while Destructing
const [p = 1, q = 1, r = 1] = [8, 9];

// - As we dont have three elements in the array the r would be undefined if no default value given
console.log(p, q, r); // 8 9 1
