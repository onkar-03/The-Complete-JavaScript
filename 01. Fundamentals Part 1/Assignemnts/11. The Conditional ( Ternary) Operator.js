// All these variables wont change in the future hence declared them as constants
const country = 'India';
const continent = 'Asia';
const isIsland = false;
const language = 'Hindi';

// Population changes over time hence it shouldn't be const
// Population in millions
let population = 1417;

//Using Ternary Operator
console.log(
  `The country population is ${population > 33 ? 'above' : 'below'} average`,
);
