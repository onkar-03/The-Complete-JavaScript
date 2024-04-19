'use strict';
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

  // - Destructuring the Object Received via function call
  orderDelivery: function ({ time, place, mainIndex, starterIndex }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${place} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here are the Ingredients : ${ing1}, ${ing2}, ${ing3}`);
  },

  // - Destructuring Elements and also binding teh rest of the Ingredients except the main one into an array using rest function
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ------------ Short Circuiting Logical AND (&&) & OR (||) :
// - Logical Operators are not only used with boolean value (T/F)
// - We can use them with any data type, return any data type, Short Circuiting

console.log(`-------- LOGICAL OR --------`);
// A) Short Circuit Logical OR '||' :

// - Short Circuiting Logical OR means that if any one value is Truthy Value i.e not ( 0 , null , '' , undefined ,NaN) then it will immediately return the value, wont even scan the rest of the values

// - Incase the Engine gets no truthy value on evaluating the whole expression till the very end then it will print the last falsy value of the expression as an Output

// - They can be used to set the default values for many cases instead of using the if-else / ternary operators

// Example 1 :
// - Here as soon as Engine scan 3 a Truthy value it prints it and short circuits the rest of the values
// - Similar to OR operation which gives True if one of the values is True
console.log(3 || 'Andy'); // 3

// Example 2 :
// Here as the '' is falsy value, but 'Andy' is truthy value so Engine prints it and short circuits the rest of the values
// - Similar to OR operation which gives True if one of the values is True
console.log('' || 'Andy'); // Andy

// Example 3 :
// - Here 'true' is the truthy value so Engine prints it and short circuits the rest of the values
// - Similar to OR operation which gives True if one of the values is True
console.log(true || 0); // true

// Example 4 :
// - Here Engine Evaluates the values till the very end but as gets no truthy values so it prints the last falsy value
// Similar to OR operation which gives false when all the values are false
console.log(undefined || null || 0); // 0

// Example 5 :
// - Prints hello as its a truthy value and short circuits the rest of the code
console.log(undefined || 0 || null || 'hello' || '');

// - Setting Default Value
// - We wan to we set the default value to 10 incase we dont have te numberOfGuests property in the object

// Practical Example
// - Method 1 : Ternary Operator
// - Incase the numberOfGuests dont exist then it would be a falsy value and 10 a truthy value will be set as default value
// restaurant.numberOfGuests = 23;
const guests = restaurant.numberOfGuests ? restaurant.numberOfGuests : 10;
console.log(guests);

// Method 2 : Short Circuiting
// - Incase the numberOfGuests dont exist then it would be a falsy value and 10 a truthy value will be set as default value
// restaurant.numberOfGuests = 23;
const guests2 = restaurant.numberOfGuests || 10;
console.log(guests2);

// Special
// - But here we want the value of guests number to be 0 but still we have 10 as O/P
// - We will learn how to tackle this ahead !!

restaurant.numberOfGuests = 0;
const guests3 = restaurant.numberOfGuests || 10;
console.log(guests3);

console.log(`-------- LOGICAL AND --------`);
// B) Short Circuit Logical AND '&&' :

// - Short Circuiting Logical AND means that if any one value is Falsy Value i.e ( 0 , null , '' , undefined ,NaN) then it will immediately return the value, wont even scan the rest of the values

// - Incase the Engine gets no falsy value on evaluating the whole expression till the very end then it will print the last truthy value of the expression as an Output

// - Used to check if a certain property or value exists

// Example 1 :
// - Here '0' is the falsy value so Engine prints it and short circuits the rest of the values
// - Similar to AND operation which gives False if one of the values is False
console.log(0 && 'Andy'); // 0

// Example 2 :
// - Here Engine Evaluates the values till the very end but as gets no falsy values so it prints the last truthy value
// - Similar to AND operation which gives true when all the values are true
console.log(7 && 'Andy'); // Andy

// Example 3 :
// - Here 'null' is the falsy value so Engine prints it t and short circuits the rest of the values
// - Similar to AND operation which gives False if one of the values is False
console.log('hello' && 23 && null && 'andy'); // null

// Practical Example :
// - To check if the value exists or not

// Method 1 :
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom', 'Cheese');
}

// Method 2 :
// - && will return wither the falsy value in case the restaurant.orderPizza does not exist or return the last truthy value
const order =
  restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Cheese');
console.log(order);
