## What Babel & Parcel Can Transpile

- **Modern JavaScript Syntax such as**:
  - Arrow functions
  - Classes
  - Template literals
  - Default parameters
  - Rest and spread operators
  - Destructuring assignment
  - Modules (import/export)
  - Async/await
  - Let and const
  - For...of loops
  - Generators
  - Enhanced object literals

## What Babel & Parcel Cannot Transpile

- **New Built-In Functions and APIs such as**:
  - `Array.prototype.find`
  - `Array.prototype.includes`
  - `Object.assign`
  - `Promise`
  - `Map`
  - `Set`
  - `Symbol`
  - `WeakMap`
  - `WeakSet`
  - `String.prototype.startsWith`
  - `String.prototype.endsWith`
  - `String.prototype.includes`
  - `Number.isNaN`

## What is Polyfilling ??

- Polyfilling is a technique used in web development to provide modern functionality on older browsers that do not natively support certain JavaScript features or APIs
- It involves loading additional JavaScript code (polyfills) that implement these features so that the application behaves consistently across all browsers

## Why We Need Polyfilling ??

- Polyfilling is necessary because while Babel can transpile modern JavaScript syntax (such as arrow functions, classes, and the spread operator) to older syntax that is compatible with older browsers.
- It cannot transpile new built-in functions and APIs (such as Promises, `Array.prototype.find`, and `Object.assign`) to their older equivalents.
- These new features are part of the JavaScript runtime environment, not just syntax that can be rewritten.
- This is where polyfills come in. A polyfill is a piece of code (usually written in JavaScript) that implements the functionality of these newer APIs for environments that do not natively support them.

## Use Cases of Polyfills:

- **Promises:** Polyfills for promises allow asynchronous operations to be handled consistently across browsers that lack native support for the Promise API
- **Array.prototype.includes:** Polyfills for `Array.prototype.includes` ensure that array searching functionality is available even on browsers that do not support it natively
- **Fetch API:** Polyfills for the Fetch API provide a way to make HTTP requests using a consistent interface, regardless of the browser's native capabilities

## Polyfilling Modern Array Methods & Promises

### Understanding Polyfilling Modern Array Methods

```javascript
console.log(cart.find(el => el.quantity >= 2));
import 'core-js/stable/array/find.js';
```

1. **Understanding Polyfilling `.find()`**:

   - The `.find()` method in JavaScript arrays allows you to find the first element that satisfies a condition.
   - Older browsers may not support this method natively.

2. **Using `core-js/stable/array/find.js`**:

   - `core-js` provides polyfills for modern ECMAScript features.
   - Importing `core-js/stable/array/find.js` ensures `.find()` works across different environments.

3. **Polyfill Functionality**:

   - Polyfills like `core-js/stable/array/find.js` replicate `.find()`'s behavior using older JavaScript or alternative methods.
   - This ensures consistent functionality regardless of native support.

4. **Modules Addition**:

- When `core-js/stable/array` is added to the project, it provides polyfills for essential array methods

  **Array Methods Included**:

- `forEach`
- `map`
- `filter`
- `some`
- `every`
- `find`
- `findIndex`
- `filterReject`

_The exported Modules in the Code look somewhat like this:_

```javascript
module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7),
};
```

### Understanding Polyfilling Promises

```javascript
Promise.resolve('TEST').then(res => console.log(res));
import 'core-js/stable/promise';
```

1. **Promises in JavaScript**:

   - Promises are used for handling asynchronous operations in JavaScript.
   - Older browsers may not support the `Promise` API natively.

2. **Using `core-js/stable/promise`**:

   - `core-js` also provides polyfills for promises.
   - Importing `core-js/stable/promise` ensures `Promise` works across different environments.

3. **Polyfill Functionality for Promises**:

   - Polyfills like `core-js/stable/promise` replicate the behavior of promises using older JavaScript or alternative methods.
   - This ensures consistent functionality regardless of native support.

4. **Modules Addition for Promises**:

   - When `core-js/stable/promise` is added to the project, it provides polyfills for the `Promise` API.

## Polyfilling Async Functions with Regenerator Runtime

### Understanding Polyfilling Async Functions

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
import 'regenerator-runtime';
```

### Polyfilling Async Functions with Regenerator Runtime

#### Async Functions in JavaScript:

- Async functions allow for asynchronous, non-blocking code using the `async` and `await` keywords.
- They make handling asynchronous operations more readable and manageable.
- Older browsers may not support async functions natively.

#### Using `regenerator-runtime`:

- Babel transpile async functions to generator functions, which are widely supported in older browsers.
- `regenerator-runtime` is required to handle these generator functions and provide the async behavior.
- Importing `regenerator-runtime` ensures that async functions work across different environments.

#### Polyfill Functionality for Async Functions:

- Polyfills like `regenerator-runtime` replicate the behavior of async functions using older JavaScript or alternative methods.
- This ensures consistent functionality regardless of native support.

## Importing Core-js and Regenerator Runtime

### Importing Core-js

1. **Entire Core-js Bundle**:

   - You can import the entire `core-js/stable` bundle to polyfill all modern ECMAScript features at once.
   - This ensures comprehensive support for ES6+ features across different environments.

2. **Specific Modules**:
   - Alternatively, you can cherry-pick only the specific modules you need from `core-js/stable`.
   - This allows you to optimize the bundle size by importing only necessary polyfills, such as for array methods (`array/find.js`) or promises (`promise`).

### Importing Regenerator Runtime

1. **Async Functions Support**:

   - `regenerator-runtime` is imported to support async functions.
   - Babel transpile async functions to generator functions, which `regenerator-runtime` handles to ensure async behavior in older browsers.

2. **Usage**:
   - Importing `regenerator-runtime` alongside `core-js` polyfills ensures comprehensive ES6+ support, including async functions, across all targeted environments.

```javascript
// Import the entire core-js/stable bundle
import 'core-js/stable';

// Or import specific modules
import 'core-js/stable/array/find.js';
import 'core-js/stable/promise';

// Import regenerator-runtime for async functions
import 'regenerator-runtime';
```
