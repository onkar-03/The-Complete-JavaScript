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

// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// making a mistake in writing a long variable declared before "hasDriversLicense" as "hasDriverLicense" missing the 's'
// without strict mode we wont know about the bug and will have to find it manually
// after using strict mode we can see the error in the console with the line number as well
// then we correct the error
// if (passTest) hasDriverLicense = true; // error here
// if (hasDriversLicense) console.log(`I can Drive :D !!`);

// interface / private are reserved word in Js
// Hence we can't use this while the strict mode is enabled
// Strict mode just wont allow us using Js keywords
// const interface = false; //error
// const private = false; //error

// & ------------------------------> Lecture 02 <-------------------------------

// ^ Functions : -------------------------------------------------

/* 
    -> Fundamental Building Blocks of real world javascript programs / applications are functions 

! What are Functions ?? 
    -> A piece of code that we can reuse over and over again in our code. So it's a little bit like a variable but for whole chunks of code. 
    -> Remember a variable holds value but a function can hold one or more complete lines of code.
    -> We also pass data into a function and additionally, a function can also return data as well which means to give us data back that we can then use for something else in the program.
    -> If we return a value then we need to have a variables holding the result of that function as well
    -> Just like variables always use descriptive function names so that names make it very clear the purpose of the function

! Defining a Function : -----------------------------------------------------

    Syntax : function name (Parameters){
        Executable Statements
             }

! Calling a Function : --------------------------------------------------------
    Syntax : functionName(Arguments);

* CONCLUSION : Functions allow us to write more maintainable code. As we can create a reusable piece of code without having to write it over and over again.

* Always remember to follow 'DRY' Principle : Don't Repeat Yourself for clean Code
*/

'use strict';

// Defining a function
// Without a return value & without any arguments
// function logger() {
//   console.log(`My name is Onkar !!`);
// }

// calling / running / invoking a function
// logger();

// Defining a Function
// This function has arguments and also returns a value
// function fruitProcessor(apples, oranges) {
// Printing the passed values inside the function
//   console.log(`I have ${apples} apples and ${oranges} oranges`);
//   const juice = `Juice with ${apples} apples & ${oranges} oranges`;
//   return juice;
// }

// we could also have directly logged it to the console the returned value but its a good practice to store it in a variable and then use it
// console.log(fruitProcessor(2, 3));

// Storing the returned value in a variable
// const appleJuice = fruitProcessor(2, 0);
// console.log(appleJuice);

// Storing the returned value in a variable
// const appleOrangeJuice = fruitProcessor(2, 3);
// console.log(appleOrangeJuice);

// & ------------------------------> Lecture 03 <-------------------------------

// ^ Functions Declaration Vs Expression : -------------------------------------

/* 
    -> Anonymous Function : a function without a name is called anonymous function
        eg : function (){
             Statements;
            }

! Function Declaration:

    -> Function declarations are created using the function keyword followed by the name of the function, a list of parameters (enclosed in parentheses), and the function body (enclosed in curly braces).
    -> Function declarations are hoisted, which means they are moved to the top of their scope during the compilation phase, allowing you to call the function before it's declared in your code.

    eg : function greet(name) {
           return "Hello, " + name + "!";
        }


! Expression :  
    -> Function expressions define functions as part of an expression. They can be anonymous (where the function has no name) or named.
    -> They can be assigned to variables, passed as arguments to other functions, or returned from other functions.

    eg : var greet = function(name) {
           return "Hello, " + name + "!";
         };
    eg : var greet = function greet(name) {
           return "Hello, " + name + "!";
         };     

*/

//Function Declaration
function calcAge1(birthYear) {
  return 2024 - birthYear;
}

//Method 1 to display
// const age = calcAge1(2001);
// console.log(age);

//OR

//Method 2 to display
console.log(calcAge1(2001));

// Function Expression
// Anonymous function declaration as an expression
// Here as the anonymous function gives a value hence its an expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

console.log(calcAge2(2001));
