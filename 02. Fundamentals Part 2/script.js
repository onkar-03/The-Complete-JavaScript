// & ------------------------------> Lecture 01 & 02 <-------------------------------

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

// & ------------------------------> Lecture 03 <-------------------------------

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

// & ------------------------------> Lecture 04 <-------------------------------

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

// & ------------------------------> Lecture 05 <-------------------------------

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

// & ------------------------------> Lecture 06 & 07 <-------------------------------

// ^ Function calling other Functions : ----------------------------------------

/* 
    -> In JavaScript, you can create functions that call other functions. This is a fundamental aspect of modular programming and helps in organizing code into smaller, more manageable pieces
*/

// function cutFruitPiece(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
// Calling another function inside a function
// First cutting the Fruits to smaller pieces
// const applePieces = cutFruitPiece(apples);
// const orangePieces = cutFruitPiece(oranges);

// Juice from the Fruits
//   const juice = `Juice with ${applePieces} apple pieces & ${orangePieces} orange pieces`;
//   return juice;
// }

// const juice = fruitProcessor(2, 3);
// console.log(juice); // 8 apple pieces & 12 orange pieces

// Another Example

// function calcAge(birthYear) {
//   return 2024 - birthYear;
// }

// const retirementAge2 = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement >= 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired 🥳`;
//   }
// };

// const retire = retirementAge2(2001, 'Andy');
// console.log(retire);

// console.log(retirementAge2(1920, 'Anderson'));

// & ------------------------------> Lecture 09 <-------------------------------

// ^ Introduction to Arrays : ---------------------------------------------

/* 

! What is Array ?? -----------------------------------------------------------

    -> Arrays in JavaScript are used to store multiple values in a single variable. 

    -> They are a type of data structure that allows you to store collections of items.

     -> Arrays can hold any data type, including numbers, strings, objects, functions, and even other arrays.

    -> Arrays in JavaScript are zero-indexed, meaning the first element is accessed with an index of 0, the second element with an index of 1, and so on.

    -> Arrays in JavaScript can store elements of different data types. While it's common for arrays to contain elements of the same type (e.g., an array of numbers or an array of strings), JavaScript does not enforce this. You can mix different data types within the same array.

    -> Arrays in JavaScript are mutable, meaning you can change their elements, length, and properties, even if they are declared as const.

    -> But we can't change the whole array with new elements thats not possible, gives error : 'Assignment to const variable' 

* Basic Operations on Array : --------------------------------------------------------

    1. Printing all Elements of array : console.log(arrayName);
    2. Printing Individual Elements of array : console.log(arrayName[index]);
    3. Printing Length of array : console.log(arrayName.length);
    4. Mutating the Array : arrayName[index] = newValue;
*/

// ! Declaring an array Method 1 :
// const friends = ['Andy', 'Michael', 'Jordan'];

// Printing all the elements of array
// console.log(friends);

// Printing Individual Elements of array
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// ! Declaring Arrays Method 2 :
// const years = new Array(1990, 1995, 2000);

// Printing all the elements of array
// console.log(years);

// Printing Individual Elements of array
// console.log(years[0]);
// console.log(years[1]);
// console.log(years[2]);

// Array Holding different data types under one variable name
// const firstName = 'Andy';
// const variety = [firstName, 'Michael', 2000, 'Jordan', 1995];

//Printing the whole array
// console.log(variety);

//Printing the Array length
// console.log(variety.length);

// Finding Length of Array
// console.log(friends.length); // 6

// Accessing Second last Element of array
// Index : length of array - 1
// console.log(friends[friends.length - 1]);

// Mutating the array
// friends[2] = 'Harry';

// Printing the new array
// console.log(friends);

// Trying to change the whole array : ERROR 'Assignment to const variable'
// friends = ['Alice', 'Jack'];

//Exercise
// const age = (birthYear) => 2024 - birthYear;
// const birthYears = [1990, 2001, 2004, 1974];

// Calculating age according to birthYear and storing them in an array
// const ages = [
//   age(birthYears[0]),
//   age(birthYears[1]),
//   age(birthYears[2]),
//   age(birthYears[age.length - 1]),
// ];

// console.log(ages);

// & ------------------------------> Lecture 10 <-------------------------------

// ^ Basic Operations on Array : ---------------------------------------------

/* 
    1. arrayName.push() : 
        -> Adds element to the end of the Array
        -> Needs an argument that is to be added in the array
        -> The .push() function also returns a value which is the length of the new Array
        -> So incase we need to find the value of array after adding something using push we dont need to calculate that explicitly
        
    2. arrayName.unshift() : 
        -> Adds element to the beginning of the Array
        -> Needs an argument that is to be added in the array
        
    3. pop() : 
        -> Removes element from the end of the Array
        -> No arguments required in the function 
        -> The pop() Function also returns a value which is the end element of the array
        -> So we can store it and print if we need it 
        
    4. shift() : 
        -> Removes element from the beginning of the Array
        -> No arguments required in the function 
        -> This also return the element that was removed from the beginning of the array so if we need that we can capture it 

    5. indexOf() : 
        -> Returns the Index at which the element is present at in the Array
        -> Needs an argument that is to be searched in the array
        -> Returns the index of the element if there 
        -> If the element is not present then it returns -1
        -> It's Case & Type Sensitive

    6. includes() :
        -> This does not return the Index of the element, it returns a boolean value
        -> True if the element is present, otherwise false if element is not present
        -> It's Case & Type Sensitive
*/

// const friends = ['Andy', 'Michael', 'Jordan'];

// & 1. Pushing Element at the end of the Array
// friends.push('Ash');

// Print the new Array
// console.log(friends);

//If we want the length of the new array simply store the value of the push function in a variable as it returns a value which is the length of the new array
// const newLength = friends.push('Bob');

// Print the new Array
// console.log(friends);

// Length of array
// console.log(newLength);

// & 2. Unshifting Element at the beginning of the Array
// friends.unshift('Jay');

// Printing the new Array
// console.log(friends);

// & 3. Popping Element from the end of the Array

// Storing the popped element in a variable
// friends.pop(); //Bob

// Printing the new array
// console.log(friends);

// Popping another element but also storing the popped element in a variable
// const popped = friends.pop(); // Ash

// Printing the popped element of the array
// console.log(popped);

// & 4. Shifting Element from the beginning of the Array
// friends.shift(); // Jay

// Printing the new array
// console.log(friends);

// Popping another element but also storing the popped element in a variable
// const pop = friends.shift(); //Andy

// Printing the popped element of the array
// console.log(pop);

//  & 5. Return Index of elements
// console.log(friends.indexOf('Michael')); // 0th Index

// console.log(friends.indexOf('Jay')); // -1 as Jay is not present in the array

// & 6. Includes() Function
// console.log(friends.includes('Michael')); // True

// console.log(friends.includes('Jay')); // False

// Exercise
// friends.push(23); // Number

// As indexOf() & includes() are Type Sensitive hence the includes returns false for '23'
// if (friends.includes('23')) {
//   console.log('23 is present in the array as a string');
// } else if (friends.includes(23)) {
//   console.log('23 is present in the array as a number');
// }

// if (friends.includes('Michael')) {
//   console.log('You have a friend named Michael');
// } else if (friends.includes('michael')) {
//   console.log('You have a friend named michael');
// }

// & ------------------------------> Lecture 12 <-------------------------------

// ^ Introduction to Objects : ---------------------------------------------

/* 
    -> In an array we dont have hte luxury to name different elements like firstName, lastName,Age, Profession, Friends etc.. we can only refer to them by their order number

    -> Objects are one of the fundamental data types, allowing you to store collections of key-value pairs, means we can give names to different elements we store here

    -> Key refers tio the variable name 
    -> Keys are also known as properties
    -> Value refers to the Actual element we want to store

    -> In objects the order of the values does not matter when we want to retrieve them

* Objects VS Arrays : --------------------------------
    -> In arrays the order in which we specify the elements matter a lot because thats how we access the elements, which means we can only access elements of array using their order number.
    
    -> In Objects this is not the case, we can access elements irrespective of their order 
    
    -> Hence Arrays are used for Structured Data whereas Objects are used for Unstructured Data

    -> Objects used when we want to store data with a name and retrieve data using that key value / name
*/

// Array
// Containing firstName, lastName, Age, Profession, Friends
// Also we can have an array inside an array as we have a friends array inside details
// To access the Array elements inside another array :
// At 4th Index the Second array is placed
// The elements are at 0 1 2 Indexes respectively in that array
// To access them we can :
// console.log(details[4][0]) : Andy
// console.log(details[4][1]) : Michael
// console.log(details[4][2]) : John
const details = [
  'Onkar',
  'Patel',
  2024 - 2001,
  'student',
  ['Andy', 'Michael', 'John'],
];

// ! Declaring Objects using Object Literal Syntax Method (Easiest Way)
// Key values pairs where keys are the names we wanted to give to each of the elements / data
const personalInfo = {
  firstName: 'Onkar',
  lastName: 'Patel',
  age: 2024 - 2001,
  profession: 'student',
  friends: ['Andy', 'Michael', 'John'],
};
