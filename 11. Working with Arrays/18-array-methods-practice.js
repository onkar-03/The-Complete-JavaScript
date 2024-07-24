'use strict';

// --- Array Methods Practice:
const accounts = [
  {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  },
  {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  },
  {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  },
];

// --- Exercise 1 : Calculate Total Bank Transactions
// - 1. Retrieve the movements of every account into a new array using map()
// - 2.1 Then flatten it using flat()
// - 2.2 Or use flatMap() to achieve the same in one go
// - 3. Filter all the positive value using filter()
// - 4. Calculate the total sum of positive values using the reduce() function

//  Method 1
// const bankDepositSum = accounts.map(acc => acc.movements).flat();

// Method 2
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// --- Exercise 2 : Calculate Number of Transactions over 1000
// - 1. Retrieve the movements of every account into a new array using map()
// - 2. Filter the transactions which are >= 1000 using filter()
// - 3.1 Calculate the number of transactions above 100 using .length
// - 3.2 Use the reduce method to calculate the number of transactions above 1000

// Method 1
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// Method 2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// --- Exercise 3: Calculate the Sum of Deposits and the Withdrawals using reduce() method

// - 1. Retrieve the movements of every account into a new array using map()
// - 2. Reduce them to calculate the total deposits and withdrawals using reduce() method
// - 2.1 In this reduce()method the Object is the accumulator hence we use the sums.deposits / sums.withdrawals to add to the counter
// - 2.2 also the Initial value in the reduce() method is an object having 2 properties called deposits and withdrawals
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      curr > 0 ? sums.deposits + curr : sums.withdraws + curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

// --- Exercise 4 : Convert the String to Title Case
const convertTitleCase = title => {
  // - List of exception that should not be capitalized
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  // - To capitalize First character of each Word use toUpperCase()
  // - Use substring() to concat the rest of the string to the Capitalized Character
  const capitalize = str => str[0].toUpperCase() + str.substring(1);

  // - Convert them all to lowercase
  // - Split them for spaces and store them into an array
  // - We want a new array with words that are not exceptions to be capitalized hence use map(), where we check if its in the exceptions list / not ?? if not then we capitalize it
  // - Then join the array words to form a string using join()
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
// - This Is a Nice Title
console.log(convertTitleCase('this is a LONG title but not too long'));
// - This Is a Long Title but Not Too Long
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
// - And Here Is Another Title with an Example
