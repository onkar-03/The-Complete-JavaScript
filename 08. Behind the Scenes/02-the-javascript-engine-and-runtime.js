'use strict';
// --------------- The Javascript Engine & Runtime :
// 1) JavaScript Engine :
// - So a JavaScript engine is simply a computer program that executes JavaScript code. There are a lot of steps involved in doing that, but essentially executing JavaScript code is what an engine does
// - The most well known engine is Google's V-Eight. The V eight engine powers Google Chrome, but also Node.js which is that JavaScript runtime that we talked about in the beginning of the course

// 2) Components of Javascript Engine :
// - A) Call Stack
// --- The call stack is where our code is actually executed using something called execution contexts
// - B) Heap
// --- Then the heap is an unstructured memory pool which stores all the objects that our application needs

// 3) Compilation VS Interpretation :

// - A) Compilation :
// --- So in compilation, the entire source code is converted into machine code at once. And this machine code is then written into a portable file that can be executed on any computer
// --- So we have two different steps here. First, the machine code is built and then it is executed in the CPU so in the processor

// - B) Interpretation :
// --- In interpretation, there is an interpreter which runs through the source code and executes it line by line.
// --- So here we do not have the same two steps as before. Instead the code is read and executed all at the same time.
// --- Of course the source code still needs to be converted into machine code, but it simply happens right before it's executed and not ahead of time.

// 4) Is Javascript an Interpreted Language ??
// - JavaScript used to be a purely interpreted language but the problem with interpreted languages is that they are much, much slower than compiled languages.
// - This used to be okay for JavaScript, but now with modern JavaScript and fully fledged web applications that we built and use today, low performance is no longer acceptable
// - So instead of simple interpretation modern JavaScript engine now use a mix between compilation and interpretation which is called Just-In-Time (JIT) Compilation.
// - This approach basically compiles the entire code into machine code at once and then executes it right away. So we still have the two steps of regular ahead of time compilation but there is no portable file to execute.

// 5) JIT Compilation of Javascript :

// - 1) Parsing :
// --- So as a piece of JavaScript code enters the engine the first step is to parse the code which essentially means to read the code.
// --- During the parsing process, the code is parsed into a data structure called the abstract syntax tree or AST
// --- This step also checks if there are any syntax errors and the resulting tree will later be used to generate the machine code

// - 2) IR (Intermediate Representation) :
// --- After the parsing step the AST is used to generate what is called the intermediate representation or IR.
// --- Now this IR is a lower level representation of the source code which is closer to the machine code than the AST
// --- So the next step is to take this IR and generate unoptimized machine code from it

// - 3) Compilation :
// ---  This machine code is really un-optimized meaning that it's not yet as fast as it could be. And that's because we're not yet sure how exactly this code is going to be used.
// --- But generating it ahead of time is still much better than interpreting it line by line. So this unoptimized machine code is then saved into memory and executed right away

// 4) Optimization :
// --- So after the unoptimized machine code is executed, the engine collects data about how this code is being used. With this data, the engine can generate optimized machine code that's tailored exactly for these use cases
// --- This is called runtime optimization because it's done while the code is actually being executed.
// --- This optimization process can be repeated multiple times until the engine is sure that it generated the best possible machine code for the specific case

// 6) Js Runtime !!
// - So a JavaScript runtime is essentially a container that includes the JavaScript engine and a few other things. And the other things that are included in a JavaScript runtime depend on where the runtime actually runs.
// -  So if it's in a browser, then there are web APIs included as well as the callback queue.
//-  But if the runtime runs outside of a browser like in Node.js for example, then there are no web APIs of course because there is no browser rather has C++ Binding & Thread Pools
// -  So the JavaScript runtime is like a container that includes everything that's needed to run our JavaScript code
