'uses strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// - Fetching teh index and value using the .entries() on Objects, an a array i alo an Object we can ue it here too
// - abs() ued to remove the negative sign and only represent the value

for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}
/* - Movement 1: You deposited 200
     Movement 2: You deposited 450
     Movement 3: You withdrew 400
*/

// --- Using ForEach :
// - The forEach method requires a callback function as a parameter
// - So forEach is technically a higher order function
// - The callback function contains the code about what exactly need to be done
// - On each iteration it passes the Element, Index and the Array, we can take only element as well if we want
// - We dont need to write .entries() explicitly to get indexes here
// - Also it will alway loop over the entire array always
// - The 'continue' and 'break' statements don't work here at all
console.log(`-------FOR EACH-------`);
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
/* → Movement 1: You deposited 200
     Movement 2: You deposited 450
     Movement 3: You withdrew 400
...
*/

// - Use forEach when we have to iterate over the whole array
// - Use for of when we have to iterate over some part of the array / use continue or break statements
