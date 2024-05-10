'use strict';

// --- More ways to create Arrays:
// - Up until now we created arrays using 2 different methods:

// - A) Method 1:
// - Using the default array declaration method
console.log([1, 2, 3]);

// - B) Method 2:
// - Using the new Array() constructor function
console.log(new Array(1, 2, 3));

// - C) Method 3:
// - Passing in only one argument inside the new Array() constructor function
// - Creates an array of length 7 which is empty
const x = new Array(7);
console.log(x); // - [empty x 7]

// --- Filling the Empty Array
// - For this we use the .fill() method to fill the array
// - .fill(Value, startIndex, endIndex)
// - startIndex (Inclusive) & endIndex (Exclusive)
x.fill(4, 3, 5);
console.log(x); // - [empty x3, 1, 1, empty x2]

// - IMPORTANT: The fill method mutates the original array
// - Filling 10 form 4th(inclusive) Index to 6th(exclusive)
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(69, 4, 6);
console.log(arr); // - [1, 2, 3, 4, 10, 10, 7]

// --- Using Array.from() method:
// - Here we are using teh .from() on Array constructor function
// - Array is a func on which we call the .from method
// - The first argument is the Object specifying the length of the Object
// - The second Object is mapping function which is similar to the callback function that we pass in maps
// - In the callback function we get access to the Element and the Index as well
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // - [1, 1, 1, 1, 1, 1, 1]

// - Printing array using index
// - '_' used to leave the argument as empty
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); // - [1, 2, 3, 4, 5, 6, 7]

// - Generate 100 random Dice Rolls using Array.from() function
const w = Array.from(
  { length: 100 },
  (_, i) => Math.trunc(Math.random() * 6) + 1
);
console.log(w);

// - Iterables like Strings Maps Sets can be converted to real arrays using Array.from()
// - Thats one of the reasons its called Arrays.from() means creating arrays from other things
// - Also can be used for querySelectorAll() if u remember it returns a NodeList similar to Array with all the selected elements, its not a real array so does not have most of the array methods like maps an reduce etc.. with it
