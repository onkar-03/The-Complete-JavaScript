// ---- Event Delegation ----

// Event delegation is a technique in JavaScript that involves leveraging the event bubbling (or propagation) mechanism to manage events more efficiently. Instead of attaching event listeners to multiple child elements, you attach a single event listener to a common parent element. This parent element can then handle events for multiple child elements.

// Steps
// 1. Add eventListener to common parent element
// 2. Determine what originated the event

/* HTML
<ul id="parent">
  <li class="child">One</li>
  <li class="child">Two</li>
  <li class="child">Three</li>
  <li class="child">Four</li>
  <li class="child">Five</li>
</ul>;
*/

// Obvious approach
const children = document.querySelectorAll('.child');

// Traversing the NodeList returned by .querySelectorAll
children.forEach(child => {
  child.addEventListener('click', () => {
    /* Do Something */
  });
});

// Event Delegation
const parent = document.querySelector('.parent');

parent.addEventListener('click', event => {
  console.log(e.target); // Identify where the event happened

  if (event.target.classList.contains('child')) {
    // Check if the element is li
    /* Do Something */
  }
});

// There is no need to add new event listeners to new elements with Event Delegation
const newLi = document.createElement('li');
newLi.textContent = 'Six';
parent.append(newLi);

/* Making the event delegation work requires 4 steps:
1. Determine the parent of elements to watch for events
2. Attach the event listener to the parent element
3. Use event.target to select the target elements
4. Check if the target is the desired element */
