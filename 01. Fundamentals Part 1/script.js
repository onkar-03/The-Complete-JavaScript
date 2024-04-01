// --------------------> *************** <---------------------
// ^ Declaring Variable in Js
// let js = 'amazing';

// --------------------> *************** <---------------------
// ^ Using If statements
// & alert() used to display the alert Output on the webpage
// if (js == 'amazing') alert('Js Is Fun !!');

// --------------------> *************** <---------------------
// ^ console.log()
/*
1. To display results of operations in console we use the console.log();

2. Tells us the O/P of code, Errors in the code & its description  along with the Line Numbers
*/
// console.log(40 + 8 + 2);

// --------------------> *************** <---------------------
// ^ Values :
/* 
1.  Smallest unit of Information in Js
*/
// console.log('Onkar');
// console.log(10);

// --------------------> *************** <---------------------
// ^ Variables :
/*
1. 'let' used to declare 'variables'
 
2. Variables store a 'value'
 
3. Declaring Variables using camelCase notation is a common practice
 
4. We can have a letter , number , _ , or $ in the variable name
 
5. Starting with a  Number not allowed
 
6. Using keywords such as 'name' , 'new', 'function' etc... are not allowed as variable names
 
7. Its a convention to never use a var that starts with a Capital letter, they are specially reserved convention to write variables for OOPs in Js
        eg : 'Person'
 
8. All Uppercase Variables are reserved as constants 
    eg : 'PI' etc ...
 
9. Write variables names such that they depict what kind of value they hold for us.
    eg : myFirstJob='programmer' ✅
         job1 = 'programmer' ❌
    */

// let firstName = 'Onkar';

// & Printing the value stored in the variable
// console.log(firstName);

// --------------------> *************** <---------------------
// ^ Primitive Data Types :

/*
1. Number : 
     -> Always Floating Point Numbers
     -> Used for Integers /Decimals
     -> No different Data types for Integers and Floating Numbers Differently
     -> Integer / Floating all 
     are simply called 'number'

     eg: let age =23;

2. String :  
    -> Sequence of characters
    -> Used for textual data
    -> Always placed under '' / ""
    -> If not placed within quotes Js takes them as variable names

    eg : let firstNam,e ='Onkar';

3. Boolean : 
    -> Logical Data Type 
    -> Stores only True / False
    -> Used for decision making scenarios
    -> Predefined Booleans values are 
       1. true // means 1
       2. false // means 0

    eg : let isMarried = false;    

4. Undefined :
    -> Value taken by variable that is not yet defined ('empty value')

    eg : let children;
     "This is Just the Declaration of the variable"

5. Null :
    -> Also means 'empty value'

6. Symbol :
    -> Introduced in ES6 /ES2015
    -> Simply defines a value thats unique and cant be changed

7. Big Int :
    -> Introduced in ES2020
    -> Large Integers than the Number type can Hold

! Dynamic Typing in Javascript :

* -> We dont need to explicitly define the type of variables we are using in Javascript like in C / C++ etc...

* -> Datatypes are determined automatically

eg: let x = 'onkar';
"We did not define the type of data x will hold"
 */

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// --------------------> *************** <---------------------
// ^ typeof() Operator :

/*
1. Used to tell teh Type of values the Variable Holds

2. There is a bug when using typeof() in JavaScript 

    eg: typeof(undefined); // Undefined
    eg: typeof(null); // Object

    We saw that the value for the typeof() for 'undefine' is 'undefined', so the typeof() for 'null' should also give value as 'null', But thats not the case & null is not an object
    
    "Although this bug is never fixed and kept for legacy reasons but keep this in mind"
*/

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

// let js = true;
// console.log(typeof js); // boolean
// console.log(typeof 'onkar'); // string

// --------------------> *************** <---------------------
// ^ Dynamic Typing in Javascript Live Example

/*
1. Used the same variable which was declared before and assigned a different kind of value

2. typeof() tells us the type of the variable as Number now
*/

// js = 23;
// console.log(typeof js); // Number

// --------------------> *************** <---------------------
// ^ Undefined Variable :

/* 
1. Undefined is both Value & typeof Value do't get confused
*/

// let year;
// console.log(year); //undefined
// console.log(typeof year); //undefined

// year = 2024;
// console.log(typeof year); //Number

// --------------------> *************** <---------------------
// ^ Different Ways to declare Variables in Js :

/*
1. Using 'let' keyword :
    -> Introduced in ES6 / ES2015
    -> Used when we want to declare empty variable
    -> Used when we want to mutate(reassign) a variable in future
    
2. Using 'const' keyword : Introduced in ES6 / ES2015
    -> Used when we want to declare immutable variable
    -> Variables whose values can't be changed are declared const
    -> Can't declare an empty variable while using const

2. Using 'var' keyword : Older Method to declare Variables
    -> Used when we want to declare immutable variable
*/

// let age = 23;
// const birthYear = 2001;
// var firstName = 'Onkar';

// ! Even without declaring variables it works the Same way but we should avoid it as its a bad practice WHY ?? we will know later

// The below code just works the same way as when we declared the variables but why its a bad practice & why to avoid it about this we will learn later, Always declare variables

// lastName = 'Patel';
// console.log(lastName); // Patel

// --------------------> *************** <---------------------
// ^ BASIC OPERATORS :
/*

! Arithmetic Operators : -------------------------------------------------------

1. Addition (+) : Adds two operands.
    -> Used to Add Numbers 
    -> Used to concatenate Strings

2. Subtraction (-) : Subtracts the second operand from the first.

3. Multiplication (*) : Multiplies two operands.

3. Division (/) :  Divides the first operand by the second.

4. Modulus (%) :  Returns the division remainder.

5. Exponential (**) : It calculates the base raised to the power of the exponent.

    eg : 2 ** 3 = 8;


! Assignment Operators : -----------------------------------------------------

1.  Assignment (=) : Assigns a value to a variable.

2. +=, -=, *=, /=, %=: Perform the operation on the variable and then assign the result back to it.


! Comparison Operators : -----------------------------------------------------

1. Equality (==) : Checks if two operands are equal in value.

2. Strict Equality (===) : Checks if two operands are equal in 'value' and 'type'.

3. Inequality (!=) : Checks if two operands are not equal in value.

4. Strict Inequality (!==) : Checks if two operands are not equal in value or not of the same type.

5. Greater Than (>) : Checks if the left operand is greater than the right operand.

6. Less Than (<) : Checks if the left operand is less than the right operand.

7. Greater Than or Equal To (>=) : Checks if the left operand is greater than or equal to the right operand.

8. Less Than or Equal To (<=) : Checks if the left operand is less than or equal to the right operand.
*/

// Adding Numbers :
// let digit1 = 10;
// let digit2 = 20;
// console.log('Adding 2 Numbers : ' + digit1 + digit2);

// Concatenating Strings :
// let firstName = 'Onkar';
// let lastName = 'Patel';
// console.log('String Concatenation : ' + firstName + ' ' + lastName);

// Subtraction :
// 'const' variables mostly when we are certain that the value of variable wont't change in the near future
// const currentYear = 2024;

// let ageOnkar = currentYear - 2001;
// let ageSarah = currentYear - 2002;
// console.log('Age of Onkar : ' + ageOnkar, ' ' + 'Age of Sarah : ' + ageSarah); // 23 22

// Exponential :
// console.log('Exponential of 2^3 : ' + 2 ** 3); // 8

// Assignment Operators :
// let x = 10 + 7;
// console.log('Current Value of x : ' + x); // 17
// x += 17;
// console.log('x + 17 = ' + x); // 34
// console.log('Current Value of x : ' + x); //  34
// x *= 2;
// console.log('x * 2 = ' + x);
// console.log('Current Value of x : ' + x); //  68
// x++;
// console.log('x ++ = ' + x); //69
// console.log('Current Value of x : ' + x); // 69
// x--;
// console.log('x -- = ' + x); //68
// console.log('Current Value of x : ' + x); // 68

// Comparison Operators :
// const ageDifference = ageOnkar > ageSarah;
// if (ageDifference > 0) console.log('Onkar is Older than Sarah');

// const validAge = 18;
// if (ageSarah > validAge) console.log('Sarah belongs to valid age category');

// --------------------> *************** <---------------------
// ^ Operator Precedence : -----------------------------------------------------
const currentYear = 2024;

let ageOnkar = currentYear - 2001;
let ageSarah = currentYear - 2002;

// Why does this work ?? How does Js know first to subtract then compare ??
// Answer : Due to a well defined Operator Precedence in Js
// Operator precedence : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// L -> R evaluation of mathematical operations
console.log(currentYear - 2001 > currentYear - 2002); // true

// R -> L evaluation of exponential & assignment  operations

//First the mathematical operations are evaluated L -> R,
// Then assignment of values are done from R -> L
// First y = 10 is assigned & then x = y i.e 10 is assigned
let x, y;
x = y = 25 - 10 - 5; // s = y = 10
console.log('x= ' + x + ' & ' + 'y = ', y);
