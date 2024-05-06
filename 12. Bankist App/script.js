'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// --- A) Creating DOM Elements: (Handling Transactions )
// - Passing all movements to a function rather than making it work with a global var
// - Adding new transactions to the container
const displayMovements = function (movements) {
  // --- 1) Firstly we want the container to be empty before adding any new transactions
  // - We want to clear the ol transactions
  containerMovements.innerHTML = '';

  // --- 2) Now we want to iterate over the movements array
  // - We want to create a new HTML element for each transaction
  // - We want to insert the new HTML element to the page
  // - Using forEach to iterate over the entire array passed
  movements.forEach(function (value, index, arr) {
    // - Checking type of transaction that too place
    const type = value > 0 ? 'deposit' : 'withdrawal';

    // - Creating the HTML element
    // - Inserting the Movements row for each transaction
    const html = `
       <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${value}</div>
        </div>`;

    // --- 3) Inserting the newly created HTML element to the page
    // - For this we use the .adjacentHTML(position,htmlName that we created)
    // - Positions: beforebegin, afterbegin, beforeend, afterend
    // - Now we want to add it to '.movements' class selected using var containerMovements
    // - Using after begin as we want the latest / last transaction to be at the top
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// Passing the account
displayMovements(account1.movements);

// --- B) Calculate Balance
const calcDisplayBalance = function (movements) {
  // - Calculating Balance using the reduce method
  const balance = movements.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  // - Insert the Value to the HTML Element
  labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);

// --- C) Calculate Account Summary
// - Used chaining of methods to calculate Summary of Incomes
const calcDisplaySummary = function (movements) {
  // - Incoming Money Amount
  const incomes = movements
    .filter(income => income > 0)
    .reduce((acc, curr) => acc + curr, 0);
  // - Display the calculated income
  labelSumIn.textContent = `${incomes}€`;

  // - Outgoing Money Amount
  const out = movements
    .filter(out => out < 0)
    .reduce((acc, curr) => acc + curr, 0);
  // - Display the calculated out money
  labelSumOut.textContent = `${Math.abs(out)}€`;

  // - Interest Amount
  // - Calculate the incoming money and apply interest rate on that
  // - Filter used to add condition to add interest on amounts >= 1 Euro
  const interest = movements
    .filter(income => income > 0)
    .map(income => (income * account1.interestRate) / 100)

    // - To see all the interest calculated
    // .filter((income, index, arr) => {
    //   console.log(arr);
    //   return income >= 1;
    // })
    .filter(int => int >= 1)
    .reduce((acc, curr) => acc + curr, 0);
  // - Display the calculated income
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);

// --- D) Computing Usernames for each Account:

// --- Process Using Map Method
// - 1. Convert the username to lowercase
// - 2. Split them for spaces, split() also returns an array
// - 3. Loop over the entire array and store only the Initials into a new array
// - 4. Join all the Initials taken out using join() for empty string

const createUserNames = function (accounts) {
  // - Looping over the accounts using forEach
  // - As we dont want to create a new array in this case
  accounts.forEach(function (acc) {
    // - Created a new property to store the username as 'username'
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

// - Passing all the accounts
createUserNames(accounts);
console.log(accounts);
