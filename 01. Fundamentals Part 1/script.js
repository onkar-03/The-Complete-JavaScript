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

// & ------------------------------> Lecture 05 <-------------------------------

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

// * Printing the value stored in the variable
// console.log(firstName);

// & ------------------------------> Lecture 07<-------------------------------

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

// & ------------------------------> Lecture 08<-------------------------------

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

// & ------------------------------> Lecture 09 <-------------------------------

// ^ BASIC OPERATORS :
/*

! Arithmetic Operators : -------------------------------------------------------

1. Addition (+) : Adds two operands.
    -> Used to Add Numbers 
    -> Used to concatenate Strings
    -> value + value = value (Addition)
    -> String1 + String2 = String1String2 ( Concatenation)
    -> String + Value = StringValue (Concatenation) 
    { Value Converted to String and then added to the other string}

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

! Logical Operators:
1. Logical AND (&&) : Returns true if both operands are true.
2. Logical OR (||) : Returns true if at least one of the operands is true.
3. Logical NOT (!) : Returns the opposite of the operand's boolean value.

! Unary Operators:
1. Increment (++) : Increases the value of a variable by 1.
2. Decrement (--) : Decreases the value of a variable by 1.
3. typeof() : Used to check the Type of Value or Variable.

! Ternary Operator:
1. Conditional Operator (condition ? value1 : value2) : If condition is true, returns value1, otherwise returns value2. Replacement for short if-else statements

! Bitwise Operators:
1. Bitwise AND (&)
2. Bitwise OR (|)
3. Bitwise XOR (^)
4. Bitwise NOT (~)
5. Left Shift (<<)
6. Right Shift (>>)
7. Unsigned Right Shift (>>>)
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

// & ------------------------------> Lecture 10 <-------------------------------

// ^ Operator Precedence : ------------------------------------------------------
// const currentYear = 2024;

// let ageOnkar = currentYear - 2001;
// let ageSarah = currentYear - 2002;

// Why does this work ?? How does Js know first to subtract then compare ??
// Answer : Due to a well defined Operator Precedence in Js
// Operator precedence : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// L -> R evaluation of mathematical operations
// console.log(currentYear - 2001 > currentYear - 2002); // true

// R -> L evaluation of exponential & assignment  operations

// First the mathematical operations are evaluated L -> R,
// Then assignment of values are done from R -> L
// First y = 10 is assigned & then x = y i.e 10 is assigned
// let x, y;
// x = y = 25 - 10 - 5; // s = y = 10
// console.log('x= ' + x + ' & ' + 'y = ', y);

// & ------------------------------> Lecture 13 <-------------------------------

// ^ Strings & Template Literals : --------------------------------------------

// ! Strings -------------------------------------------------------------------
/*
    -> Concatenated using the '+' Operator 
    -> Complex Strings can  be created using normal strings such as one below 
*/
// const firstName = 'Onkar';
// const lastName = 'Patel';
// const birthday = 2001;
// const year = 2024;

// const onkar =
//   "I'm " +
//   firstName +
//   ', a ' +
//   (year - birthday) +
//   ' years old Student from India';

// console.log(onkar); // I'm Onkar, a 23 years old

// Multi Line String
/*
    -> \n\ used to change Lines in Js
*/
// const multi =
//   'Hello There\n\
// a Multi Line String\n\
// Using Basic String \n\
// Method';

// console.log(multi);

// ! Literals ----------------------------------------------------------------
/*
    -> In Js String Literals cna be written inside ` ` backticks
    -> They are much easier t use to form complex sentences 
    -> To write Variables and expressions we use the ${} in template literals
    -> They can also be used to write normals strings
    -> Using template literals always hence is a better option than using '' / ""
    -> They can be used to create multi line strings as well
*/

// Complex String
// const newOnkar = `I'm ${firstName}, a ${
//   year - birthday
// } years old Student from India`;

// console.log(newOnkar); // I'm Onkar, a 23 years old Student from india

// Regular String
// console.log(`Hello Just a Regular String`);

// Multi Line String
// const newMulti = `Hello There
// a Multi Line String
// Using Template Literal
// String Method`;

// console.log(newMulti);

// & ------------------------------> Lecture 14 <-------------------------------

// ^ Taking Decisions Using if-else Statements

/*
1. Basic if statement: 
    -> if(condition is True) {
        Statements to be executed
    }

2. if-else statement:
    -> if(condition is True) {
        Statements to be executed
    } else {
        Statements to be executed
    }
    
3. if-else if-else statement: 
    -> if(condition is True) {
        Statements to be executed
    } else if(condition is True) {
         Statements to be executed
    } else{
             Statements to be executed
         }

4. Nested if Statements:
    -> if (condition1) {
             if (condition2) {
                Statements to be executed    
             }
        }
*/

// const age = 15;

// if (age >= 18) {
//   console.log('You are eligible to apply for driving license');
// } else {
//   const year = 18 - age;
//   console.log(`You are too young, wait another ${year} to apply for license`);
// }

// const birthYear = 2001;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
//   console.log(`You belong to ${century}th century`);
// } else {
//   century = 21;
//   console.log(`You belong to ${century}st century`);
// }

// & ------------------------------> Lecture 16 <-------------------------------

// ^ Type Conversion & Coercion

// Type Conversion : (Explicit Conversion)--------------------------------------

/*
    -> When we manually convert form one type to another
    -> Convert String to Number using : Number();
    -> NaN O/P for Strings that we try to convert to a number but are not a  Number 
    -> NaN : Not a Number, its also a number i.e an invalid Number 
    -> typeof NaN : Number i.e an invalid Number as we know

    -> Convert Number to String using : String()
*/

// ! Converting String To Number

// const year = '2000';

// console.log(Number(year), year); // 2000 & '2000'

// Value + Value = Value ( Addition)
// console.log(Number(year) + 10); // 2010

// Trying to covert String to Value give NaN
// console.log(Number('onkar'));

// typeof() of NaN -> Invalid Number / Number
// console.log(typeof NaN);

// ! Converting Number to String

// let a = 23;

// console.log(String(a), a); // '23'

// Type Coercion : (Implicit Conversion)----------------------------------------

/*
    -> When Js automatically converts from one type to another behind the scenes for us
*/

// Whenever there is and  Addition (+) between a Number & String then :
// 1. First the Value is converted to a string
// 2. Then String Concatenation takes place
// Doesn't matter we use + or `` Type Coercion Takes place both ways

// const b = 23;
// console.log("I'm " + 23 + 'years old'); // Implicit conversion of Number to String
// console.log(`I'm ${b} years old`); // Implicit conversion of Number to String

// Whenever there is and  Subtraction (-) or * (Multiplication) or / (Division) or < etc... for all of them between a Number & String :
// 1. First the String is converted to a Number
// 2. Then Subtraction takes place
// console.log('23' - '10' - 3); // 10 : Implicit conversion of String to Number
// console.log('23' * 3); // 69 : Implicit conversion of String to Number
// console.log('10' / 2); // 69 : Implicit conversion of String to Number

// Guess the O/P

// 1.
// let n = '1' + 1; // 11
// n = n - 1; // 11 - 1 = 10
// console.log(n); // 10

// 2.
// let v = 2 + 3 + 4 + '5'; // 9 + '5' = '95'
// console.log(v); // '95'

// 3.
// let z = 10 - 4 - 3 - 2 + '5'; // 1 + '5' = '15'
// console.log(z); // '15'

// & ------------------------------> Lecture 17 <-------------------------------

// ^ Truthy & Falsy Values

// ! Falsy Values :

/*
    -> Values that are not false but will become false when we try convert them into boolean values
    -> In Js there are only 5 Falsy Values : 
       1. 0
       2. NaN
       3. Undefined
       4. null
       5. ''
    -> Rest all the Values are called Truthy Values
*/

// * Converting to boolean values :

/*
    -> Boolean() Function used to covert numbers to boolean values
*/

// console.log(Boolean(0)); //false
// console.log(Boolean(null)); //false
// console.log(Boolean(NaN)); //false
// console.log(Boolean('')); //false
// console.log(Boolean(undefined)); //false

// console.log(Boolean(2)); //true
// console.log(Boolean('onkar')); //true

// But we never in practice in real life use the Boolean() Function to convert values
// They are always implicitly / Coercively converted to boolean values in Js
// The implicit conversion / Type coercion happens in Js when
// 1. During Logical Operation
// 2. During if-else Statements execution
// 3. Check If a variable is declared or not

// 1. If-Else Usage of Falsy Values
// const money = 0;

// money takes as 0 == false, any other value of money == true
// if (true){} else{}
// as money holds a falsy value hence the else part gets executed
// if (money) {
//   console.log("Don't spend at all");
// } else {
//   console.log('You should get a job');
// }

// 2. Check Variable Declaration
// let height;

// height undefined == undefined
// As it holds a falsy value hence the else part gets executed
// if (height) {
//   console.log('yay height is defined');
// } else {
//   console.log('height is Undefined');
// }

// & ------------------------------> Lecture 18 <-------------------------------

// ^ Equality Operators == Vs === : -------------------------------------------
/*
    -> Assignment Operator : =

    -> Strict Equality Operator : === 
       - Type & Value both are same)
       - No type Coercion takes place here

    -> Loose Equality Operator : == ( Value is same )
       - Value is Same
       - Implicit Conversion / Type Coercion takes place here 
    
       -> Always use the Strict Equality Operator as Loose Equality Operator has weird behavior and Rules, if we need type conversion do it manually but prefer using === over == 
*/

// 1. Strict Equality Operator :
// let ageA = 18;

// here both the type and value of age as well as 18 are same Integer + Number
// if (ageA === 18) console.log('You are an Adult :D (Strict) !!!');

// here only the value is compared which is true
// if (ageA == 18) console.log('You are an Adult :D (Loose) !!!');

// 2. Loose Equality Operator :
// let ageB = '18';

// Here the value 18 is same for both
// But the type of age is string '18' nad 18 is a Number in if Comparison
// So Implicit Coercion takes place converting string to Number and hence 18 == 18 is evaluated
// if (ageB === 18) console.log('You are an Adult :D (Strict) !!!');
// if (ageB == 18) console.log('You are an Adult :D (Loose) !!!');

// ! prompt() Function : -------------------------------------------------------

// Stores a Value as a string
// let fav = prompt('Enter a Number');
// console.log(fav);
// console.log(typeof fav); //String

// Never executed as fav has 23 as string & we compared using strict equality
// '23' != 23
// if (fav === 23) console.log('Cool ! 23 is an amazing Number');
// else if (fav === 7) {
//   console.log('7 is a Cool Number');
// } else {
//   console.log('Not a Cool Number');
// }

// Storing value as a Number

// Converted the String value to Number
// let fav = Number(prompt('Enter a Number'));
// console.log(fav);
// console.log(typeof fav); //Number

// Executed as 23 which was a string is converted to a number
// if (fav === 23) console.log('Cool ! 23 is an amazing Number');
// else if (fav === 7) {
//   console.log('7 is a Cool Number');
// } else {
//   console.log('Not a Cool Number');
// }

// ^ Inequality Operators != Vs !== : -------------------------------------------

/*  
1. Strict Inequality Operator :
    -> As we discussed always to use strict equality operator same way we also should always use strict equality operator

 2. Loose Inequality Operator :

*/

// Strict Inequality
// if (fav !== 23) {
//   console.log('Why not choose 23 ?');
// }

// & ------------------------------> Lecture 19 <-------------------------------

// ^ Bitwise Logic : -----------------------------------------------------------

/*  
    -> Boolean logic is a branch of computer science, which uses true and false values to solve complex logical problems. 
    -> It uses several Logical Operators to combine true and false values

! Logical Operators:
1. Logical AND (&&) : Returns true if both operands are true.
2. Logical OR (||) : Returns true if at least one of the operands is true.
3. Logical NOT (!) : Returns the opposite of the operand's boolean value.

-> The Not (!) Operator has a Higher Precedence over AND / OR
*/

// let A = true,
//   B = false;

// console.log(A && B); // false

// console.log(A || B); // true

// console.log(!A); // false
// console.log(!B); //true

// console.log(A || !B); // true || true = true

// & ------------------------------> Lecture 20 <-------------------------------

// ^ Logical Operators : -------------------------------------------------------

/* 
! Logical Operators:
1. Logical AND (&&) : Returns true if both operands are true.
2. Logical OR (||) : Returns true if at least one of the operands is true.
3. Logical NOT (!) : Returns the opposite of the operand's boolean value.

-> The Not (!) Operator has a Higher Precedence over AND / OR
-> If we have multiple conditions logical operators between every two conditions is totally fine, we can do that
*/

// Change one of the values and see the difference in results
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision); // true
// console.log(hasDriversLicense || hasGoodVision); // true

// console.log(!hasDriversLicense); // false
// console.log(!hasGoodVision); // false

// const shouldDrive = hasDriversLicense && hasGoodVision; // true

// const isTired = false;

//Multiple Conditions
// console.log(isTired && hasDriversLicense && hasGoodVision); // true

// Can drive when she has a license, good vision & not tired
// if (shouldDrive && !isTired) console.log(`You can drive ...`);
// else console.log(`Someone else should Drive ...`);

// & ------------------------------> Lecture 20 <-------------------------------

// ^ Switch Statement : --------------------------------------------------------

/*
    -> An alternative of writing complex if-else statements
    -> Comparing one value to multiple options basically
    -> switch(condition){
        case value1:
            statement1;
            break;
        case value2:
            statement2;
            break;
        case value3:
            statement3;
            break;
        case value4: 
        case value5:
            statement4;
            break;
        default:
            statement4;
            break;
    }

    -> Comparing the condition to each value of different cases
    -> We can also write multiple conditions together 
*/

const day = 'sunday';

switch (day) {
  case 'monday':
    console.log(`Today is Monday`);
    break;
  case 'tuesday':
    console.log(`Today is Tuesday`);
    break;
  case 'wednesday':
    console.log(`Today is Wednesday`);
    break;
  case 'thursday':
    console.log(`Today is Wednesday`);
    break;
  case 'friday':
    console.log(`Today is Friday`);
    break;

  // Writing multiple conditions together
  case 'saturday':
  case 'sunday':
    console.log(`Weekend !!`);
    break;
  default:
    console.log(`Wrong Day Entered`);
    break;
}
// Writing the same code using if-else would be too much trouble hence switch case is a good alternative
