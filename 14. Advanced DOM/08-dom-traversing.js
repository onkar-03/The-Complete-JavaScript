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

const h1 = document.querySelector('h1');

// Going downwards: child
// Selects all class with highlight within h1 (children)
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orange';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children); // Get all siblings
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
