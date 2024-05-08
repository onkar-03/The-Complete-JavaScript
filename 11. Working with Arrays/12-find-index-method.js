// --- Find Index Method:
// - The find index method is the close cousin of find() method
// - It returns the Index of the Element and not the ELement itself
// - If we want to say delete an element we use the splice() method, but form where do we get the Index that we want to delete ?? we get it from the findIndex() method

'use strict';

const accounts = [
  { name: 'Peter', accountID: 723556781012 },
  { name: 'Linus', accountID: 126528791369 },
  { name: 'John', accountID: 220356081771 },
  { name: 'William', accountID: 901240187955 },
];

const index = accounts.findIndex(({ name }) => name === 'William');

// - Remove the Element William, index = 3
accounts.splice(index, 1);
// - View Remaining Accounts
console.log(accounts);
//- (3) [{name: "Peter", ...}, {name: "Linus", ...}, {name: "William", ...}]
