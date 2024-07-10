//////////////////////////////////////
// 15. Lets Fix Some Bad Code Part-1

// --- Changes Following Clean Code Principles
// Declare variables as 'const' rather than 'var', whose values aren't being altered
// Keeping limit & output variables as 'let' and not 'const' as they need to be altered

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'onkar' },
  { value: -45, description: 'Groceries 🥑', user: 'onkar' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'onkar' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'onkar' },
  { value: -1100, description: 'New iPhone 📱', user: 'onkar' },
  { value: -20, description: 'Candy 🍭', user: 'david' },
  { value: -125, description: 'Toys 🚂', user: 'david' },
  { value: -1800, description: 'New Laptop 💻', user: 'onkar' },
];

const spendingLimits = {
  onkar: 1500,
  david: 100,
};

// Refactored Code
const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'onkar') {
  user = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  if (value <= getLimit(user)) {
    // Using Default Property naming convention for Objects
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');

const checkExpense = function () {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpense();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} + / ` : '';

    // Emojis are 2 characters hence we take out emojis from string by extracting last 2 characters
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

// Budget
console.log(budget);

// Log expenses over 100
logBigExpenses(100);
