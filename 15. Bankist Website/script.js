'use strict';

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

const header = document.querySelector('.header');

// Creating an Element suing .createElement(tagName)
const message = document.createElement('div');

// Adding classes to the created element
message.classList.add('cookie-message');

message.innerHTML = `
We use cookies for improved functionality and analytics.
<button class='btn btn--close--cookie'>Got it!</button>
`;

header.after(message);

// --- Setting the Style
// To set the style we use the .style.propertyName where property name is in camelCase version

// A) Setting the background color & width
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// --- REMEMBER : These styles set using the .style property are all inline styles, i.e styles directly here in the DOM

// B) To get a style that was set explicitly (Directly in the DOM):
// - The styles that are defined using the style property as inline styles can only be accessed using the '.style' property

// - As the backgroundColor was a set explicitly we can access it using the .style property
console.log(message.style.backgroundColor); // rgb(55, 56, 61)

// - As color was not set explicitly using the style property we can access it using the .style
console.log(message.style.color); // empty (the color hasn't been set explicitly)

// C) To get an style that was set implicitly (In .css file)
// To get implicit styles we have to use the getComputedStyle(element).styleName
console.log(getComputedStyle(message).color); // returns the color
console.log(getComputedStyle(message).height); // returns the height

// D) Changing the Height of the message
// message.style.height used to set the new height explicitly
// getComputedStyle.height returns a string
// If we want to add a number to it first we need to convert it to a Number using Number.parseFloat() we convert it to a Floating Point Number
// Then we add the Number and the + 'px' to it to make it a CSS property value
//  10 specifies the base that we want to use that is the Decimal Base (10)
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
console.log(message.style.height);

// --- Working with CSS Custom Properties ---
// Set or change an CSS custom property using .setProperty(propertyName,Value)
// To select the root property we need to use the 'document.documentElement'
document.documentElement.style.setProperty('--color-primary', 'orange');

// --- Attributes ---
// All the src, img, class, id etc... are all attributes here
const logo = document.querySelector('.nav__logo');
const link = document.querySelector('.link');

// Standard attributes
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';
