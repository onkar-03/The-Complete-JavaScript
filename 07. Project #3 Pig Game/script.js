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

// Declaring all variables
let currentScore, activePlayer, playing, scores;

const init = function () {
  // Starting Condition

  // Dice Img Hidden
  diceEl.classList.add('hidden');

  currentScore = 0;
  activePlayer = 0;
  playing = true;
  // Scores of both players scores in an array
  scores = [0, 0];

  // Reset the Score on the screen
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;

  // Reset the Current Score on the screen
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  // Remove the Winner class
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  // Reset the Background colors for Active and not Active Players
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

// Initialization
init();

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

// ------------------ Rolling Dice Functionality :
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

// ------------------ HOLD BUTTON Functionality :
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
  if (scores[activePlayer] >= 20) {
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

// ------------------ Reset game Functionality :
// - We dont write init() as we dont want the function to execute while Js Loads
// - We wan the function to execute only when the we press the reset button
btnNew.addEventListener('click', init);
