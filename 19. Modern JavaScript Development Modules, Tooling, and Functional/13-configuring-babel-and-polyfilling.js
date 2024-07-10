//////////////////////////////////////
// 10. Configuring Babel and Polyfilling

// Bundling the 3 Modules using Parcel
console.log('Importing module');

// MODULE 2: ./shoppingCart.js
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

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

// --- Class Creation
class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

// Object
const onkar = new Person('Onkar');

// Nullish
console.log('Onkar' ?? null);

// --- Using Modern Array Methods & Promises
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(res => console.log(res));

// --- Polifilling Array Methods, Promises & bunch of other Stuff
// import 'core-js/stable';
import 'core-js/stable/array/find.js';
import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime';
