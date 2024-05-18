/*
DOM: (Document Object Model)

• Allows us to make JavaScript interact with the browser;
• We can write JavaScript to create, modify and delete HTML elements; set styles, classes and attributes; and listen and respond to events
• DOM tree is generated from an HTML document, which we can then interact with;
• Dom is very complex API that contains lots of methods and properties to interact with the DOM tree; 
*/

// --- Selecting elements ---
// Selects the <html> tag
// Selects the whole Webpage / Document
console.log(document.documentElement);

// Selects the <head> tag
document.head;

// Selects the <body> tag
document.body;

// querySelector uses CSS selector to select the first matching element name
document.querySelector('.header');

// querySelectorAll uses CSS selector to select all the elements that match the given element name and returns a NodeList collection
document.querySelectorAll('.section');

// Selects an individual element using a specific id
// No need to use the '#' with the Id name if we use .getElementById
document.getElementById('section--1');

// Selects all elements with specific tag name and returns a HTMLCollection
document.getElementsByTagName('buttons');

// Selects all elements with a given class name and returns a HTMLCollection
document.getElementsByClassName('btn');

// --- Creating and Inserting Elements ---

// To Insert an HTML Element we use
header.insertAdjacentHTML;

// Inserts a text as nodes into the DOM tree at a specified position
header.insertAdjacentHTML(position, text);

// Create, modify and prepend element
const message = document.createElement('div');
message.classList.add('cookie-message');

// --- Read & Set Content ---
// 1
message.textContent =
  'We use cookies for improved functionality and analytics.';

// 2
message.innerHTML = `
We use cookies for improved functionality and analytics.
<button class='btn btn--close--cookie'>Got it!</button>
`;

// To add as first child to the Page say header we use .prepend
header.prepend(message);

// To add as last child (moves the element from first child to last child) we use .append
// (!) The DOM element message is unique, it can only exist in one place at a time, hence the message moved from first to last child
header.append(message);

// Creating Copy of 'message'
// Copy an element and all its child elements (prepends a new copy of the message element)
header.prepend(message.cloneNode(true));

// Add element before or after an element as a sibling
header.before(message);
header.after(message);

// --- Delete elements ---
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // New way of removing element
  message.remove();

  // Old way of removing element
  message.parentElement.removeChild(message);
});
