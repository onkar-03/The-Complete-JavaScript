// Constructor Function
const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

// Log Speed
Car.prototype.logSpeed = function () {
  // This used to refer to the Object on which the method is called
  console.log(`'${this.name}' going at ${this.speed} km/h`);
};

// Accelerate Method
Car.prototype.accelerate = function () {
  // This used to refer to the Object on which the method is called
  this.speed += 10;
  console.log(`'${this.name}' going at ${this.speed} km/h`);
};

// Brake Method
Car.prototype.brake = function () {
  // This used to refer to the Current Object that calls the Method
  this.speed -= 5;
  console.log(`'${this.name}' going at ${this.speed} km/h`);
};

// Car Objects
const Car1 = new Car('Nissan', 100);
const Car2 = new Car('Toyota', 80);

Car1.accelerate();
Car2.brake();
