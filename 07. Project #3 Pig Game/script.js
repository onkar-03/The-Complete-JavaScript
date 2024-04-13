'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Condition
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');
let currentScore = 0;

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // -------------- STEPS :
  // - 1. Generate a Random Number
  const dice = Math.trunc(Math.random() * 6) + 1;

  // - 2. Remove the Dice hidden class and make it visible
  diceEl.classList.remove('hidden');

  // - 3. Display the Dice Image According to the Number
  diceEl.src = `dice-${dice}.png`;

  // - 4. Check if the Number is 1 or Not
  if (dice !== 1) {
    // - 5. If not 1 add dice value to the current score
    currentScore += dice;
    current0El.textContent = currentScore; // Change Later
  } else {
    // - 5. If a 1 then reset the Score else add to the current score
    currentScore = '0';
  }

  // - 5. If a 1 then reset the Score else add to the current score
});
