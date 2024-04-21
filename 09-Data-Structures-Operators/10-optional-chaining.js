' use strict';

// Object
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// ---- We want to know which if the Restaurant opens on a specific day or not ?? If it does open then we want to know the opening hours
// - 1. We need to know if restaurant contains openingHours property or not
// - 2. Then we need to check if restaurant.openingHours contains the specific day we want
// Then print the opening hours of the specific day we want if all are true

// Method 1
// - This gives error as 'restaurant.openingHours.mon' is undefined
// - undefined.open hence gives an error
// console.log(restaurant.openingHours.mon.open); // ERROR

// - Method 2 : Correct way
// - 1. Check if the restaurant has openingHours Property
// - 1. Check if the restaurant opens on a specific day or not
// - 2. Then print the opening hours of the specific day we want if all are true

// For Friday
if (restaurant.openingHours && restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
}

// For Monday
// Does not execute as 'restaurant.openingHours.mon' does not exist
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// -------------- Optional Chaining :
// - Similarly the comparisons and checks can get really heavy when we deal with nested objects
// - For this Js has Optional Chaining
// - Can be used to check property as well as methods existence
// - Cna be used to check Array as well if its empty or not
// - In there if a property does not exist then 'undefined' is returned immediately by optional chaining
// - Using this we can avoid the kind of error we saw earlier
// - Written with '?.'
// - Takes away all the work of if comparisons and is very handy

// Using optional chaining
// - Only when the mon exists only then the property value will be returned otherwise undefined will be returned

console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours.fri?.open); // 11

// Example :
// - Using optional chaining in somewhat better example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Log whether the restaurant is open / close on each of the days
for (const day of days) {
  // Checking if the property exists for the restaurant
  // Also if it does not exist we set a default value using ||
  // - But as we have 0 as one of the opening hours hence we use the nullish coalescing operator ??
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

// Methods Check using optional chaining
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist !!');
console.log(restaurant.orderPizza?.(0, 1) ?? 'Method does not exist !!');

// Arrays
// let user = [{ name: 'Andy', age: 23 }];
const user = [];
console.log(user[0]?.name || 'User name does not exist');
