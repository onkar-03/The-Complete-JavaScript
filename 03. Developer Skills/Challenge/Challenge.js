/* Coding Challenge : 

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4] 
*/

// 1) Understanding the Problem :
// - Array transformed to String, separated by ...
// - What is the X days ? Answer : Index  +1

// 2) Breaking up into sub-problems
// - Transform the Array into a String
// - Transform each element to String using °C
// - Strings need to contain day (Index + 1)
// - Add ... between elements and start and end of string

function printForecast(temps) {
  let str = '';
  for (let i = 0; i < temps.length; i++) {
    // Check if its Number
    if (typeof temps[i] != 'number') continue;
    else {
      str += `... ${temps[i]}°C in ${i + 1}days `;
    }
  }
  // ... at last of the string too
  str += '...';
  return str;
}

// Test Data 1
temps = [17, 21, 23];

//Test Data 2
temps2 = [12, 5, -5, 0, 4];

// Result
const finalString = printForecast(temps);
console.log(finalString);

const finalString2 = printForecast(temps2);
console.log(finalString2);
