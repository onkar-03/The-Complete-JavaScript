'use strict';
//------------- Working with Strings :
// - They are Primitives i.e they are not Objects and have no Methods
// - All Primitives in Js : Null, Boolean, String, Number, Undefined, Symbol
// - They are also Zero '0' based Index wise
// - String characters can be accessed using teh Indexes as well

// --- 1) .length : Used to determine the Length of the String, includes space as well

// --- 2) .indexOf() : Used to determine the Index of a character / word in the String
// - Returns the First occurrence of a character / word in a String

// --- 3) .lastIndexOf() :
// - Used to determine the Last Index of a character / word in the String.
// - Returns the Last occurrence of a character / word in a String
// - Also Remember that the Words we search for are case sensitive means 'Portugal' & 'portugal' both are different

// --- 4) .slice(startIndex,endIndex) :
// - Used to extract a section of a string and returns it as a new string, we can store the new string in a data structure etc..
// - It does not alter the original string
// - If the endIndex is Skipped then it prints the whole String starting from startIndex
// - If endIndex is specified then it Includes String from StartIndex to EndIndex - 1
// - Length of the String Extracted will always be endIndex - startIndex
// - Negative Index means that it will start counting from the End, -1 means the End of String

// - 5)

const airline = 'TAP Air Portugal';
const plane = 'A320';

// --- Printing letters of String using Indexes
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log(plane[3]); // 0

// --- Another way to do the same
console.log('Andy'[3]); // y

// --- Calculating the Length of String
console.log(airline.length); // 16 (Includes Space as well)
console.log('John Rhodes'.length); // 11 (Includes Space as well)

// --- Finding Index of a character in a String
console.log(airline.indexOf('r')); // 6 (Returns the Index of First Occurrence of character in the String)

// --- Finding Last Index of a character in a String
console.log(airline.lastIndexOf('r')); // r (Returns the Index of LastOccurrence of character in the String)

// --- Finding the Index of entire Words
console.log(airline.indexOf('Portugal')); // 8 (Returns the Index of P of Portugal)

// --- Slicing the String
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 10)); // Air Po

// --- Fetching teh First word of Input String
console.log(airline.slice(0, airline.indexOf(' '))); // Tap

// --- Fetching teh Last word of Input String
// - As we dont want the space to be included we write + 1
// - Because we know that the startIndex is Included in the String Printed
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// --- Printing String using Negative Index
console.log(airline.slice(-2)); // al

// --- Exercise :
// - Take an Input of Seat for an Airplane and Print if its the L / Middle / R
const checkMiddleSeat = function (seat) {
  // B & E are middle Seats
  // Get the KLast character and compare if its B / E
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('Middle Seat');
  else console.log('Not a Middle Seat');
};

checkMiddleSeat('11B'); // Middle Seat
checkMiddleSeat('23C'); // Not a Middle Seat
checkMiddleSeat('4E'); // Middle Seat

// -------- Why does all of this work if String is Primitive Data Type as we know ??
// - ANSWER : Well js is very smart, when we call a method for a String Js automatically behind the scene converts String Primitive to String Object with the same content hence all these methods work for the String Data Type
// - This Process is called 'Boxing', because it basically take the String and puts it in a BOX which is the Object
// - Internally calls new String() with the Content we provided
// - When work is done the Result is converted to a Regular String Primitive
// - In fact all String Methods return Primitives
console.log(new String('Andy')); // Object Box
console.log(typeof new String('Andy')); // Object
