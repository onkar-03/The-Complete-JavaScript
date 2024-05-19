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
console.log(document.head);

// Selects the <body> tag
console.log(document.body);

// querySelector() uses CSS selector to select the first matching element
const header = document.querySelector('.header');

// querySelectorAll() uses CSS selector to select all the elements that match the given element name
// It returns a Node List off all of the elements that match the given element name
// Remember the Node List does not change as soon as the DOM is changed / manipulated
// Also we know that the .querySelector() is available on documents as well as on all the elements as well
const allSelections = document.querySelectorAll('.section');
console.log(allSelections);

// Selects an individual element using a specific id
// No need to use the '#' with the Id name if we use .getElementById
document.getElementById('section--1');

// Selects all elements with specific tag name
// It returns a HTML Collection
// The thing to remember is the Collection is updated automatically as soon as the DOM changes
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Selects all elements with a given class name
// It returns a HTML Collection
// The thing to remember is the Collection is updated automatically as soon as the DOM changes
const btn = document.getElementsByClassName('btn');
console.log(btn);

// --- Creating and Inserting Elements ---
// To Insert an HTML Element we use
// insertAdjacentHTML;

// ---- Create, modify and prepend element ----

// Creating an Element suing .createElement(tagName)
const message = document.createElement('div');

// Adding classes to the created element
message.classList.add('cookie-message');

// Setting Content it the created Element
// Method 1
message.textContent =
  'We use cookies for improved functionality and analytics.';

// Method 2
message.innerHTML = `
We use cookies for improved functionality and analytics.
<button class='btn btn--close--cookie'>Got it!</button>
`;

// ----- IMPORTANT NOTE -----
// The Element we created is still not present in the DOM tree
// We need to insert it into the DOM Tree

// Inserting the Element created in the Header
// To add as first child to the Page say header we use .prepend
header.prepend(message);

// To add as last child (moves the element from first child to last child) we use .append()
header.append(message);

// ---- IMPORTANT NOTE -----
// (!) The DOM element message is unique, it can only exist in one place at a time, hence the message moved from first to last child

// Creating Copy of 'message'
// Copy an element and all its child elements (prepends a new copy of the message element)
// But thats not normally what we want in Real Life scenarios
// header.prepend(message.cloneNode(true));

// Add element before or after an element as a sibling
// The .before and .after methods in JavaScript are used to insert Nodes (elements or text) in the DOM relative to a specified element
header.before(message);
header.after(message);

// --- Delete elements ---
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // Old way of removing element
  message.parentElement.removeChild(message);

  // New way of removing element
  message.remove();
});
