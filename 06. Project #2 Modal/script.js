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

    // -------------------- Working with Classes :
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
  // - closeModal() means that we call the function as soon as Js loads
  // - closeModal means we call the function only when the click happens
  overlay.addEventListener('click', closeModal);
}

// -------------------- Handling Key Press Events :
// - Right now we can already close the modal by clicking the close button and by clicking outside of the model.
// - But usually there is also a third way and that's by hitting the escape key on the keyboard
// - So in order to listen for keyboard events, we still need to use add event listener.
// - Keyboard events are so-called global events because they do not happen on one specific element. And for global events like keyboard events, we usually listen on the whole document.
// - There are actually three types of events for the keyboard. There is the key down, the key press, or the key up

// This function here will actually be executed for any key press that happens.
// document.addEventListener('keydown', closeModal);

// -------------------- Escape Key Only :
// - If we want the popup to close only for Esc key then we need to
// - The information about which key was pressed will be stored in the event that is going to occur as soon as any key is pressed
// - So remember, as I hit any key here on the keyboard, a key down event is generated, and our listener function is waiting for that event to happen.
// - Anytime that an event like this occurs, JavaScript does in fact generate an object and that object contains all the information about the event itself, and we can then actually access that object in the event handler function
// - So we pass event ass a parameter in the event handler function
// - When keypress is done the event object itself calls the event handler function to execute, we dont call the function we only define it i.e saying call that function when a keydown event happens
// .key is used to check the key pressed on the keyboard
document.addEventListener('keydown', function (event) {
  // Checking if the Escape key is pressed or not
  if (event.key === 'Escape') {
    // Checking that the Popup is not already hidden
    if (!modal.classList.contains('hidden')) {
      // If not already hidden then we close the Popup
      closeModal();
    }
  }
});
