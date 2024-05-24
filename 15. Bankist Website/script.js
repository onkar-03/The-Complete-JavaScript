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
