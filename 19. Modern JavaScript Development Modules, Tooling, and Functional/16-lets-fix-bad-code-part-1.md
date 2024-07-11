# Clean Code Practices Summary

In this refactored version, we've applied various clean code practices to improve readability, maintainability, and efficiency of the budget management system. Here's how each principle is exemplified in the code:

## 1. Use Descriptive Variable Names

### Original Code:

```javascript
// Original code with unclear variable names
var lim;
if (limits[user]) {
  lim = limits[user];
} else {
  lim = 0;
}
```

### Refactored Code:

```javascript
Copy code
// Refactored code with descriptive variable name and ternary operator
const limit = spendingLimits[user] ? spendingLimits[user] : 0;
```

**Description**:

In the refactored code:

- The variable lim is replaced with limit, which clearly indicates its purpose of fetching spending limits for a user.
- The ternary operator (?:) is used for a concise conditional assignment, enhancing readability.

## 2. Avoid Using `var`

### Original Code

```javascript
// Original code using 'var'
var budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'onkar' },
  // Other budget items
];
```

### Refactored Code

```javascript
// Refactored code using 'const' and 'let' for variables
const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'onkar' },
  // Other budget items
];
```

**Description**:

In the refactored code:

- var is replaced with const for constants (budget, spendingLimits).
- let is used for variables that need reassignment (output in logBigExpenses).

## 3. Use Meaningful Function Names

### Original Code

```javascript
// Original code with a generic function name
var add = function (value, description, user) {
  // Function logic
};
```

### Refactored Code

```javascript
// Refactored code with a descriptive function name
const addExpense = function (value, description, user = 'onkar') {
  // Function logic
};
```

**Description**:

In the refactored code:

- The function add is renamed to addExpense, clearly indicating its purpose of adding an expense to the budget.
- Default parameter user = 'onkar' is used to ensure backward compatibility and ease of use.

## 4. Default Parameters

### Original Code

```javascript
// Original code without default parameters
var add = function (value, description, user) {
  if (!user) user = 'onkar';
  // Function logic
};
```

### Refactored Code

```javascript
// Refactored code using default parameters
const addExpense = function (value, description, user = 'onkar') {
  // Function logic
};
```

**Description**:

In the refactored code:

- Default parameter user = 'onkar' is used in the addExpense function definition.
- This simplifies the code and ensures that addExpense works seamlessly even when user is not provided.

## 5. Avoid Nested Code and Large if-else Statements

### Original Code

```javascript
// Original code with nested if-else statements
var check = function () {
  for (var el of budget) {
    var lim;
    if (spendingLimits[el.user]) {
      lim = spendingLimits[el.user];
    } else {
      lim = 0;
    }

    if (el.value < -lim) {
      el.flag = 'limit';
    }
  }
};
```

### Refactored Code

```javascript
// Refactored code with simplified logic
const checkExpense = function () {
  for (const entry of budget) {
    if (entry.value < -getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  }
};
```

**Description**:
In the refactored code:

- The nested if-else statements are replaced with a straightforward check using getLimit function.
- This simplification improves readability and reduces complexity in the checkExpense function.

## 6. Use Constants for Fixed Values

### Original Code

```javascript
// Original code with hardcoded values
let output = '';
for (const entry of budget) {
  output += entry.value <= -100 ? `${entry.description.slice(-2)} + / ` : '';
}
```

### Refactored Code

```javascript
// Refactored code using constants and template literals
const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} + / ` : '';
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
```

**Description**:
In the refactored code:

- 100 is replaced with bigLimit parameter in logBigExpenses, making the function more flexible.
- Template literals (${entry.description.slice(-2)} + / ) are used for concise string formatting.
