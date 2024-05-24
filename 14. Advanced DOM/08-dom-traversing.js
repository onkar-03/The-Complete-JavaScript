// DOM (Document Object Model) traversing refers to the process of navigating through the elements of the DOM tree, which represents the structure of an HTML document.
// Using DOM traversing, you can move between different nodes (elements, text nodes, etc.) to access, modify, or manipulate them.
//  This is a fundamental aspect of web development when interacting with and manipulating web pages dynamically.
// Dom Traversing is basically walking through the DOM, means we can select an element based on another element

// --- Uses of DOM Traversing
// Can be used to select elements relative to another element, like direct child / parent elements
// We also need DOM Traversing coz sometimes we dont know the structure of the DOM Tree here is where DOM Traversing plays an important role

/* HTML
<header class="header">
  <div class="header__title">
    <h1>
      <span class="highlight">banking</span>
      <span class="highlight">minimalist</span>
    </h1>
    <h4>A simpler banking experience for a simpler life.</h4>
    <button class="btn">Learn more</button>
    <img
      src="img/hero.png"
      class="header__img"
      alt="Minimalist bank items"
    />
  </div>
</header>
*/

// ---- DOM Traversing ----

// Selecting the H1 element using .querySelector
const h1 = document.querySelector('h1');

// --- Going Downwards: Children ---

// .querySelector / .querySelectorAll works on both document and elements
// Selecting all elements with the 'highlight' class that are descendants / children of the h1 element
// This selects only the 'highlight' classes that are children of the h1, regardless of how deep they are in the DOM Tree
console.log(h1.querySelectorAll('.highlight'));

// Selecting Child Nodes of h1
// It is used to access a live NodeList of all child nodes of a specified element, including elements, text nodes, and comments
//  This means that h1.childNodes will give you all the child nodes of the <h1> element, not just the child elements
// The NodeList is live, meaning it automatically updates if the child nodes of the element change
// It returns all Child Nodes Direct / Indirect
console.log(h1.childNodes);

// Selecting Direct Children
// It returns a live HTMLCollection of all child elements of a specified element.
// This means that h1.children will give you all the child elements of the <h1> element, excluding text nodes, comments, and other non-element nodes.
console.log(h1.children);

// We can also select the first and last element child directly
h1.firstElementChild.style.color = 'red'; // Changes color of the first child element
h1.lastElementChild.style.color = 'yellow'; // Changes color of the last child element

// --- Going Upwards: Parent ---

// Selecting the direct parent node of h1
// So, h1.parentNode will return the direct parent element and won't include any text or comment nodes that are siblings of the <h1> element
// Returns the parent node of the <h1> element, which could be any type of node (element, text, comment, etc.).
console.log(h1.parentNode); // <div class="header__title">...</div>

// Selecting the direct parent element of h1
// The parentElement property returns the parent element node of the specified element, similar to parentNode, but it specifically returns only the parent if it's an element node
// If the parent is not an element node (for example, it's a text node or the document node), parentElement returns null
console.log(h1.parentElement); // <div class="header__title">...</div>

// Selecting ancestor elements of h1 (direct or indirect)
// .closest() method finds the closest ancestor matching the selector
// It receives a query string like querySelector / querySelectorAll
// Used to select the closest ancestor element with the specified class '.header'
// Very helpful for Event Delegation
h1.closest('.header').style.background = 'var(--gradient-secondary)';

// --- Going Sideways: Siblings ---

// In JS, we can only access the direct siblings: previous and next

// .previousElementSibling specifically returns the previous sibling element node
// If there is no previous sibling element node, it returns null
// It only considers element nodes; text nodes, comment nodes, etc., are ignored
console.log(h1.previousElementSibling); // null

// .previousSibling returns the previous sibling node, which could be any type of node (element, text, comment, etc.)
// If there is no previous sibling node, it returns null
// It can return any type of node, not just an element node
console.log(h1.previousSibling); // #text

// .nextElementSibling specifically returns the next sibling element node.
// If there is no next sibling element node, it returns null
// It only considers element nodes; text nodes, comment nodes, etc., are ignored
console.log(h1.nextElementSibling); // <h4>A simpler banking experience for a simpler life.</h4>

// nextSibling returns the next sibling node, which could be any type of node (element, text, comment, etc.)
// If there is no next sibling node, it returns null
// It can return any type of node, not just an element node
console.log(h1.nextSibling); // #text

// In case we need all siblings, we can move up to the parent and then select all children
console.log(h1.parentElement.children); // HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]

// This gives us an HTMLCollection, which is not an array but is iterable
// We can convert it into an array using the spread operator '...'
// Then we can loop over the array using forEach and perform our manipulations
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)'; // Scales down all siblings of h1
  }
});
