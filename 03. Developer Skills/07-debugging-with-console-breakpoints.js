'use strict';
// Debugging with the Console and Breakpoints :

// A) Identify The Bug
// B) Find The Bug
// C) Fix The Bug

// Problem :
const measureKelvin = function () {
  // Object
  const measurement = {
    type: 'temp',
    unit: 'cels',

    // This stores as a String Resulting in a Bug
    // value: prompt('Degrees celsius'),

    // C) FIX
    // Converting it to a Number
    // value: Number(prompt('Degrees celsius')),
    value: 10,
  };

  // B) Finding Bug

  // Trying to find what causes the Bug
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  // Looking at the entire object for the bug
  // Found the Bug : Value stored as string as we are using the prompt Function
  // console.log(measurement);

  // Another way to look at the object in form of table
  // console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the Bug
console.log(`Temperature in Kelvin :  ${measureKelvin()}`);

// Using a debugger
// Debugging code using the Browser debugger
// Really useful Incase of Loops like here
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  // Earlier
  // let max = temps[0];
  // let min = temps[0];

  // Introduced a Bug
  let max = 0;
  let min = 0;

  // Now checking the Loop and change in values of max & min in Debugger in each iteration to find the problem
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  // Testing
  console.log(max, min);

  //Return value
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log('Amplitude bug', amplitudeBug);
