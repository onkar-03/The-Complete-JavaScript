'use strict';

// Map
const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EURO', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

// --- Using forEach on Map:
// - The forEach method requires a callback function as a parameter
// - So forEach is technically a higher order function
// - The callback function contains the code about what exactly need to be done
// - On each iteration it passes the Value, Key and Map, we can take only element as well if we want
// - forEach iterates over the entire Map
// - We dont need to write .entries() explicitly to get indexes here
// - The 'continue' and 'break' statements don't work here at all
currencies.forEach(function (value, key, map) {
  console.log(`${key} ${value}`);
});
/* → USD: United States Dollar
EURO: Euro
GBP: Pound Sterling
*/

// Set
const currenciesUnique = new Set(['USD', 'EURO', 'GBP', 'EURO', 'USD']);

console.log(currenciesUnique); // → Set(3) {size: 3, USD, EURO, GBP}

// --- Using forEach on Set:
// - In Sets there are not Indexes / Keys hence te argument of key / index doesn't make sense here
// - Hence we use '_' underscore which means a throwaway variable (completely unnecessary variable)
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
/* → USD: USD
     EURO: EURO
     GBP: GBP 
*/
