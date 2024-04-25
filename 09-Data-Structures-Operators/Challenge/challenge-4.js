'use strict';
/*
 Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and
convert them to camelCase.

Test data:
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅ 
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  // - Fetching the Value Entered in Textarea
  const text = document.querySelector('textarea').value;
  console.log(text);

  // - Split multiple input into Rows
  const rows = text.split('\n');
  console.log(rows);

  // - Loop over the array and fetch values one by one
  for (let [i, row] of rows.entries()) {
    // - Converting them to complete lowercase first, removing spaces and splitting over the '_'
    const [first, second] = row.toLowerCase().trim().split('_');
    // const output = second[0].toUpperCase() + second.slice(1);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // }
    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }

  // camelCase(text);
});
