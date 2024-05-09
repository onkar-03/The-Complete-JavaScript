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
const displayMovements = function (movements, sort = false) {
  // - By default set sort to false
  // - Creating copy of original movements arrays using .slice() as sort manipulated the original data which we dont want
  // - Then sorting the movements using.sort() an compare callback function
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  // --- 1) Firstly we want the container to be empty before adding any new transactions
  // - We want to clear the ol transactions
  containerMovements.innerHTML = '';

  // --- 2) Now we want to iterate over the movements array
  // - We want to create a new HTML element for each transaction
  // - We want to insert the new HTML element to the page
  // - Using forEach to iterate over the entire array passed
  movs.forEach(function (value, index, arr) {
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

// --- B) Calculate Balance
const calcDisplayBalance = function (account) {
  // - Calculating Balance using the reduce method
  // - Also creating a new property called balance to store the balance of the User
  account.balance = account.movements.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  // - Insert the Value to the HTML Element
  labelBalance.textContent = `${account.balance}€`;
};

// --- C) Calculate Account Summary
// - Used chaining of methods to calculate Summary of Incomes
const calcDisplaySummary = function (account) {
  // - Incoming Money Amount
  const incomes = account.movements
    .filter(income => income > 0)
    .reduce((acc, curr) => acc + curr, 0);
  // - Display the calculated income
  labelSumIn.textContent = `${incomes}€`;

  // - Outgoing Money Amount
  const out = account.movements
    .filter(out => out < 0)
    .reduce((acc, curr) => acc + curr, 0);
  // - Display the calculated out money
  labelSumOut.textContent = `${Math.abs(out)}€`;

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
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);
  // - Display the calculated income
  labelSumInterest.textContent = `${interest}€`;
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

// * ------------------- Event Handlers :

// --- 1. Implementing Login:
// - Checking Correct Credentials (As per the Flow Chart):
// - Either we click the Button / Press Enter after entering details in required fields,both refer to the click even only

// - Storing Current Account Globally as we need to access the Account at several places
let currentAccount;

// - Function to Update UI with every transaction / Login
const updateUi = function (acc) {
  // - 1. Display Movements
  displayMovements(acc.movements);

  // - 2. Display Balance
  calcDisplayBalance(acc);

  // - 3. Display Summary
  // - Passing teh whole account as interest rates are different for different account, hence we pass in the accounts and then retrieve the interest rates according to the account Logged In
  calcDisplaySummary(acc);
};

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

  // - B) Checking Pin Entered
  // - Remember that what ever user inputs is stored as a string so we need to convert this to a Number as well
  // - '?' represents Optional Chaining, means the .pin is read only when the currentAccount exists
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // - 1. Display UI & Welcome Message
    // - Display the First Name of the owner using .split(' ')[0] as split returns an array
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // - Display the Accounts Section / Dashboard
    containerApp.style.opacity = 100;

    // - Update UI
    updateUi(currentAccount);

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
  const amount = Number(inputTransferAmount.value);

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

    // - 4. Add positive & Negative transactions to respective accounts
    currentAccount.movements.push(-amount);
    receiversAcc.movements.push(amount);

    // - Updating the Transactions on the Dashboard
    updateUi(currentAccount);
  }

  // - Clear Fields
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
});

// --- 3. Implementation of Loan Approval of an Account:
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // - Gather entered Amount
  const amount = Number(inputTransferAmount.value);

  // - Loan only approve if their is a movement in the account which is equal to 10% of the amount asked as a loan
  if (
    amount > 0 &&
    currentAccount.movements.some(mov => mov >= amount * 0.01)
  ) {
    // - Push the Requested Loan Amount => Sanction teh Loan
    currentAccount.movements.push(amount);

    // - Update UI
    updateUi(currentAccount);

    // - Clear Fields
    inputTransferAmount.value = '';
    inputTransferAmount.blur();
  }
  s;
});

// --- 4. Implementing Removal of an Account:
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // - Checking if the Pin nad userName is correct or not
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
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
