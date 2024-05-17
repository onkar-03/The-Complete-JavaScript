'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2013-11-18T21:31:17.178Z',
    '2013-12-23T07:42:02.383Z',
    '2024-01-01T09:15:04.904Z',
    '2024-01-28T10:17:24.185Z',
    '2024-02-08T14:11:59.604Z',
    '2024-03-26T17:01:17.194Z',
    '2024-05-10T23:36:17.929Z',
    '2024-05-13T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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

// --- A) Creating DOM Elements: (Handling Transactions)

// Function Handling all the Date Movements
const formatMovement = function (date, locale) {
  // - Calculating Number of Days
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  // - Printing String for Recent Transactions
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // - Using the Normal Method
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}/`;

  // - Using the Internationalizing Dates method for displaying the Dates of transactions
  return new Intl.DateTimeFormat(locale).format(date);
};

// - Here we formatted the currency and its completely independent of locale, so only the currency gets formatted according to currency:'USD' which is stored in account1
// - The UI of date display still remains the same as acc.locale format only i.e Portugal for account1

// Function to format Currency as we will use the same coe in multiple places
const formatCurr = function (value, locale, curr) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: curr,
  }).format(value);
};

// - Passing the whole account now as we not only want to work with the movements but the movement dates values as well
function displayMovements(acc, sort = false) {
  // --- 1) Firstly we want the container to be empty before adding any new transactions
  // - We want to clear the old transactions
  containerMovements.innerHTML = '';

  // - By default set sort to false
  // - Creating copy of original movements arrays using .slice() as sort manipulated the original data which we dont want
  // - Then sorting the movements using.sort() and compare callback function
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a.amount - b.amount)
    : acc.movements;

  // --- 2) Now we want to iterate over the movements array
  // - We want to create a new HTML element for each transaction
  // - We want to insert the new HTML element to the page
  // - Using forEach to iterate over the entire array passed
  movs.forEach((mov, i) => {
    // - Checking type of transaction that too place
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // - Accessing the movement dates of the particular movement at which we currently are using the Index
    // - Called forEach on movements array and used the current Index to loop over the movementDates Array as well
    // - Time stamping the Movements Date using new Date(), in date variable

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovement(date, acc.locale);

    // Calling currency formatter
    const formattedMovement = formatCurr(mov, acc.locale, acc.currency);

    // - Creating the HTML element
    // - Inserting the Movements row for each transaction
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMovement}</div>
        </div>`;

    // --- 3) Inserting the newly created HTML element to the page
    // - For this we use the .adjacentHTML(position,htmlName that we created)
    // - Positions: beforebegin, afterbegin, beforeend, afterend
    // - Now we want to add it to '.movements' class selected using var containerMovements
    // - Using after begin as we want the latest / last transaction to be at the top
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

// --- B) Calculate Balance
const calcDisplayBalance = function (account) {
  // - Calculating Balance using the reduce method
  // - Also creating a new property called balance to store the balance of the User
  account.balance = account.movements.reduce((acc, curr) => acc + curr, 0);

  // - Insert the Value to the HTML Element
  labelBalance.textContent = formatCurr(
    account.balance,
    account.locale,
    account.currency
  );
};

// --- C) Calculate Account Summary
// - Used chaining of methods to calculate Summary of Incomes
const calcDisplaySummary = function (account) {
  // - Incoming Money Amount
  const incomes = account.movements
    .filter(income => income > 0)
    .reduce((acc, curr) => acc + curr, 0);

  // - Display the calculated income
  labelSumIn.textContent = formatCurr(
    incomes,
    account.locale,
    account.currency
  );

  // - Outgoing Money Amount
  const out = account.movements
    .filter(out => out < 0)
    .reduce((acc, curr) => acc + curr, 0);

  // - Display the calculated out money
  labelSumOut.textContent = formatCurr(
    Math.abs(out),
    account.locale,
    account.currency
  );

  // - Interest Amount
  // - Calculate the incoming money and apply interest rate on that
  // - Filter used to add condition to add interest on amounts >= 1 Euro
  const interest = account.movements
    .filter(income => income > 0)
    .map(income => (income * account.interestRate) / 100)

    // - To see all the interest calculated
    // .filter((income, index, arr) => {
    //   console.log(arr);
    //   return income >= 1;
    // })
    .filter(int => int >= 1)
    .reduce((acc, curr) => acc + curr, 0);

  // - Display the calculated income
  labelSumInterest.textContent = formatCurr(
    interest,
    account.locale,
    account.currency
  );
};

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

// - Function to Update UI with every transaction / Login
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Timer Function
const startLogOutTimer = function () {
  // - Writing the callback function of setInterval separately
  // - As we want it to get executed immediately and not after 1 second delay of SetInterval()
  const tick = function () {
    // - Minutes Calculation
    // - Removing the decimal part using Math.trunc
    // - padStart() is a string method hence we convert the calculated number to string using String()
    const minutes = String(Math.trunc(time / 60)).padStart(2, 0);

    // - Seconds calculation
    // - Removing the decimal part using Math.trunc
    // - padStart() is a string method hence we convert the calculated number to string using String()
    const seconds = String(time % 60).padStart(2, 0);

    // - In each call, print remaining time in the UI
    labelTimer.textContent = `${minutes}:${seconds}`;

    // - When Timer countdown reaches 0
    if (time === 0) {
      // Stop the Timer
      // - To stop the setInterval() function
      clearInterval(timer);

      // Label Content back to Start Page
      labelWelcome.textContent = `Login top get started`;

      // Opacity of UI to 0 = LogOut
      containerApp.style.opacity = 0;
    }

    // Decrease 1 Seconds every Second
    // We get logged out at 1 second if time-- written before comparison time === 0
    // Writing this after check as when tim is 1 second its gets reduced to 0 by time-- and gets logged out
    // Hence first we compare the current time then reduce it
    time--;
  };

  // - Set Time to 5 minutes = 300 seconds
  let time = 300;

  // - Call the timer every second
  // - Called the tick first as we want it to execute immediately which wont happen if we just call it in the setInterval() function as there we have a delay of 1 sec
  tick();
  const timer = setInterval(tick, 1000);
};

// * ------------------- Event Handlers :

// --- 1. Implementing Login:
// - Checking Correct Credentials (As per the Flow Chart):
// - Either we click the Button / Press Enter after entering details in required fields,both refer to the click even only

// - Storing Current Account Globally as we need to access the Account at several places
let currentAccount;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // - In HTML Form buttons default behavior is to reload after clicking it
  // - To disable that
  e.preventDefault();

  // - A) Checking Correct UserName
  // - To check if the entered username in 'inputLoginUsername' field matches the original userName of owner property of account
  // - currentAccount has the correct userName if entered correctly
  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // - B) Checking Pin Entered
  // - Remember that what ever user inputs is stored as a string so we need to convert this to a Number as well
  // - '?' represents Optional Chaining, means the .pin is read only when the currentAccount exists
  if (currentAccount?.pin === +inputLoginPin.value) {
    // - 1. Display UI & Welcome Message
    // - Display the First Name of the owner using .split(' ')[0] as split returns an array
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // - Display the Accounts Section / Dashboard
    containerApp.style.opacity = 100;

    // - Creating the current Date on Login
    const now = new Date();

    // Method 1: Using Internationalizing Dates
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };

    // Fetching the locale from the Account Object of the User
    labelDate.textContent = Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // If we want to use current local of User from Browser
    // const local = navigator.language;
    // labelDate.textContent = Intl.DateTimeFormat(local, options).format(now);

    // Method 2: Normal Way to do it
    // - For Date, Month, Hours & Minutes we want to display a 0 at the Start for Numbers 0...9
    // - Hence we pad the day and month with 0 at the beginning
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}/, ${hour}:${minutes}`;

    // Timer called
    startLogOutTimer();

    // - Update UI
    updateUI(currentAccount);

    // - 5. Clear Input Fields
    // - Clearing teh Text Content of the Form Elements using the .value property
    inputLoginUsername.value = inputLoginPin.value = '';

    // - .blur() makes sure that the last selected field loses its focus after the click event is triggered
    inputLoginPin.blur();
  }

  // --- Important : Remember that the function returns undefined in case of wrong user/pin input
});

// --- 2. Implementing Transfers:
// - Transfer Money from one account to another
btnTransfer.addEventListener('click', function (e) {
  // - Prevent the Default Reload
  e.preventDefault();

  // - 1. Fetching Transfer Amount
  const amount = inputTransferAmount.value;

  // - 2. Fetching Receivers Account
  // - To make sure the account entered is in out database we use the .find() method to fetch the account name and store it in receiversAcc if the entered account is correct
  const receiversAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // - 3. Transfer Conditions (only if) :
  // - Positive Balance
  // - Enough money should be in my account there to carry the transfer
  // - Can't transfer to our own account
  // -check if the receiversAcc is not undefined ... and does exist we do &&receiversAcc
  if (
    amount > 0 &&
    receiversAcc &&
    amount <= currentAccount.balance &&
    receiversAcc?.username !== currentAccount.username
  ) {
    // console.log('Transfer Valid');s

    // - Doing Transfers
    // - 4. Add positive & Negative transactions to respective accounts
    currentAccount.movements.push(-amount);
    receiversAcc.movements.push(amount);

    // - Adding Transfer Date
    // - Both for the Sender and the Receiver
    currentAccount.movementsDates.push(new Date().toISOString());
    receiversAcc.movementsDates.push(new Date().toISOString());

    // - Updating the Transactions on the Dashboard
    updateUI(currentAccount);
  }

  // - Clear Fields
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
});

// --- 3. Implementation of Loan Approval of an Account:
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // - Gather entered Amount
  const amount = Math.floor(inputLoanAmount.value);

  // - Loan only approve if their is a movement in the account which is equal to 10% of the amount asked as a loan
  if (
    amount > 0 &&
    currentAccount.movements.some(mov => mov >= amount * 0.01)
  ) {
    // - Push the Requested Loan Amount => Sanction the Loan
    currentAccount.movements.push(amount);
    console.log(amount);

    // Add Loan Date
    currentAccount.movementsDates.push(new Date().toISOString());

    // - Update UI
    updateUI(currentAccount);

    // - Clear Fields
    inputTransferAmount.value = '';
    inputTransferAmount.blur();
  }
});

// --- 4. Implementing Removal of an Account:
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // - Checking if the Pin nad userName is correct or not
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    // - Check if the entered account name is same as that of the current account name we that we have logged in
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // - Removing the Account
    accounts.splice(index, 1);

    // - After account deletion hide the UI
    containerApp.style.opacity = 0;
  }

  // - Clear Fields
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();

  // - Rewrite Welcome text
  labelWelcome.textContent = `Log in to get started`;
});

// --- 5. Sorting Movements

// State variable to sort movements
let sorted = false;

btnSort.addEventListener('click', function (e) {
  // - Prevent the Default Reload
  e.preventDefault();

  // - Sorting Movements
  // - Ascending Order
  displayMovements(currentAccount.movements, !sorted);

  // - Changing the state again as in case we click the sorted again we want to set to descending after ascending order
  sorted = !sorted;
});

// --- Movements UI:
// - Using the Array.from() Method
labelBalance.addEventListener('click', function () {
  // - Converting the NodeList to an actual array
  // - Then mapping it to Numbers replacing the € sign
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => +el.textContent.replace('€', '')
  );
  console.log(movementsUI);

  // - It can be done this way too but we need to use the map explicitly on this now
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
