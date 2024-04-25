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
  // - Fetching teh Value Entered in Textarea
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

function camelCase(str) {
  // - Remove all spaces from the string
  const freshString = str.trim();
  // console.log(freshString);

  // - Now split them using '_' separator
  const splitStrings = freshString.split('_');
  // console.log(splitStrings);

  // - For camelCase conversion
  // - First Fetch the Second Word of the String Stored in the split array
  // - Then Convert its first character to Uppercase & join the rest of the string
  // - Now Join the 2 strings of Split array'
  const final =
    splitStrings[0] +
    splitStrings[1][0].toUpperCase() +
    splitStrings[1].slice(1);

  console.log(final);
}

// camelCase('  under_score ');
// camelCase('Some_Variable ');
