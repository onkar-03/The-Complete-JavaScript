'use strict';

//------------- Working with Strings PART 3 :
// - 1) .split() : It is used to split a string into an array of substrings based on a specified separator and remember it returns the new array
// - 2) .join() : It is used to join all elements of an array into a string and remember it does not return the new array. You can specify a separator to be used between each element while joining
// - 3.) .padStart(targetLength , padString) : This method pads the current string with another string (repeated, if needed) until the resulting string reaches the given length
// - 4) .padEnd(targetLength , padString) : The padEnd() method is similar to padStart(), but padding is applied from the end (right) of the string
// - 5) .repeat() : Used to repeat a string Multiple times

// --- Using .split() Method :
const userName = 'Onkar Patel';
console.log(userName.split(' '));

// - Now we can directly destructure the array now as follows :
const [firstName, lastName] = 'Onkar Patel'.split(' ');

// --- Using .join() Method :
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// --- Capitalize first character of Each word of the String
function capitalization(input) {
  // - Storing all the words of the string in an array
  const names = input.split(' ');
  const namesUpper = [];

  for (let word of names) {
    // Method 1
    // - Capitalize first character of each word
    // - Then Join it with the rest of the word using slice
    // namesUpper.push(word[0].toUpperCase() + word.slice(1));

    // Method 2
    // -Replace first character of each word with Uppercase Letter
    namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  // Join back all the words of the array to form the string
  console.log(namesUpper.join(' '));
}

capitalization('onkar patel');

// --- Padding a String
const message = 'Goto gate 23'; // length 12
console.log(message.padStart(20, '-').padEnd(30, '-'));

// --- Masking CreditCard using Padding
const maskCreditCard = function (number) {
  // - converting a number to a string
  const str = number + '';

  // - Taking the last 4 digits explicitly
  const last = str.slice(-4);

  // - Padding the rest of the digits with *
  return last.padStart(str.length, '*');
};

const creditCard = maskCreditCard(123456789);
console.log(creditCard);

// --- Using .repeat()
const alertMessage = 'Bad Weather Condition dont go Out !! ';
console.log(alertMessage.repeat(3));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5); // → There are 5 planes in line 🛩🛩🛩🛩🛩
planesInLine(3); // → There are 3 planes in line 🛩🛩🛩
