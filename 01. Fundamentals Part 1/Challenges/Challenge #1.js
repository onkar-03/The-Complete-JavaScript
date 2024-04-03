// As we wont be changing the values of the variables throughout the program hence we declared most of them as const

const markMass = 78; // kgs
const markHeight = 1.69; // m

const johnMass = 92; // kgs
const johnHeight = 1.95; // m

const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / (johnHeight * johnHeight);
console.log('Marks BMI : ' + bmiMark + ' ' + 'Johns BMI : ' + bmiJohn);

let markHigherBMI;

if (bmiMark > bmiJohn) {
  markHigherBMI = 1;
  console.log('Mark has a Higher BMI');
} else {
  markHigherBMI = 0;
  console.log('John has a Higher BMI');
}

//Answer
console.log(markHigherBMI);
