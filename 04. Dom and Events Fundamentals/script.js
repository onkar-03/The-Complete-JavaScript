'use strict';
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

// -------------- Manipulating CSS Styles using Js :
// - Manipulating CSS styles using JavaScript is a common technique used to dynamically change the appearance or layout of HTML elements on a webpage.
// - There are several ways to accomplish this :
// - 1. Dynamically modifying CSS 'style'
// - 2. Adding or removing classes
// - 3. Manipulating CSS Rules
// - For CSS style names having multiple words while being used in Js needs to be written in came case notation. For example : background-color -> backgroundColor in Js
// - Whenever we specify styles we need to write the values in a string '' and not a number

// ------------------ Secret Number :
// - Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
// - (+1) at the End to make the range from 0 (inclusive) to 1 (inclusive)
// - (*) Number means we want a Number between 0 (inclusive) and Number (inclusive)
// - Math.trunc() used to provide only Integer Part of the Number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//Testing
console.log(secretNumber);

// ------------------ Default Score :
let score = 20;

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
  // console.log(guess, typeof guess);

  // A) Case of No Input :
  // If 0 (False) Then gets converted to True
  // If any other number (True) then we dont want if to get executed ! changes the value to False
  if (!guess) {
    // Display Text
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
  // Correct Guess
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';

    // Changing the color of the whole body on correct guess
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Width of Number
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
  // When guess is too high
  else if (guess > secretNumber) {
    // Only is our score is not 0
    if (score > 1) {
      // Display Text
      document.querySelector('.message').textContent = '📈 Too High!';
      //Decrease Score on wrong guess
      score--;
      // Update the Score
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is too low
  else if (guess < secretNumber) {
    // Only is our score is not 0
    if (score > 1) {
      /// Display Text
      document.querySelector('.message').textContent = '📉 Too Low!';
      // Decrease Score on wrong guess
      score--;
      // Update the Score
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
