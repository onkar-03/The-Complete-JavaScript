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
console.log(btnOpenModal);

// Printing each elements content to console
for (let i = 0; i < btnOpenModal.length; i++)
  console.log(btnOpenModal[i].textContent);
