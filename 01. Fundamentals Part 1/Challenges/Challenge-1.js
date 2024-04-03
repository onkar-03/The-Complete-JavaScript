/*Problem Statement : 

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both 
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall

*/

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
