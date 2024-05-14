'use strict';

// --- Internationalizing Dates:
// - Internationalizing Dates in JavaScript involves using the Intl.DateTimeFormat object
//-  It provides language-sensitive date and time formatting

// Process
// - We create a Date object representing the current date and time.
// - Then, we create an Intl.DateTimeFormat object, specifying the desired locale ('en-US' for English, United States), this creates a formatter overall
// - Within the Intl.DateTimeFormat options, we can specify various formatting styles for both date and time
// - Finally, we call the format() method of the Intl.DateTimeFormat object to format the date according to the specified options, here we pass the date created as an argument that we want to format

// Language-sensitive date and time formatting
const now = new Date();

console.log(now); // Tue May 14 2024 14:49:00 GMT+0530 (India Standard Time)

// English US
console.log(new Intl.DateTimeFormat('en-US').format(now)); // 6/17/2022

// English Great Britain
console.log(new Intl.DateTimeFormat('en-GB').format(now)); // 17/06/2022

// - If we dont specify any options to the Intl.DateTimeFormat() except a locale then only the date format of that region is printed as O/P
// - But we can also specify an options Object which contains all the options that we want to display in the UI
// - All we need to do is specify the property and the type, numeric for numbers & long for strings
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',

  // 2-digit is used to display months < 10 with a 0 in front
  // month: '2-digit',
};

console.log(new Intl.DateTimeFormat('en-GB', options).format(now)); // Friday, 17 June 2022, 22:08
console.log(new Intl.DateTimeFormat('en-UK', options).format(now)); // Tuesday, 14 May 2024 at 14:58

// - Get Local from users Browser:
// - It makes no sense to define the locale manually, hence we can also get it from teh users browser and use that instead

// - Get the preferred language of the user, usually the language of the browser UI.
const locale = navigator.language;
console.log(locale); // 'en-US'

// - To view all the locales ISO Table Codes goto: http://www.lingoes.net/en/translator/langcode.htm
