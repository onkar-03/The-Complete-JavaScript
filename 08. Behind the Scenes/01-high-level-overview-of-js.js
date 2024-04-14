'use strict';

// --------------- High Level Overview Of Js :

// - Js is a High Level, Prototype-Based Object-Oriented, Multi Paradigm, Interpreted / Just-In-Time Compiled, Dynamic, Single-Threaded, Garbage-Collected Programming Language with First-Class Functions & Non-Blocking Event Loop Concurrency Model

// 1) High Level :
// - Every program that runs on your computer needs some hardware resources, such as memory and the CPU to do its work.
// - Now, there are low-level languages, such as C, where you have to manually manage these resources. For example, asking the computer for memory to create a new variable.
// - You also have high-level languages such as JavaScript and Python, where we do not have to manage resources at all because these languages have so-called abstractions that take all of that work away from us.
// - This makes the language easier to learn and to use, but the downside is that programs will never be as fast or as optimized as, for example, C programs.

// 2) Garbage Collection :
// - One of the powerful tools that takes memory management away from us developers is garbage-collection, which is basically an algorithm inside the JavaScript engine.
// - It automatically removes old, unused objects from the computer memory in order not to clog it up with unnecessary stuff.
// - So it's a little bit like JavaScript has a cleaning guy who cleans our memory from time to time so that we don't have to do it manually in our code.

// 3) Interpreted & Just-In-Time Compiled (JIT):
// - In an interpreted language, code is executed line-by-line by an interpreter at runtime. There's no separate compilation step that produces machine code before execution
// - Interpreted languages offer benefits such as platform independence and ease of debugging since developers can see the exact point of execution.
// - Just-in-time compilation involves translating source code into machine code at runtime, just before it's executed. This compiled code is then executed directly by the CPU.

// 4) Multi Paradigm :
// - One of the things that makes JavaScript so popular is the fact that it's a multi-paradigm language.
// - In programming, a paradigm is an approach and an overall mindset of structuring our code, which will ultimately direct the coding style and technique in a project that uses a certain paradigm.
// - Popular Paradigm are :
// - 1. Procedural Programming
// - 2. Object Oriented Programming (OOP)
// - 3. Functional Programming (FP)
// - Paradigm can also be imperative and declarative about which we will learn ahead

// 5) Prototype-Based Object-Oriented Programming
// - Almost everything in JavaScript is an object, except for primitive values such as numbers, strings, etc...
// - Arrays, for example, are just objects
// -  Basically, we create arrays from an array blueprint, which is like a template and this is called the prototype. This prototype contains all the array methods and the arrays that we create in our code then inherit the methods from the blueprint so that we can use them on the arrays.("More about this in Object Oriented Programming")

// 6) First Class Functions :
// - In a language with first-class functions, functions are simply treated as variables. We can pass them into other functions, and return them from functions. ("More about this in Section A Closer Look at Functions")

// 7) Dynamic :
// - JavaScript is a dynamic language and dynamic actually means dynamically-typed.
// - In JavaScript, we don't assign data types to variables. Instead, they only became known when the JavaScript engine executes our code.
// - Also, the type of variables can easily be changed as we reassign variables. And this is basically what dynamically-typed means

// 8) Single Threaded :
// - A thread is like a set of instructions executed in the CPU.
// - JavaScript runs in one single thread, so it can only do one thing at a time.
// - The computer that is executing our JavaScript code has only one call stack and only one memory heap. So one thing can happen at a time.
// -  So, JavaScript execution happens line by line, in a single, and continuous call stack. And this is actually one of the main reasons why JavaScript is so fast
// - Now, this might sound bad at first because it might sound like JavaScript can only do one thing at a time, which is true, but there is a way around this limitation, which is asynchronous programming, which is the core concept of the so-called event loop.

// 9) Event Loop Concurrency Model :
// - Concurrency Model : Concurrency model: how the JavaScript engine handles multiple tasks happening at the same time. Why do we need that ??
// - Because, JavaScript runs in one single thread, so it can only do one thing at a time.So what about long running Tasks ??
// - Sounds like it would block the single thread. However, we want non-blocking behavior! How do we achieve that ??
// - By using an event loop: takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finished.
