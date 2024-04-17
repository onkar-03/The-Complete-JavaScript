'use strict';

//  ------------- Primitive DataTypes :
// - Stored in Stack
let lastName = 'William';

// Copying
let oldLastName = lastName;

// Updating
lastName = 'Davis';

console.log(lastName); // Davis
console.log(oldLastName); // William

// ------------- Reference DataTypes (Objects) :
// - Stored in Heaps
// - A reference to the Location on Heap is stored in the Stacks

const jess = {
  firstName: 'Jessica',
  lastName: 'Smith',
  age: 20,
};

const marriedJess = jess;
marriedJess.lastName = 'Davis';

// - Output of both same as we know the reference data types are stored differently
console.log('Before marriage', jess); // {firstName: 'Jessica', lastName: 'Davis', age: 20}
console.log('After marriage :', marriedJess); // {firstName: 'Jessica', lastName: 'Davis', age: 20}

// - We cannot assign the same object now to a new object
// - As the New object will have a different reference variable in stack, and we cant assign a new address value to constant variable
// - marriedJess = {};

// ------------- Copying Objects :

// - A) Shallow Copy using Objects.assign();
const jess2 = {
  firstName: 'Jessica',
  lastName: 'Smith',
  age: 20,
};

// - Now we want to create a completely new object that does not point to the same reference address in the stack rather ahs its own reference address for its object
// - We can do that by merging to objects using Objects.assign(newObject,oldObject)
// So any changes made to the Copy object wont be reflected onto the real one
const marriedJess2 = Object.assign({}, jess2);
marriedJess2.lastName = 'Davis';

// Now printing both the Objects
console.log(jess2); // {firstName: 'Jessica', lastName: 'Smith', age: 20}
console.log(marriedJess2); // {firstName: 'Jessica', lastName: 'Davis', age: 20}

// - B)  Problem with Object.assign() :
// It creates a shallow copy means that it only works for Level 1
// If say we have an object inside another object then the inner object would still behave the same way i.e have only one memory reference and no new object creation for it
// So if we change anything on the inner object both the original and the copy would be affected

// - Adding an array to the object as its an object behind the scene as well
const jess3 = {
  firstName: 'Jessica',
  lastName: 'Smith',
  age: 20,
  family: ['Alice', 'Bob'],
};

// SHALLOW COPY
// Here both the objects now have an inner object (Array) that points to the same memory address ion the Heap
// Object.assign() will not copy the deeply nested item to the new Object
// Rather the Deeply Nested object would point to the same memory address in the Heap
const marriedJess3 = Object.assign({}, jess3);

// Now printing both the Objects
console.log(jess3); // {firstName: 'Jessica', lastName: 'Smith', age: 20, family: Array(2)}
console.log(marriedJess3); // {firstName: 'Jessica', lastName: 'Smith', age: 20, family: Array(2)}

// Adding family members after marriage
marriedJess3.family.push('Carol');
marriedJess3.family.push('David');

// Watch changes reflect in both of them as we used shallow copy
console.log(jess3); // {firstName: 'Jessica', lastName: 'Smith', age: 20, family: Array(4)}
console.log(marriedJess3); // {firstName: 'Jessica', lastName: 'Smith', age: 20, family: Array(4)}
