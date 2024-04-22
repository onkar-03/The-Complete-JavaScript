'use strict';

/* 
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.

Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
} 
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1 :
// - Fetching teh Index + Element from array
// - Hence we use the .entries() on array
let scores = game.scored.entries();
for (let [i, player] of scores) {
  console.log(`${i + 1}: ${player}`);
}

// Task 2 :
// - We need to fetch the values ot calculate the average of odds
const odds = Object.values(game.odds);
let avg = 0;
for (let odd of odds) {
  avg += odd;
}
avg /= odds.length;
console.log(avg);

// Task 3 :
// - Need to fetch the team as well as the odds hence we use .entries on Object
// - Destructuring Arrays then into teams and arrays
for (const [team, odd] of Object.entries(game.odds)) {
  // Saving the team name if they exist
  const teamName = game?.[team];

  if (teamName) {
    console.log(`Odd of victory ${teamName}: ${odd}`);
  } else {
    console.log(`Odd of draw: ${odd}`);
  }
}

// Bonus: Task 4
const scorers = {};

for (const playerName of game.scored) {
  // - objectName[propertyName] : Used to access teh properties of an Object
  // - objectName[propertyName] = value; used to set the values of properties of an Object
  // - If the Name already exists hence increase the score by 1
  // - If its the FIRST goal of the player set the value to 1
  // - We dont use  =scorers['playerName'] as playerName is not a property name rather a variable itself holding the value in it
  // - When we have property names then we use the '' for them
  scorers[playerName]++ || (scorers[playerName] = 1);
}

console.log(scorers); // → {Lewandowski: 2, Gnarby: 1, Hummels: 1}
