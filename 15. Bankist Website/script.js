'use strict';

// All Selections
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Old way top Loop
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// As btnsOpenModal is a node list as we used .querySelectorAll, and a node list has a forEach method hence we use that
btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////////////
// ---- Implementing Smooth Scrolling ----

// Event Listener
buttonScrollTo.addEventListener('click', e => {
  e.preventDefault();

  // OLD SCHOOL METHOD:
  // - Fetching the coordinates of the Section 1 on the Page
  // - For this we use the .getBoundingClientRect() method on Section 1
  // - The .getBoundingClientRect() relative to the current viewport width, all the x, y, top, bottom etc...
  // - It returns the DOMRect Object
  const s1Coordinates = section1.getBoundingClientRect();
  console.log(s1Coordinates);

  // - To view the Current X & Y Coordinates
  // - They are properties of the Window interface in JavaScript that provide the number of pixels the document has been scrolled horizontally and vertically, respectively.
  // -They are commonly used to get the current scroll position of the document.
  console.log(`Current X/Y: ${window.pageXOffset} ${window.pageYOffset}`);

  // - To view the current height & width of the viewport
  console.log(
    `Height/Width of Viewport: ${document.documentElement.clientHeight}, ${document.documentElement.clientWidth}`
  );

  // Scrolling
  // - For that we use the window.scrollTo method
  // window.scrollTo(s1Coordinates.left, s1Coordinates.top); // ERROR: Scroll Issue

  // --- Scroll Issue with getBoundingClientRect() ---
  // - When using element.getBoundingClientRect() to obtain the position of an element on a webpage, the values returned are relative to the viewport, not the entire document
  // - This can lead to issues when trying to scroll to an element that is not currently within the initial view of the page
  // - If you are at the very start (top) of the page, the top value accurately reflects the element’s distance from the top of the document
  // -  However, if you are scrolled down, the top value only reflects the distance from the current viewport's top edge, not the document's top
  // - When you use this relative top value to scroll to an element, it doesn’t account for the current scroll position of the page. This causes scrolling inaccuracy

  // SOLUTION
  // - To correctly scroll to an element regardless of the current scroll position, you need to adjust the top value obtained from getBoundingClientRect() by adding the current vertical scroll position (window.pageYOffset).
  // window.scrollTo(
  //   s1Coordinates.left + window.pageXOffset,
  //   s1Coordinates.top + window.pageYOffset
  // );

  // MODERN METHOD
  // - It does the same job without the need to calculate manually all the values
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////////////////////////////////
// ---- Implementing Page Navigation ----

// Method 1 : (Inefficient)

// Selecting all of the Anchor Elements on the page
// Using .querySelectorAll() returns the node list
// We can now use forEach method to iterate over all of them and add an event listener
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    // Prevent scrolling to the section on click
    e.preventDefault();

    // Retrieve the value of a specific attribute 'href'
    // Store it into a variable
    const id = this.getAttribute('href');
    // console.log(id);

    // Implement Smooth Scrolling to that section
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// Method 2 : Event Delegation

// Selecting common Parent 'nav__links'
// Adding event to This common parent
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // To know where the happened we used e.target
  // Matching strategy, to check if the anchor links were clicked by matching their class names
  // If they match retrieve their attribute 'href'
  // implement the Smooth scrolling to that href attribute that was retrieved
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////////////////////////////////////////
// ---- Implementing Tabbed Components ----

// Selecting Tabs, Container & Content
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Using Event Delegation
// On Tabs container we implement event delegation for tabs when clicked
tabsContainer.addEventListener('click', function (e) {
  // To know which tab / element was triggered we use e.target
  // But in the Tab we have a button and a span containing the Number
  // We want the operation__tab class to be there when we click the Tab / Number
  // Hence we use the closest() method to get the element that has the operations__tab, whether we click the Button / Number
  const clicked = e.target.closest('.operations__tab');

  // Guard Clause
  // Incase we click between the tabs we dont want any operations to happen
  // We simply return right away
  if (!clicked) return;

  // Remove Active Class from Content & Tabs

  // Tabs
  tabs.forEach(e => {
    e.classList.remove('operations__tab--active');
  });

  // Content
  // First remove the active class from all the content tabs
  tabsContent.forEach(e => {
    e.classList.remove('operations__content--active');
  });

  console.log(clicked);

  // Activate Tabs
  // Add the active class to the clicked Tab
  clicked.classList.add('operations__tab--active');

  // Activate Content Area
  // Add the active class to the clicked Tab Content
  // The dataset attribute contains the Content number that should be displayed
  // All the attributes are in the Elements dataset property
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

////////////////////////////////////////////////////////////////////////////
// ---- Menu Fade Animation ----

// Refactoring code using function
const fade = function (e) {
  // Check if its a Link, means it contains nav__link class
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    // Select all sibling elements to Fade them away
    // For this we will use the closest() method to select common parent
    // Then use .querySelectorAll() to select all the siblings at once
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    // Selecting Logo to Fade away too
    const logo = link.closest('.nav').querySelector('.nav__logo');

    // If its not the hovered link we change the opacity to .5
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    // If its not the hovered link we change the opacity to .5
    logo.style.opacity = this;
  }
};

// Using Event Delegation
// As we need to ad eventListener() to every link & the Logo we attach it to a common parent using event delegation
const nav = document.querySelector('.nav');

// We use mouseover and not mouseenter as mouseenter does not bubble
// Method 1 : Using repetitive code for for functions except changing the opacity value
// Method 2 : Using Callback function and calling the function inside of it manually
// nav.addEventListener('mouseover', function (e) {
//   fade(e, 0.5);
// });

// For mouseout we want to set the opacity back to 1 thats it
// nav.addEventListener('mouseout', function (e) {
//   fade(e, 1);
// });

// Method 3 : Using the Bind Method
// The bind method is used to create a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called
// The this keyword is by default the currentTarget which is the nav container here
// But we can set the this keyword to whatsoever we want,like we want it to be the opacity hence we use it at the place of the opacity

// Passing 'arguments' to the function
nav.addEventListener('mouseover', fade.bind(0.5));
nav.addEventListener('mouseout', fade.bind(1));

////////////////////////////////////////////////////////////////////////////
// ---- Stick Navigation: Inefficient Method----
// We use the scroll method here which is not teh best solution as it fires for each and every scroll no matter how small a scroll event, we will look for a better method in the future

// Getting Initial coordinates of section 1, because as soon as we want reach the section 1 we wna the nav to be sticky on the page

// const initialCoordinates = section1.getBoundingClientRect();

// window.addEventListener('scroll', () => {
// Check if the Coordinates reached the Section 1
// If yes then add the sticky class to the nav
// To check we use the top value of the coordinates
// if (window.scrollY > initialCoordinates.top) nav.classList.add('sticky');
// Else remove the Sticky Nav
//   else {
//     nav.classList.remove('sticky');
//   }
// });

////////////////////////////////////////////////////////////////////////////
// ---- Stick Navigation: Using Intersection Observer API ----

// This API allows our code to basically observe changes to the way that a certain target element intersects another element, or the way it intersects the viewport

// Calculate the height of the navigation element and store it in the variable 'navHeight'
// We do this because we want to make the navigation bar "sticky", you need to know the height of the navigation bar to set the correct scroll threshold.
const navHeight = nav.getBoundingClientRect().height;

// Define the callback function for the Intersection Observer
// It has 2 arguments Entries and Observer
// The entries are an array of threshold values that we defined
const stickyNav = function (entries, headerObserver) {
  // Destructure the entries array to get the first entry
  const [entry] = entries;

  // We need to add the sticky class one when we reach the Section 1 i.e the Header is out of view
  // isIntersecting means we check if the specified target is in the viewport with the defined threshold value or not
  // Checking if the header is not intersecting (i.e., it has scrolled out of view)
  if (!entry.isIntersecting) {
    // If header is out of the view we add the 'sticky' class to the navigation element to make it sticky
    nav.classList.add('sticky');
  } else {
    // Otherwise, is the header is in the viewport then remove the 'sticky' class
    nav.classList.remove('sticky');
  }
};

// Define the options for the Intersection Observer
const headerOptions = {
  // The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target
  // Basically the element that the target is intersecting
  // Defaults to the browser viewport if not specified or if null
  root: null,

  // The number in the threshold property of the Intersection Observer API indicates the percentage of the target element's Intersection / Visibility required to trigger the observer's callback function. This value can range from 0 to 1
  // A threshold of '0' means that as soon as even one pixel of the target element is visible in the viewport or is no longer visible within the element specified by the root option, then the callback is invoked
  // And as we want the Nav to be sticky when no header section is visible we use the 0 value for the threshold property
  // We can define a array of values in the threshold property of the Intersection Observer API eg: [0, 0.2]
  threshold: 0,

  // The rootMargin property in the Intersection Observer API allows you to add or subtract space around the root element's bounding box when calculating intersections.
  // This can be useful for triggering the callback function earlier or later than it would normally occur based on the target element's intersection with the root.
  // Setting the root margin to be negative the height of the navigation element
  rootMargin: `-${navHeight}px`,
};

// Select the header element to be observed
const header = document.querySelector('.header');

// Create the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other
const headerObserver = new IntersectionObserver(stickyNav, headerOptions);

// Start observing the header element with the created Intersection Observer 'headerObserver'
// For this we use the .observer(targetName) method
headerObserver.observe(header);

////////////////////////////////////////////////////////////////////////////
// ---- Reveal sections effect ----

// Selecting Section that we want to monitor as the target
const allSections = document.querySelectorAll('.section');

// Callback function
const revealSections = function (entries, observer) {
  // Destructure the entries array to get the first entry
  const [entry] = entries;

  // If the section is not intersecting (i.e., it has scrolled out of view) then we dont want anything to happen so simply return
  if (!entry.isIntersecting) return;

  // Else if its intersecting then we want to make it visible
  // Hence making it visible on the viewport
  entry.target.classList.remove('section--hidden');

  // Unobserve the section once it is revealed, on the Page, Otherwise it keeps getting observed thought the scrolling on the page
  // To unobserve we use the .unobserve() method
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  // Root as viewport
  root: null,

  // Threshold for invoking the callback function is 15%, means when at least 15% of the section is in the viewport we wan tto make the section visible
  threshold: 0.15,
});

// Looping over all the Sections of the page, and calling the observe method for each of them to execute the same visible animation for each of them
allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

////////////////////////////////////////////////////////////////////////////
// ---- Lazy Loading Images ----

// Choosing Images which are to be Lazy loaded they have the data-drc attribute in them
const image = document.querySelectorAll('img[data-src]');

// Callback Function
const loadImg = function (entries, imgObserver) {
  // Destructure the entries array to get the first entry
  const [entry] = entries;
  console.log(entry);

  // If the section is not intersecting (i.e., it has scrolled out of view) then we dont want anything to happen so simply return
  if (!entry.isIntersecting) return;

  // Else if its intersecting then we want to make it visible
  // Replacing the src attribute of img with teh data-src attribute to load the high resolution image
  entry.target.src = entry.target.dataset.src;

  // After the Loading of the Image is done by Js behind the scenes a load event is emitted, and also we want the blur filter to be removed when complete high resolution image is loaded
  // Hence we use the emitted load event and then remove the blur filter of the lazy-img
  entry.target.addEventListener('load', function () {
    // Remove the blur filter
    entry.target.classList.remove('lazy-img');
  });

  // Unobserve the section once it is revealed, on the Page, Otherwise it keeps getting observed thought the scrolling on the page
  // To unobserve we use the .unobserve() method
  imgObserver.unobserve(entry.target);
};

// Observer
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

image.forEach(img => {
  // Observer each image
  imgObserver.observe(img);
});

////////////////////////////////////////////////////////////////////////////
// ---- Slider Component ----

// Selecting all the slides
const slides = document.querySelectorAll('.slide');

// Selecting Buttons
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

// Selecting current slide, the first one as 0
let currentSlide = 0;

// Calculating number of Slides
const maxSlides = slides.length;

// Goto Slide
// The Logic remains the same no matter if the slide goes forward / backward
const gotoSlide = function (slide) {
  // Placing the current slide in Front
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

// Setting the Slides Side by Side
// First one at 0%, second at 100%, third at 200%
gotoSlide(0);

// Next Slide
const nextSlide = function () {
  // Check if its the last Slide ??
  if (currentSlide === maxSlides - 1) {
    // Reset
    currentSlide = 0;
  } else {
    // Moving to the Next Slide
    currentSlide++;
  }

  gotoSlide(currentSlide);
};

// Next Slide
const prevSlide = function () {
  // Check if its already the First Slide or not ??
  if (currentSlide === 0) {
    // If Yes Move to last slide
    currentSlide = maxSlides - 1;
  } else {
    // Else Move to the Previous Slide
    currentSlide--;
  }

  // Goto the Previous Slide
  gotoSlide(currentSlide);
};

// Adding events to buttons
btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', prevSlide);
