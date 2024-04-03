// All these variables wont change in the future hence declared them as constants
const country = 'India';
const continent = 'Asia';
const isIsland = false;
const language = 'Hindi';

// Population changes over time hence it shouldn't be const
// Population in millions
let population = 1417;

// Decision Making
if (population < 50 && language == 'English' && !isIsland) {
  console.log(`You should live in ${country} !!`);
} else {
  console.log(`${country} does not meet your criteria !!`);
}
