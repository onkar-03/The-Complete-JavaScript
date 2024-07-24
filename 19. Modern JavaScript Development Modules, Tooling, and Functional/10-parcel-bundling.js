//////////////////////////////////////
// 10. Parcel Bundling

// MODULE 1: 10-parcel-bundling.js

console.log('Importing module');

// MODULE 2: ./shoppingCart.js
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// MODULE 3: 'lodash-es'
// While Using Module Bundlers we dont need to specify the whole path as we do normally, we can just type the module name and the bundler i.e. Parcel here will automatically figure out the path and include it
// This works with all assets HTML, CSS, SASS Files, Images  etc...

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
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

// --- Bundled the 3 Modules using Parcel
// CODE: npx parcel index.html

//--- Parcel Hot Module Rebuild
// Means that when ever a change occurs in one of the Modules the Parcel will automatically trigger a rebuild
// Also the new Modified Bundle will automatically be injected into the Browser, without triggering a Page Reload

if (module.hot) {
  module.hot.accept();
}
