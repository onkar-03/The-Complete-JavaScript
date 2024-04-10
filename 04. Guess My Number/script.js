'use strict';

// A) Query Selector :
// - A method in JavaScript that allows you to select elements from the DOM (Document Object Model) using CSS selector syntax
// - It returns the first element within the document that matches the specified selector, or null if no matches are found.

// B) Text Content :
// - To select the text content of an element with a class name .message, you can use the querySelector() method to select the element by its class name
// - Then access its text  using .textContent property

console.log(document.querySelector('.message').textContent);
