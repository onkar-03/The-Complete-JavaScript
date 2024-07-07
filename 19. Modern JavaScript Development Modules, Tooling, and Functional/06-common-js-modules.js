///////////////////////////////////////
// 06. Common Js Modules:

// ---JavaScript Module Systems ---

// * Introduction to Module Systems:
// Beyond native ES Modules and the module pattern, JavaScript historically used 'AMD Modules' and 'CommonJS' modules for modular development

// * CommonJS Modules:
// CommonJS modules were pivotal, especially in Node.js
// Each file acts as a module, exporting functionality using `exports.<name>` and `module.exports`

// * Exporting Modules (CommonJS):**
//  To export a module in CommonJS, assign properties or functions to `exports` or `module.exports`
// Example: exports.functionName = () => {};

// *Importing Modules (CommonJS):
// To import a module in CommonJS, use the `require` function with the module path
// Example: const moduleName = require('./module');

// *Node.js and npm:
//   - Node.js relied heavily on CommonJS for its package management through npm
//   - npm originally catered to Node.js, housing a vast collection of modules primarily using CommonJS

// *Transition to ES Modules:
//   - Recent updates brought native support for ES Modules in Node.js, aligning server-side JavaScript with browser capabilities
//   - ES Modules use `export` and `import` statements for modularization.

// * Exporting Modules (ES Modules):
// To export a module in ES Modules, use the `export` keyword.
// Example: export const functionName = () => {};

// * Importing Modules (ES Modules):
// To import a module in ES Modules, use the `import` keyword followed by the module path.
//- Example: import { functionName } from './module.js';

// * Future Outlook:
// ES6 Modules are expected to replace older module systems gradually, aiming for standardized JavaScript development
// Despite advancements, CommonJS remains prevalent in existing projects due to its extensive adoption and compatibility

// * Conclusion:
// Understanding both CommonJS and ES Modules is essential for navigating JavaScript projects effectively
// Developers should adapt to modern ES Modules while recognizing the ongoing relevance of CommonJS in many code bases


// Example: 

// Exporting Module in Common Js Node.js Syntax
// The export object wont work here as its an Object of Node.js Syntax
export.addToCart = function (product, quantity) {
    // Add the product and quantity as an object to the cart array
    cart.push({ product, quantity });
    // Log a message indicating the item was added, including the shipping cost
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };
  
// Importing Module in Common Js Node.js Syntax
// The require() object wont work here as its an Object of Node.js Syntax
const cart = require('./modulePath.js')