'use strict';
// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem

// - What is a temperature amplitude? Answer:  Difference between highest and lowest temp
// - How to calculate highest and lowest temperature?
// - What's a sensor error? And what to do ? Answer : Ignore the Error

// 2) Breaking up into sub-problems

// - How to ignore errors?
// - Find max value in temperature array
// - Find the min value in temperature array
// - Subtract min from max (amplitude) and return it

// 3) Use Google to Research
// - Incase we have difficulty working with how to find min & max values in temp array

const calcTempAmplitude = function (temps) {
  // Defining max & min values
  let max = temps[0];
  let min = temps[0];

  // Finding the Minimum & Maximum Temperatures
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    // Incase of 'error' string encountered : ignore == continue
    // Logic to Run only if a Number not a String
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  // Testing
  // console.log(max);
  // console.log(min);

  // Returning Amplitude
  return max - min;
};

const amplitude = calcTempAmplitude(temps);
console.log('Amplitude : ', amplitude);

// PROBLEM 2

// Function should now receive 2 arrays of temps.

// 1) Understanding the problem
// - With two arrays, should I implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - How to Merge two arrays? Answer : Using concat() Function

// 3) Use Google to Research
// - Incase we have difficulty working with how to merge two arrays

const calcTempAmplitudeNew = function (temps1, temps2) {
  // Concatenating Two Arrays
  const temps = temps1.concat(temps2);

  // Defining max & min values
  let max = temps[0];
  let min = temps[0];
  // Finding the Minimum & Maximum Temperatures
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    // Incase of 'error' string encountered : ignore == continue
    // Logic to Run only if a Number not a String
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  // Testing
  // console.log(max);
  // console.log(min);

  // Returning Amplitude
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log('Amplitude new : ', amplitudeNew);
