'use strict';

// --- .sort()Method:
// - The sort() method sorts the elements of an array in place and returns the sorted array.
// - The sort method mutates the original array, so be very careful while using this
// -  By default, the sort() method sorts the elements alphabetically as strings, it sorts based on strings by default
// - It converts everything to String and then sorts the values
// - However, you can also provide a custom sorting function 'callback function' to sort elements based on custom criteria.

// - A) using the sort() method on Strings:
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // - [("Adam", "Jonas", "Martha", "Zach")];
console.log(owners); // - [("Adam", "Jonas", "Martha", "Zach")];

// - B) Using the sort() method on Numbers:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// - But as we know sort() method sorts based on strings by default
// - Hence we get this absurd O/P with Numbers
// - First -(minus) is read then 1,4,6
// - Similarly for positive numbers 1,2,3,4,7 is read in order
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

// - C) Sorting Number using custom callback function:

// --- What is Compare Function ??
// -The comparison function is a crucial part of the sort() method in JavaScript.
// - It's used to define the sorting order for the elements in an array.
// - The comparison function receives two parameters, conventionally named a and b, which represent two elements of the array being compared.
// - The function should return a negative value if a should come before b in the sorted array, a positive value if a should come after b, and zero if a and b are considered equal in terms of sorting.

// --- How to use Compare function ??

// - Ascending Order:
// - If a is less than b, a - b will be negative, indicating that a should come before b.
// - return < 0, then A, B (keep order)

// - Descending Order
// - If a is greater than b, a - b will be positive, indicating that a should come after b.
// - return > 0, then B, A (switch order)

// - If a is equal to b, a - b will be zero, indicating that a and b are considered equal in terms of sorting.

// --- IMPORTANT NOTE:
// - Returning -1 means to keep the order of elements
// - Returning 1 means to switch the order of elements

movements.sort((a, b) => (a > b ? 1 : -1));
console.log(movements); // - [-650, -400, -130, 70, 200, 450, 1300, 3000]

// - Ascending Order
// - Negative value => keep the order (-650 + 400)
movements.sort((a, b) => a - b);
console.log(movements); // - [-650, -400, -130, 70, 200, 450, 1300, 3000]

// - Descending Order
// - Negative value => keep the order ( 1300 - 3000)
movements.sort((a, b) => b - a);
console.log(movements); // - [3000, 1300, 450, 200, 70, -130, -400, -650]
