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

// Selecting all Direct Child nodes of h1
// It includes text nodes and comment nodes
// This returns every single node type (element nodes, text nodes, comment nodes, etc.)
console.log(h1.childNodes);

// To get only the direct child HTML elements of the h1 element, we use .children
// Gives us the HTML Collection, of the direct children of h1
console.log(h1.children);

// We can also select the first and last element child directly
h1.firstElementChild.style.color = 'red'; // Changes color of the first child element
h1.lastElementChild.style.color = 'yellow'; // Changes color of the last child element

// --- Going Upwards: Parent ---

// Selecting the direct parent node of h1
// This can be any node type (element, text, comment, etc.)
console.log(h1.parentNode); // <div class="header__title">...</div>

// Selecting the direct parent element of h1
// This must be an element node, similar to the children use in the children
console.log(h1.parentElement); // <div class="header__title">...</div>

// Selecting ancestor elements of h1 (direct or indirect)
// .closest() method finds the closest ancestor matching the selector
// It receives a query string like querySelector / querySelectorAll
// Used to select the closest ancestor element with the specified class '.header'
h1.closest('.header').style.background = 'var(--gradient-secondary)';

// --- Going Sideways: Siblings ---

// In JS, we can only access the direct siblings: previous and next

// Selecting the previous sibling element of h1 (returns null if none exists)
console.log(h1.previousElementSibling); // null

// Selecting the next sibling element of h1
console.log(h1.nextElementSibling); // <h4>A simpler banking experience for a simpler life.</h4>

// Selecting the previous sibling node of h1 (can be any node type, including text nodes)
console.log(h1.previousSibling); // #text

// Selecting the next sibling node of h1 (can be any node type, including text nodes)
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
