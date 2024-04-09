// & ------------------------------> Lecture 01 <-------------------------------

// ^ Setting up Prettier & User Snippets : -----------------------------------

// Using strict mode in all scripts now!
// Changed the default "" for all strings and scripts of Js to '' in Prettier
'use strict';

const x = 23;

// Removed the () formatting by prettier in case of single parameters in function declarations,
const calcAge = birthYear => {
  2024 - birthYear;
};

// After setting Snippets 'cl' works for console.log()
console.log(x);

// & ------------------------------> Lecture 02 <-------------------------------

// ^ Installing Node.js & setting up Dev Environment : -------------------------

/* 
 1. Using VS Code Extension : Liver Server

 2. Installing Node.js & setting up : 
      -> Install Node.js from Chrome
      -> run node -v after installation on terminal
      -> If we can see the version of Node.js = Successful installation
 
 3. Installing NPM Package of live-server : 
     -> Type 'npm install liver-server -g' in Terminal
     -> Type 'live-server' in Terminal to run live server package
*/
