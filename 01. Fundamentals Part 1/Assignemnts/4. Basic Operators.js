// All these variables wont change in the future hence declared them as constants
const country = 'India';
const continent = 'Asia';
const isIsland = false;
const language = 'Hindi';

// Population changes over time hence it shouldn't be const
// Population in millions
let population = 1417;

console.log(
  country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak Hindi',
);
console.log(population / 2 + ' ' + 'millions');
population++;
console.log(population + ' ' + 'millions');
console.log(population > 6);
console.log(population < 33);

console.log(
  country + 'is in ' + continent + ', and its ' + population + ' speak Hindi',
);
