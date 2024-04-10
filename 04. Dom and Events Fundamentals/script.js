'use strict';

// -------------- DOM Selection & Content Access :

// A) Query Selector :
// - A method in JavaScript that allows you to select elements from the DOM (Document Object Model) using CSS selector syntax
// - It returns the first element within the document that matches the specified selector, or null if no matches are found.

// B) Text Content :
// - To select the text content of an element with a class name, you can use the querySelector() method to select the element by its class name
// - Then access its text  using .textContent property

// Selecting Elements
// console.log(document.querySelector('.message'));

// Access Content of Element
console.log(document.querySelector('.message').textContent); // Start Guessing

// -------------- DOM Manipulation - Selecting & Manipulating Elements :

// Selecting Elements and Changing Content
document.querySelector('.message').textContent = '🥳 Correct Number';

// Printing
console.log(document.querySelector('.message').textContent); // 🥳 Correct Number

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// - To set a value to the selected element with a class name, you can use the querySelector() method to select the element by its class name
// - Then set its value using the .value property
document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);
