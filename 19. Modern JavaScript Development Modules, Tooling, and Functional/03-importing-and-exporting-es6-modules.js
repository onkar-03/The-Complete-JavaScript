///////////////////////////////////////
// 03. Exporting and Importing in ES6 Modules

// --- Importing Multiple Variables & Renaming Variables during Import
// For Importing we specify the names of variables we want to import inside the {} using ,
// We can also rename the Imported Variables as we want using the 'as' keyword here as well

// CODE:
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// --- Importing All Values from a Module
// For importing all the variables declared a export in the exporting module we use the *
// Syntax: import * as objectName from './Path'
//  ShoppingCart is an object. This object will contain all the exports from the shoppingCart.js
// To access any variables from Exporting module we use the ObjectName.variableName

// CODE:
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// --- Importing a Default Export into the Module
// Here for the default import we dont have to write it inside the {}
// Also we can give it any name we want, and use the same name to perform operations

// CODE:
// import add from './shoppingCart.js';
// add('pizza', 2);

// --- Mixing Default and Named Imports
// WSe can also mix the default and named imports as follows
// But its not considered a Good Practice as it increases Code COmplexity and reduces Readability

// CODE:
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// add('pizza', 2);
// console.log(price);

// --- Visualizing Import & Export as Live Connection

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// O/P:
// Array(3): Containing the Three Items Added to the cart

// Explanation:
// We exported an Empty Cart from ShoppingCart Module and imported it here
// The imported cart is not a copy but a live connection to the original cart in the shoppingCart.js module. Changes to the original cart are reflected in the imported cart
// The add function modifies the cart array by pushing new items into it
// When you log the cart, you see the current state of the cart, reflecting all additions made by the add function
