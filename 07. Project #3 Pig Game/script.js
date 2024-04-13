'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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
let activePlayer = 0;
let playing = true;

// Scores of both players scores in an array
const scores = [0, 0];

const switchPlayer = function () {
  // - If we switch players we reset the current score of the previous player to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // - Now we switch the Player as soon as the Dice rolls 1
  activePlayer = activePlayer === 0 ? 1 : 0;
  // - Setting teh Current Score to start condition
  currentScore = 0;

  // Change the Background colors for Active and not Active Players
  // - Toggle adds class mentioned if not there and removes class if already present
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // If Playing State active only then do these
  if (playing) {
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
      // current0El.textContent = currentScore; // Change Later

      // Increase the Player score of the Active Player 0 / 1
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switching
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // If still playing only then do this
  if (playing) {
    // Add the Current score to existing Score of the Player
    scores[activePlayer] += currentScore;

    // Change the Score on the screen
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
  }

  // If score ?= 100 then That Player wins else we switch player
  if (scores[activePlayer] >= 100) {
    // Finish Game

    // No More Continuation of Game
    playing = false;

    // Declare the Player as Winner
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    // Remove Active Player as Game Over
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // Switching
    switchPlayer();
  }
});
