'use strict';
/* 
 # Challenge 2 : 
This is more of a thinking challenge than a coding challenge
Your tasks:

1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
 */

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'white';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// --- Explanation :
// - So why did this work? Or in other words, how does this callback function here, get access to the header variable?
// - In this particular example, the closure is necessary or it's useful because by the time this callback here is executed, this IIFE, so this immediately invoked function expression is now long gone.
// -  So it has already been executed. And with it, this variable here is basically gone as well. Right? So all of that is gone.
// - But still, this function here is attached to the body element. And so it's waiting for some events to happen there. And when the event happens, well, then this function here is of course, executed.
// - And again, even though the environment in which this function here was created is already gone, it is still able to access the variables that were created in that variable by the time the function was born, so to say
