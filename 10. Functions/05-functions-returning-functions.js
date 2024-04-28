'use strict';
const greet = function (greeting) {
  return function (userName) {
    console.log(`${greeting} ${userName}`);
  };
};

// Method 1 :
// - Function Calling
// - Storing thee returned Function in a variable
// - Now the greeterHey has the Function returned stored in it
const greeterHey = greet('Hey');

// - Hence now we can call the greeterHey variable that has the Function Stored in it with a suitable Parameter
greeterHey('David');

// Method 2  :
// - Calling greet('Hello') returns a Function hence we can simultaneously call the Function returned with another parameter too like this :
greet('Hello')('Onkar');

// Challenge :
// - Arrow function dont need {} / return keyword if one one statement to execute
const greeting = greeting => userName => console.log(`${greeting} ${userName}`);

greet('Hii')('Onkar');
