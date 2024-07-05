///////////////////////////////////////
// Exporting and Importing in ES6 Modules

// --- Importing Individual Values from a Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// --- Importing All Values from a Module
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// --- Importing a Default Export into the Module
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// --- Visualizing Import & Export as Live Connection
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
