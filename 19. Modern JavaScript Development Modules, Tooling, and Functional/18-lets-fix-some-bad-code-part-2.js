//////////////////////////////////////
// 15. Lets Fix Some Bad Code Part-2

// --- Immutable Object
// Using Object.freeze() to freeze the Array Object'
// It works freezes the First Level i.e for adding a complete new Property
// It's not a deep freeze we can still change Objects inside of Objects
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'onkar' },
  { value: -45, description: 'Groceries 🥑', user: 'onkar' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'onkar' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'onkar' },
  { value: -1100, description: 'New iPhone 📱', user: 'onkar' },
  { value: -20, description: 'Candy 🍭', user: 'david' },
  { value: -125, description: 'Toys 🚂', user: 'david' },
  { value: -1800, description: 'New Laptop 💻', user: 'onkar' },
]);

// Trying to changed a& add Values
// budget[0] = 1000; // Changes the Budget of First as changing Object inside Object
// budget[9] = 'jj'; // No Change as a complete new Property

// --- Immutable Object
// Using Objet.freeze() to Freeze the spendingLimits Object
const spendingLimits = Object.freeze({
  onkar: 1500,
  david: 100,
});

// Trying to Add new Properties to the Object now
// spendingLimits.jay = 200;
// console.log(spendingLimits); // No Change has only onkar & david

// Refactored Code
const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'onkar'
) {
  const cleanUser = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // Returning Copy of State Array as an Object on valid addition
  // Else Adding the Original Budget Object
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1); // Add Pizza to budget

const newBudget2 = addExpense(budget, spendingLimits, 10000, 'Pizza 🍕');
console.log(newBudget2); // No Changes as Pizza Item ridiculously Expensive

const newBudget3 = addExpense(
  newBudget2,
  spendingLimits,
  100,
  'Going to Movies 🍿',
  'Matilda'
);
console.log(newBudget3);

const newBudget4 = addExpense(newBudget3, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget4);

const checkExpense = function (limits, state) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};

const finalBudget = checkExpense(newBudget4, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    // .map(entry => entry.description.slice(-2))
    // .join(' / ');
    .reduce((str, cur) => `${str} ${cur.description.slice(-2)}`, '');

  console.log(bigExpenses);
};

// Log expenses over 100
logBigExpenses(finalBudget, 100);
