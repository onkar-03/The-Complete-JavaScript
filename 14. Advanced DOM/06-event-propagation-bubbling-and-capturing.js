// ---- Event Propagation: ----
// 1. Event Generation
// - A click event happens on a link (anchor element)
// - The DOM generates the click event, but not directly at the target element (eg: anchor element)

// 2. Capturing Phase
// - The event is generated at the root of the document (top of the DOM tree)
// - The event travels from the document root down to the target element
// - During this phase, the event passes through all parent elements of the target element (e.g., HTML, body, section, paragraph) this is called the capturing phase

// 3. Target Phase
// - The event reaches the target element (eg: anchor element).
// - Events can be handled directly at the target with event listeners
// - Event listeners attached to the target run their callback functions (e.g., displaying an alert)

// 4. Bubbling Phase
// - After the target phase, the event travels back up to the document root
// - This is known as the bubbling phase
// - During this phase, the event passes through all parent elements again but only the parents, not any sibling elements

// 5. Event Propagation
// - Events can be handled at any parent element as the event bubbles up
// - It is as if the event occurred at each parent element it passes through
// - Event listeners attached to parent elements can also respond to the event

// 6. Event Handling Flexibility
// - By default, events are handled in the target and bubbling phases
// - Event listeners can be set up to listen during the capturing phase if needed
// - Not all events have capturing and bubbling phases some are created directly at the targets

// ---- Event Propagation ----

// Random Number Generator
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1);

// Random Color Generator
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// --- Event Listeners
document.querySelector('.nav__link').addEventListener('click', function (e) {
  // this keyword points to the element on which the event listener is attached to
  this.style.backgroundColor = randomColor();

  // View the Target Element
  // This e.target tells us the Origin where the Target event originated from. If we click the Link then the target returned is nav__link. Hence we can understand the Bubbling through this
  // e.currentTarget also returns the element to which the event listener is attached too, like here its the links/ nav__link class
  console.log('Link:', e.target, ':', e.currentTarget);
  console.log(e.currentTarget === this); // true

  // Stopping Event Propagation
  // Now the Bubbling wont take place as we stopped the propagation of the event from the target to all of its parents like to the .nav__links / .nav
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // this keyword points to the element on which the event listener is attached to
  this.style.backgroundColor = randomColor();

  // View the Target Element
  // This e.target tells us the Origin where the Target event originated from
  // If we click the Link container then the target returned is nav__links. Hence we can understand the Bubbling through this. This e.currentTarget tells us where the event handler is attached
  // e.currentTarget also returns the element to which the event listener is attached too, like here its the links container / nav__links class
  console.log('Link:', e.target, ':', e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    // this keyword points to the element on which the event listener is attached to
    this.style.backgroundColor = randomColor();

    // View the Target Element
    // This e.target tells us the Origin where the Target event originated from. If we click the parent container then the target returned is nav. Hence we can understand the Bubbling through this
    // e.currentTarget also returns the element to which the event listener is attached too, like here its the parent container / nav class
    console.log('Link:', e.target, ':', e.currentTarget);
  },

  // Capturing phase OFF
  false
);

// --- Explanation ---
// 1. We see that the event happens at the root of the document, then during the capturing phase, the event travels down the DOM tree and reaches the target element. When it reaches the target, the background color of the target element (nav__link) changes
// 2. During the bubbling phase, as the event travels back up the DOM tree, all the parent elements of the target element also handle the event and change their background color
// 3. Hence, it looks like the event occurred in all of its parent elements as well
// 4. By default, event listeners listen for events in the bubbling phase and not in the capturing phase. This is because the capturing phase is usually less relevant, whereas the bubbling phase is often more useful for event delegation and other purposes
// 5. To make an event listener listen during the capturing phase, you can set the third parameter of the `addEventListener` method to `true` (by default, it is `false`)
// 6. When set to `true`, the event listener will log each parent element first as the event travels from the top of the DOM tree down to the target element during the capturing phase
