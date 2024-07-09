//////////////////////////////////////
// 10. Configuring Babel and Polyfilling

// MODULE 1: 10-parcel-bundling.js
console.log('Importing module');

// MODULE 2: ./shoppingCart.js
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// MODULE 3: 'lodash-es
import cloneDeep from 'lodash-es/cloneDeep.js';

// Nested Object
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

// Creating a Deep Clone of the Original
const stateClone = cloneDeep(state);
console.log(stateClone);

// Creating a Deep Clone of the Clone
const stateDeepClone = cloneDeep(stateClone);

// Change the original state
state.user.loggedIn = false;

// Viewing Results
console.log(state.user.loggedIn); //false

// The value for the Cloned ones don't change
console.log(stateClone.user.loggedIn); // true
console.log(stateDeepClone.user.loggedIn); // true

//--- Parcel Hot Module Rebuild

if (module.hot) {
  module.hot.accept();
}

// Polifilling Array Methods, Promises & bunch of other Stuff
import 'core-js/stable';

// Polifilling async functions
import 'regenerator-runtime/runtime.js';
