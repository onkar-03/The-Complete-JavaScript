const Car = function (make, speed) {
  this.make = make;
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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Link prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// Overwriting the method which is already there in the Parent Class
// So this will now overwrite the old accelerate method of the Parent Class, as it appears first in the prototype chain
// Hence Overwriting the method which is already there overshadows the method which is already there
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);

tesla.brake();
tesla.accelerate();
