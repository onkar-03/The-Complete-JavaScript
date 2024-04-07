// Coding Challenge #2 :

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// Method 1 - Calculate Tip Value
// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return 0.15 * bill;
//   } else {
//     return 0.2 * bill;
//   }
// };

// Method 2 - Calculate Tip Value
const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
};

// Method 3 - Calculate Tip Value
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

// Testing with 100
// console.log(calcTip(100));

// Array to store bills

// Method 1
// const bills = newArray(125, 555, 44);

// Method 2
const bills = [125, 555, 44];

// Tips array to store all the tips for different variables
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Printing
console.log(bills, tips);

//Calculate the total value for each bill (Bill + Tip)
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

//Printing the Total Value
console.log(total);
