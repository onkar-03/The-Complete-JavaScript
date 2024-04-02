let numNeighbors;

// Converting to Number as we use strict equality operators to compare
numNeighbors = Number(prompt('Enter Number of Neighboring Countries'));

if (numNeighbors === 1) {
  console.log('Only 1 Border');
} else if (numNeighbors > 1) {
  console.log('More Than 1 Border');
} else {
  console.log('No Borders');
}

// Using Strict Equality is a good practice as loose equality has many weird rules and behavior
