'use strict';

// --- Internationalizing Numbers:
// - Internationalizing numbers in JavaScript involves using the Intl.NumberFormat object, which provides language-sensitive number formatting

// Process
// - We create a Number we want
// - Then, we create an Intl.NumberFormat object, specifying the desired locale ('en-US' for English, United States), formatter overall
// - Finally, we call the format() method of the Intl.NumberFormat object to format the number according to the specified locale, here we pass the number created as an argument that we want to format

// Creating a Number
const num = 3884764.23;
console.log(`US: ${new Intl.NumberFormat('en-US').format(num)}`); // US: 3,884,764.23

console.log(`Germany: ${new Intl.NumberFormat('de-DE').format(num)}`);
// Germany: 3.884.764,23

console.log(`Bulgaria: ${new Intl.NumberFormat('bg').format(num)}`);
// Bulgaria: 3 884 764,23

// - If we dont specify any options to the Intl.NumberFormat() except a locale then only the Number formatted according to the specified locale
// - But we can also specify an options Object which contains all the options that we want to display in the UI
// - All we need to do is specify the property and the type of unit for the Number

// A) Options Object
// - Style: can have 'unit', 'percent', 'currency'
const options = {
  style: 'unit',
  unit: 'mile-per-hour',
};

console.log(`UK: ${new Intl.NumberFormat('en-GB', options).format(num)}`);
// UK: 3,884,764.23 mph

console.log(`US: ${new Intl.NumberFormat('en-US', options).format(num)}`);
// UK: 3,884,764.23 mph
console.log(`Germany: ${new Intl.NumberFormat('de-DE', options).format(num)}`);

// B) Options Object
// - On writing the currency as a value for style we need to mention the currency type to be used, also it then ignores anything else written other than teh currency value
// - We need to give the value for currency as it does not derive itself from the locale only on its own
const options2 = {
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'EUR',

  // - If we dont want teh separators in between the Numbers we set the useGrouping to false
  // useGrouping: false
};

console.log(`US: ${new Intl.NumberFormat('en-US', options2).format(num)}`);
// US: €3,884,764.23

console.log(`Bulgaria: ${new Intl.NumberFormat('bg', options2).format(num)}`);
// Bulgaria: 3884764,23 €

// C) Options Object
// - When style is given percent then it ignores the unit/ currency mentioned completely and the string has a % at the en
const options3 = {
  style: 'percent',
  unit: 'mile-per-hour',
  currency: 'EUR',
};

console.log(`US: ${new Intl.NumberFormat('en-US', options3).format(num)}`);
// US: 388,476,423%

console.log(`Bulgaria: ${new Intl.NumberFormat('bg', options3).format(num)}`);
// Bulgaria: 388 476 423%
