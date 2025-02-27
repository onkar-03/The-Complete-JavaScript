// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;

    //Fix to only 2 decimals
    this.bmi = this.bmi.toFixed(2);
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;

    //Fix to only 2 decimals
    this.bmi = this.bmi.toFixed(2);
    return this.bmi;
  },
};

// Running the created functions to calculate the bmi and also store the bmi in a new property named bmi in respective objects
const markBmi = mark.calcBmi();
const johnBmi = john.calcBmi();

if (markBmi > johnBmi) {
  console.log(
    `${mark.fullName}'s  BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}`,
  );
} else {
  console.log(
    `${john.fullName}'s  BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}`,
  );
}
