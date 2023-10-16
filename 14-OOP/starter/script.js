'use strict';

// Constructor function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // DO NO CREATE FUNCTION IN CONSTRUCTOR FUNCTION
};

const jun = new Person('Jun', 2001);

console.log(jun);

// Prototypes

// Linking Person class to prototype so it can access method within the prototype
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

jun.calcAge();

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return console.log(`${this.make} accelerated to ${this.speed + 10}Km/h`);
};

Car.prototype.brake = function () {
  return console.log(`${this.make} deccelerated to ${this.speed - 5}Km/h`);
};

const fordCar = new Car('ford', 10);
fordCar.accelerate();
