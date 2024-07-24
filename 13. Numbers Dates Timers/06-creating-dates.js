'use strict';

// * --- Creating a date

// Method 1:
// - using the new Date() constructor
console.log(new Date());
// Mon May 13 2024 16:20:13 GMT+0530 (India Standard Time)

// Method 2:
// - Parse date through a string
console.log(new Date('May 30 2024 08:03:41'));
// Thu May 30 2024 08:03:41 GMT+0530 (India Standard Time)

// Method 3:
// - By passing the Year, Month, Date, Hour, Minutes, & Seconds to create a date from it
// - Also Months in Js are 0 Index Based [0: Jan, 1: Feb, ...]
// - Week Days in Js are also 0 Indexed [0: Sunday, 1: Monday, ...]
console.log(new Date(2026, 10, 19, 15, 23, 5));
// Thu Nov 19 2026 15:23:05 GMT+0530 (India Standard Time)

// - Also Js auto corrects the dates if given wrong, like november has only 30 days if we write 33 as a day then it automatically shifts to december
console.log(new Date(2026, 10, 33));
// Thu Dec 03 2026 00:00:00 GMT+0530 (India Standard Time)

// Method 4
// - We can pass in the number of milliseconds that passed in after Unix time 1970 Jan 1, in the new Date()
console.log(new Date(0)); // Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Summer Time)

// - Converting 3 days to milliseconds
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 02:00:00 GMT+0200 (Eastern European Summer Time)

// * --- Working with dates:
// - Date() are also special type of iObjects an we have various methods associated with them just like arrays

// - Creating a Date
const future = new Date(2024, 10, 19, 15, 23);
console.log(future); // Tue Nov 19 2024 15:23:00 GMT+0530 (India Standard Time)

// & --- Getting various parts of a Date:

// - 1. getFullYear(): Returns the year (four digits) of the specified date
console.log(future.getFullYear()); // 2024

// - 2. getMonth(): Returns the month (from 0 to 11) of the specified date
console.log(future.getMonth()); // 10

// - 3. getDate(): Returns the day of the month (from 1 to 31) of the specified date
console.log(future.getDate()); // 19

// - 4. getDay(): Returns the day of the week (from 0 to 6) of the specified date
console.log(future.getDay()); // 2

// - 5. getHours(): Returns the hour (from 0 to 23) of the specified date
console.log(future.getHours()); // 15

// - 6. getMinutes(): Returns the minutes (from 0 to 59) of the specified date
console.log(future.getMinutes()); // 23

// - 7. getSeconds(): Returns the seconds (from 0 to 59) of the specified date
console.log(future.getSeconds()); // 0

//  - 8. toISOString(): It is useful when you want to convert particular date into a string where you can store somewhere
console.log(future.toISOString()); // 2037-11-19T13:23:00.000Z

// - 9. getTime(): we can also store the time stamp that is the number of milliseconds passe since the uUnix Time Jan 1 1970
console.log(future.getTime()); // 1732009980000

// - 10. We can print the real time that we stored as a time stamp like this
console.log(new Date(1732009980000));
// Tue Nov 19 2024 15:23:00 GMT+0530 (India Standard Time)

// - 11. Date.now() returns the current time stamp if we want
console.log(Date.now()); // 1715598833150

// & --- Setting various parts of a Date:

// 1. .setFullYear(): : Sets the full year for a specified date according to local time
future.setFullYear(2040);
console.log(future.getFullYear()); // 2040

// - Similarly we have methods for Month, Date, Day etc.. all of the above and Js performs auto correction in situations like when we pass 33 November and a date etc...
