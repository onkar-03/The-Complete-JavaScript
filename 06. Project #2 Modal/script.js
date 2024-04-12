'use strict';

// -------------------- Store Selections in Variables :
// - Rather than selecting classes / Ids / etc again and again
// - A better practice is to store te selections we need in variables
// - Then use the variables wherever we need them

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// Query Selector Limitations
// - Whenever we have multiple elements of same class then only the first element gets selected on using .querySelector()' method
// - To solve this issue we need to use the '.querySelectorAll()' method
const btnOpenModal = document.querySelectorAll('.show-modal');

//Printing to console
// console.log(btnOpenModal);

// Function created to add hidden class whenever we want to hide the popup
const closeModal = function () {
  //Hide them again
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Selecting Each Element
for (let i = 0; i < btnOpenModal.length; i++) {
  // btnOpenModal[i] : is the current element selected
  btnOpenModal[i].addEventListener('click', function () {
    // console.log('Button Clicked');

    // => Purpose :
    // - On click we want to display the hidden popup content & overlay
    // - This means we want to unhide the content & overlay already hidden
    // - This means we want to remove the 'hidden' class from the element so as to make it visible
    // - .classList property is used to access the classes of an HTML element To add or remove classes etc ...
    // - We dont use the . / # here to access classes or ids its only for the selector
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  // Closing popup on clicking the cross : btnCloseModal
  btnCloseModal.addEventListener('click', closeModal);

  // Closing the Popup on clicking outside the popup on the overlay
  // - Important : writing only closeModal & not closeModal()
  // - closeModal() means that we call teh function as soon as Js loads
  // - closeModal means we call the function only when the click happens
  overlay.addEventListener('click', closeModal);
}
