// As we wont be changing the values of the variables throughout the program hence we declared most of them as const

const markMass = 78; // kgs
const markHeight = 1.69; // m

const johnMass = 92; // kgs
const johnHeight = 1.95; // m

const bmiM = markMass / markHeight ** 2;
const bmiJ = johnMass / (johnHeight * johnHeight);

// Rounding Off to only 2 decimal places
const bmiMark = bmiM.toFixed(2);
const bmiJohn = bmiJ.toFixed(2);

let markHigherBMI;

// Decision Making Using if-else
// String Writing using Template Literals

if (bmiMark > bmiJohn) {
  markHigherBMI = 1;
  console.log(`Mark's BMI : (${bmiMark}) is higher than John's (${bmiJohn}) `);
} else {
  markHigherBMI = 0;
  console.log(`John's BMI : (${bmiJohn}) is higher than Mark's (${bmiMark}) `);
}

//Answer
console.log(markHigherBMI);
