// & ------------------------------> Lecture 01 <-------------------------------

// ^ Activating Strict Mode : -------------------------------------------------

/* 
! Strict Mode : ---------------------------------------------------------------

    -> Introduced during ECMA5 / ES5

    -> Strict Mode is activated by adding the following line at the top of the file:
        'use strict'; at the very beginning of the script

    -> If we have any other line of code before this strict mode wont be activated

    -> So strict mode is a special mode that we can activate in JavaScript, which makes it easier for us to write a secure JavaScript code.

    -> 'secure' means : makes it easier for us developers to avoid accidental errors

    -> We can use strict mode for a specific function or block but mostly there is no point in doing that hence we use it for everything generally

    -> So basically it helps us introduce the bugs into our code and that's because of 2 reasons : 
       1. First, strict mode forbids us to do certain things

       2. Second, it will actually create visible errors for us in certain situations in which without strict mode JavaScript will simply fail silently without letting us know that we did a mistake.
*/

'use strict';

let hasDriversLicense = false;
const passTest = true;

// making a mistake in writing a long variable declared before "hasDriversLicense" as "hasDriverLicense" missing the 's'
// without strict mode we wont know about the bug and will have to find it manually
// after using strict mode we can see the error in the console with the line number as well
// then we correct the error
if (passTest) hasDriverLicense = true; // error here
if (hasDriversLicense) console.log(`I can Drive :D !!`);

// interface / private are reserved word in Js
// Hence we can't use this while the strict mode is enabled
// Strict mode just wont allow us using Js keywords
const interface = false; //error
const private = false; //error
