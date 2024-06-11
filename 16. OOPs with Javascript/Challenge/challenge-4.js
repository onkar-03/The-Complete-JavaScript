class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // Log Speed
  logSpeed() {
    // This used to refer to the Object on which the method is called
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }

  // Accelerate Method
  accelerate() {
    // This used to refer to the Object on which the method is called
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }

  // Brake Method
  brake() {
    // This used to refer to the Current Object that calls the Method
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);

    // To make brake chainable we need to return the current Instance
    return this;
  }
}

// Inheritance using extends keyword
// NOW EVCl can inherit all the methods of parent class Car
class EVCl extends Car {
  // Private Property
  #charge;

  constructor(make, speed, charge) {
    // Using super to avoid delicacy of the same code as in the constructor function of the parent class
    super(make, speed);

    // Assigning Private Property
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;

    // For chaining purpose we need to return the Object
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );

    // For chaining purpose we need to return the Object
    return this;
  }
}

// Creating Instance
const Rivian = new EVCl('Rivian', 120, 23);
console.log(Rivian);

// Chaining Methods
Rivian.accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();
