'use strict';

// ------------- Sets :
// - Set is a data structure that stores a collection of unique values, where each value can occur only once within the set
// -Sets are handy for storing distinct values and performing operations like intersection, union, and difference efficiently
// - Sets are also Iterables, hence we can loop over them directly
// - There are no Index based access in Sets
// - There is no way to retrieve any value out of the set, also it does make sense as all the values are unique there is no point in retrieving values out of the set all we need to know is whether a value exists in the set or not

// ------------- Method of Sets :
// - 0. new Set(); : Used to Create a Set
// - 1. .size : Used to Calculate the Size of the Set , we dont use '.length; here
// - 2. .has : Used to check if the specified element is present in the Set or not, similar to .includes of Arrays [returns a boolean value T/F]
// - 3. .add : Used to add a new element to the Set
// - 4. .delete : Used to delete an element from the Set
// - 5. .clear : Used to clear the Set completely

// ------------- Sets VS Arrays :
// - They both are DataStructures in Javascript

// --- Arrays :
// - 1. Arrays maintain the order of elements (Ordered Collection)
// - 2. Arrays can contain duplicate values
// - 3. Elements in arrays are accessed using their numeric index
// - 4. Arrays are one of the most commonly used data structures in JavaScript and are versatile for storing collections of elements of any data type.
// - If we want to store values and then retrieve it then Storing them in the Arrays is the best way to do it

// --- Sets  :
// - 1. Sets do not maintain the order of elements (Unordered Collection)
// - 2. Sets contain only unique values. If you try to add a value that already exists in the set, it will not be added again.
// - 3. Sets do not support indexed access. You cannot directly access elements by their position or index.
// - 4. Sets are useful when you need to maintain a collection of unique values or perform set operations such as union, intersection, and difference.
// - 5. Checking for the existence of an element in a set is efficient compared to arrays, especially for large collections, as sets use hashing to determine uniqueness.

// - Declaring a Set
const ordersSet = new Set(['Pasta', 'Pizza', 'Burger', 'Pizza', 'Pasta']);

// - On printing we get only distinct values
console.log(ordersSet);

// - Strings are also iterable
console.log(new Set('Onkar')); // Displays each character individually

// - Empty set
console.log(new Set());

// - Size of set
console.log(ordersSet.size); // 3

// - Check Existence of Value in a Set
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Ice Cream')); // false

// - Adding elements to Set
ordersSet.add('IceCream');

// - Adding again wont make a difference as set does  not contain same values
ordersSet.add('IceCream');
console.log(ordersSet);

// - Removing Elements
ordersSet.delete('Pasta');
console.log(ordersSet);

// - Clearing the whole Set
ordersSet.clear();
console.log(ordersSet);

// - Looping over the Sets :
const orderSet = new Set(['Pasta', 'Pizza', 'Burger', 'Pizza', 'Pasta']);
for (const item of orderSet) {
  console.log(item);
}

// --- Creating a Set from an Array
const staff = ['Waiter', 'Chef', 'Chef', 'Waiter', 'Manager'];

// --- Creating a Set of all Distinct Positions in the Restaurant
const staffUnique = new Set(staff);
console.log(staffUnique);

// --- Number of Distinct Positions in the Restaurant
console.log(new Set(['Waiter', 'Chef', 'Chef', 'Waiter', 'Manager']).size);

// --- Creating an Arrays of a Set Elements
// - Sets are Iterables hence we can use the '...' Spread Operator here
// - We can also Store the Distinct Positions as an array
const staffUniques = [...new Set(staff)];
console.log(staffUniques);

// --- Calculating Number of Distinct Letters in a String
console.log(new Set('Andy').size); // 4
