'use strict';
// --- Operation with Dates:
// - Only cool thing we can do is perform operations with Dates
// - We can like subtract one date from another to see how many days have passed between the 2 dates
// - This works because whenever we convert the Date to a number its the Timestamp which is in milliseconds, and with them we can perform calculations

const future = new Date(2024, 10, 19, 15, 23);
console.log(future); // Tue Nov 19 2024 15:23:00 GMT+0530 (India Standard Time)

// - Converting the Date to a Number using Number() Function / + Operator
console.log(+future); // 1732009980000

// --- Creating a Function to calculate Days Passed:
// - date1 - date2 gives time stamp in milliseconds
// - Ued Math.abs() to always get a positive number, irrespective of which one is greater one
// - (1000 * 60 * 60 * 24): 1000 to convert to seconds, 60 to convert to minutes,60 to convert to hours, 24 to convert to days
const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
const days1 = calcDaysPassed(new Date(2024, 3, 14), new Date(2024, 3, 24));
console.log(days1); // 10

// If you need really precise calculation we can use - MomentJS library

// - What if we pass in hours and minutes etc.. too then we might need to round the whole result in the Function like this
const calcDaysPassed2 = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
const days2 = calcDaysPassed2(
  new Date(2024, 3, 14),
  new Date(2024, 3, 24, 10, 19)
);
console.log(days1); // 10
