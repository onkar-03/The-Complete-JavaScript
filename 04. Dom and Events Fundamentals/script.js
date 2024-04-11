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
// console.log(document.querySelector('.message').textContent); // Start Guessing

// -------------- DOM Manipulation - Selecting & Manipulating Elements :

// Selecting Elements and Changing Content
// document.querySelector('.message').textContent = '🥳 Correct Number';

// Printing after changing
// console.log(document.querySelector('.message').textContent); // 🥳 Correct Number

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// - To set a value to the selected element with a class name, you can use the querySelector() method to select the element by its class name
// - Then set its value using the .value property
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);

// -------------- Handling Clicking Events :

// A) What is an Event :
// - An event refers to an action or occurrence that happens within the browser or web page.
// - These events can be triggered by various actions such as user interaction (like clicking a button or moving the mouse etc ...)

// B) What is EventListener : '.addEventListener()'
// - An event listener is a function that waits for a specific event to occur on a particular HTML element or on the whole document.
// - It's a mechanism used to handle events triggered by user interactions, such as clicking a button, hovering over an element, submitting a form, etc.
// - The .addEventListener() method takes in 2 arguments : Type of Event, Listener Function
// - Event Type : This is a string representing the type of event to listen for. Eg : 'click'
// - Listener Function : Define an Event Handler, this is a function that will be called when the specified event occurs.  This function is also known as an event handler or callback function. It can be an anonymous Function
// - The Listener Function gets called when the specified event occurs automatically by the Js Engine

// Steps :
// - Select the Element by its Class / Id name on which we want to add an event
// - Use the .addEventListener() method to add an event
// - If say we want an event to happen on click we type 'click' in type of event
// - We want to display the value on click to the console
document.querySelector('.check').addEventListener('click', function () {
  // Action we want on the click event
  // Converting the User Input to Number
  // As what ever we get from the User is generally a string
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // A) Case of No Input :
  // If 0 (False) Then gets converted to True
  // If any other number (True) then we dont want if to get executed ! changes the value to False
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
});
