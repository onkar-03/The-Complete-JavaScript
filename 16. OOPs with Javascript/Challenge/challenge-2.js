//  ES6 Class
class CarCl {
  // Constructor
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  // Log Speed
  logSpeed() {
    // This used to refer to the Object on which the method is called
    console.log(`'${this.name}' going at ${this.speed} km/h`);
  }

  // Accelerate Method
  accelerate() {
    // This used to refer to the Object on which the method is called
    this.speed += 10;
    console.log(`'${this.name}' going at ${this.speed} km/h`);
  }

  // Brake Method
  brake() {
    // This used to refer to the Current Object that calls the Method
    this.speed -= 5;
    console.log(`'${this.name}' going at ${this.speed} km/h`);
  }

  get speedUS() {
    // Storing the speed in km/hr
    return `${this.name} going at ${this.speed / 1.6} mi/hr`;
  }

  set speedUS(speed) {
    // Storing the speed in km/hr
    this.speed = speed * 1.6;
  }
}

// Object Creation
const nissan = new CarCl('Nissan', 120);

//As setter & getters behave like property hence we use them same as how we use properties
// Getters
console.log(nissan.speedUS);
nissan.accelerate();
console.log(nissan.speedUS);

// Setter
nissan.speedUS = 50; // Sending data in mi/hr form
console.log(nissan); // Stored in km/hr
console.log(nissan.speedUS); // O/P: 50 mi/hr same as what we set it
