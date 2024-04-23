'use strict';

//------------- Working with Strings PART 2 :
// - 1) .toLowerCase() : Converts the string to lower case
// - 2) .toUpperCase() : Converts the string to upper case
// - 3) .trim() : Use to Remove thee white spaces and \n etc.. in the string
// - 4) .trimStart() : Trim whitespace only from the Start of the String
// - 5) .trimEnd() : Trim whitespace only from the End of the String
// - 6) .replace( Old,New ) : Used to replace the Characters / Strings in the String
// - 7) .replaceAll( Old,New ) : Used to replace all the Characters / Strings in the
// - 8) .includes() : This method checks whether a string contains a specified substring
// - 9) .startsWith() : This method checks whether a string starts with a specified substring
// - 10) .endsWith() : This method checks whether a string ends with a specified substring
const airline = 'TAP Air Portugal';
const plane = 'A320';

// --- Converting String to Lower & Upper Case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// ---  Fix Capitalization of User Input : 'dAvId'
// - First convert the user input to Lowe Case
// - Then Convert the First Character to Upper Case
// - Add the rest of the  String as it is with teh upper case character
const userInput = 'dAvId';
const userLower = userInput.toLowerCase();
const userCorrect = userLower[0].toUpperCase() + userLower.slice(1);
console.log(userCorrect); // David

// --- Comparing Emails
// - First convert the Email to lowercase
// - Trim the String for any white spaces, \n etc..
const userEmail = 'hello@onkar.io';
const loginEmail = '  Hello@Onkar.io \n';

// - Method 1
const lowerEmail = loginEmail.toLowerCase();
const trimEmail = lowerEmail.trim();
console.log(trimEmail);

// - Method 2
// - Just ass in Case of Maps we could extend the Operations one after the other we can do the same here
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// --- Replacing Characters in teh String
const priceGB = '277,94£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All Passengers come to Boarding Door 23';
const newAnnouncement = announcement.replaceAll('Door', 'Gate');
console.log(newAnnouncement);

// - Without replaceAll what we can do is convert the String to Regular Expression
// - /String/ = Regular Expression
// - /String/g = Global
const newAnnouncement2 = announcement.replaceAll(/Door/g, 'Gate');
console.log(newAnnouncement2);

// --- Boolean Methods
const planeName = 'Airbus a320neo';
console.log(planeName.includes('Airbus')); // true
console.log(planeName.startsWith('Bus')); // false
console.log(planeName.endsWith('o')); // true

if (planeName.startsWith('Airbus') && planeName.endsWith('neo')) {
  console.log('Part of the New Airbus Family');
}

// Practice exercise
const checkBaggage = function (items) {
  // Convert User Input first to LowerCase
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board!');
  } else {
    console.log('Welcome abroad!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket knife');
// → You are NOT allowed on board!
checkBaggage('Socks and camera');
// → Welcome abroad!
checkBaggage('Got some snacks and a gun for protection');
// → You are NOT allowed on board!
