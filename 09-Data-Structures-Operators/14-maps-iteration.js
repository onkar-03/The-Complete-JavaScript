'use strict';
// Object
let openingHours = {
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

// ------------- Maps Iteration :
// - We saw that we can add elements to the map using the .set() function
// - However there is another way to add elements to the map i.e by passing values in form of Array of Arrays inside the new Map() function

const question = new Map([
  ['question', 'What is the Best Programming Language in the World?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! :D'],
  [false, 'Wrong! :('],
]);

console.log(question);

// --- Fetching Object as an Array of Arrays
console.log(Object.entries(openingHours));

// --- Converting Objects to Maps
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// --- Iteration on Maps
console.log(question.get('question'));
for (let [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// -Converting the String Input of User to Number
const answer = Number(prompt('Your answer'));
console.log(answer);

// - Question.get('correct') === answer : true
// - Then we do question.get(true)
console.log(question.get(question.get('correct') === answer));

// --- Convert map to array
// - Unpacking the Map using the spread operator
console.log(...question); // → (7) [Array(2), Array(2), Array(2), ...]

// - Converting only Keys to an Array
console.log([...question.keys()]); // → (7) ['question', 1, 2, 3, 'correct', true, false]

// - Converting only Values to an Array
console.log([...question.values()]); // → (7) ['What is th…language?', 'C', 'Java', ...]
