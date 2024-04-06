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
        return ; // if function returns a value
             }

     -> statements + return are called the body of the function
     -> Parameters : are like the local variables of the function
     -> They are used as placeholders to receive input values

! Calling a Function : --------------------------------------------------------
    Syntax : const value = functionName(Arguments);

    -> Holding the returned value of function in a variable , incase functions returns a value
    -> passing arguments to the function, which assign values to the parameters / placeholders defined in the function

! return keyword : -----------------------------------------------------------
    -> The return; statement immediately returns to the next line after the function call.
    -> This means anything written after the return statement will not be executed
    -> The return keyword is used to return a value from a function

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
     -> If we want to pass parameters to anonymous function we do it by passing values to the variable holding the anonymous function / expression.

! What is Hoisting ?? 
    -> Hoisting in JavaScript is a mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. 
    -> This means that regardless of where the declarations occur within the scope, they are effectively "hoisted" to the top.

* When it comes to functions, hoisting means that function declarations are hoisted entirely, whereas function expressions are not hoisted in the same way.

! Function Declaration:

    -> Function declarations are created using the function keyword followed by the name of the function, a list of parameters (enclosed in parentheses), and the function body (enclosed in curly braces).
    -> Function declarations are hoisted, which means they are moved to the top of their scope during the compilation phase, allowing you to call the function before it's declared in your code.

    ~ eg : Function Declaration 
           function name (){
             Statements to execute
           }

    ~ eg : Function Hoisting 
           greet("Alice"); // Output: "Hello, Alice!"
           function greet(name) {
                     return "Hello, " + name + "!";
           }

* In this case, even though the function call greet("Alice") comes before the actual function declaration, it still works. This is because the function declaration itself is hoisted to the top of the scope during compilation, so when the code is executed, the function is already available.

! Expression :  
    -> Function expressions define functions as part of an expression. They can be anonymous (where the function has no name) or named.
    -> They can be assigned to variables, passed as arguments to other functions, or returned from other functions.

    ~ eg : Expression Declaration 
         var greet = function(name) {
           return "Hello, " + name + "!";
         };
     ~ eg : Expression Declaration
          var greet = function greet(name) {
           return "Hello, " + name + "!";
         };

     ~ eg : Expression Hosting
          greet("Bob"); // Error: greet is not a function
          var greet = function(name) {
             return "Hello, " + name + "!";
           };

* In this example, a function expression is assigned to the variable greet. Function expressions are not hoisted in the same way as function declarations. So, when you try to call greet("Bob") before the assignment, you'll get an error because greet is not yet defined
*/

// Function Declaration & Hosting

// Method 1
// console.log(calcAge1(2001));

// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }

// Method 2
// function calcAge2(birthYear) {
//   return 2024 - birthYear;
// }

// console.log(calcAge2(2001));

// Function Expression & Hosting
// Here as the anonymous function gives a value hence its an expression

// Method 1 : Right Approach
// const calcAge4 = function (birthYear) {
//   return 2024 - birthYear;
// };

// console.log(calcAge4(2001));

// Method 2 : Wrong Approach as hosting doesn't work for expressions

// Throws error can not access calcAge3 before initialization
// console.log(calcAge3(2001));

// const calcAge3 = function (birthYear) {
//   return 2024 - birthYear;
// };

// & ------------------------------> Lecture 04 <-------------------------------

// ^ Arrow Functions : -------------------------------------

/*
    -> Apart from 2 Function Types we saw 'Function Declaration' & 'Function Expression' there is a third type of added to Javascript in ES6 called Arrow Function.

    -> Arrow function is simply a special form of 'Function Expression' that is shorter and therefore faster to write.

    -> The Arrow Function are Anonymous, there is nothing like named arrow functions

    -> If we have only one liner Statement then we can skip the return keyword 
    -> If there are multiple lines of code / statements then we can skip the return keyword, and need to write the statements inside the {}

    -> There is also no 'this' keyword used in arrow functions about which we will learn later

    -> If we have multiple parameters we nee dto bind them under ()
    -> If there is only a single parameter then its not compulsory


    -> Declaration : 
       eg : const var = (parameters) => {Statements to execute;}
*/

// Anonymous Function Expression
// const calcAge6 = function (birthYear) {
//   return 2024 - birthYear;
// };

// 1. Arrow Function for same Anonymous Function with one argument and single statement
// No need of return keyword / () for parameter declarations
// const calcAge = (birthYear) => 2024 - birthYear;
// const age = calcAge(2001);
// console.log(age); //23

// 2. Arrow Function Multiple Statements & Single Parameter
// Multiple lines of code inside the Anonymous function hence we cant skip the return keyword, and write statements inside {}
// const retirementAge = (birthYear) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// const retire = retirementAge(2001);
// console.log(retire); //42

// 2. Arrow Function Multiple Statements & Multiple Parameter
// Wee cant skip return keyword, need to bind parameters inside () & write statements inside {}
// const retirementAge2 = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// const retire2 = retirementAge2(2001, 'Andy');
// console.log(retire2);

// & ------------------------------> Lecture 04 <-------------------------------

// ^ Function calling other Functions : ----------------------------------------

/* 
    -> In JavaScript, you can create functions that call other functions. This is a fundamental aspect of modular programming and helps in organizing code into smaller, more manageable pieces
*/

function cutFruitPiece(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  // Calling another function inside a function
  // First cutting the Fruits to smaller pieces
  const applePieces = cutFruitPiece(apples);
  const orangePieces = cutFruitPiece(oranges);

  // Juice from the Fruits
  const juice = `Juice with ${applePieces} apple pieces & ${orangePieces} orange pieces`;
  return juice;
}

const juice = fruitProcessor(2, 3);
console.log(juice); // 8 apple pieces & 12 orange pieces

// Another Example

function calcAge(birthYear) {
  return 2024 - birthYear;
}

const retirementAge2 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement >= 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired 🥳`;
  }
};

const retire = retirementAge2(2001, 'Andy');
console.log(retire);

console.log(retirementAge2(1920, 'Anderson'));
