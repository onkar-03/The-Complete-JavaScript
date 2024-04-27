'use strict';
// -------------------- Callback Function :
// - Why use Callback Function ??
// - 1) Callback Functions makes it easy to spread out code into more reusable and interconnected parts
// - 2) Callback Functions allow us to create abstraction

// - What is abstraction ??
// --- In simple words its like hiding detail of some code implementation because we dont really care about all that detail

//  - Converts a String Input to a String without and spaces and in Lowercase
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

// - Converts just the First word of String to Uppercase
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// - Higher-order function
// - Takes a String & Function as parameters hence a Higher Order Function
// - Converts the first word of String to Uppercase
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  // - Printing the name of the function used to transform the strings
  console.log(`Transformed by: ${fn.name}`);
};

// - Higher Order Function : transformer()
// - Callback function : upperFirstWord
// - Callback means means that the Function gets called only when the '${fn(str)}' is executed, as we dont write the () with the function name in arguments
// - Output : JavaScript is the best! -> JAVASCRIPT is the best!
transformer('JavaScript is the best!', upperFirstWord);

// - Higher Order Function : transformer()
// - Callback function : oneWord
// - Callback means means that the Function gets called only when the '${fn(str)}' is executed, as we dont write the () with the function name in arguments
// - Output : JavaScript is the best! -> javascriptisthebest!
transformer('JavaScript is the best!', oneWord);

// - JS uses callback all the time
const high5 = function () {
  console.log('👋');
};

// - Higher Order Function : addEventListener()
// - Callback Function : high5
document.body.addEventListener('click', high5);
