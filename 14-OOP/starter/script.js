'use strict';

// Constructor function

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // DO NO CREATE FUNCTION IN CONSTRUCTOR FUNCTION
// };

// const jun = new Person('Jun', 2001);

// console.log(jun);

// Prototypes

// Linking Person class to prototype so it can access method within the prototype
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// jun.calcAge();

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

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   return console.log(`${this.make} accelerated to ${this.speed + 10}Km/h`);
// };

// Car.prototype.brake = function () {
//   return console.log(`${this.make} decelerated to ${this.speed - 5}Km/h`);
// };

// const fordCar = new Car('ford', 10);
// fordCar.accelerate();

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAgeCl() {
//     console.log(`${2023 - this.birthYear}`);
//   }

//   get name() {
//     return this.firstName;
//   }

//   set age(num) {
//     return (this.birthYear = num);
//   }

//   set firstName(name) {
//     return (this._firstName = name);
//   }

//   static names() {
//     return (this.firstName = 'tim');
//   }
// }

// const jun1 = new PersonCl('jun1', 1001);
// console.log(jun1.birthYear);
// console.log((jun1.age = 2001));

// console.log((jun1.firstName = 'hao'));

/////// Example: Object.Create()
// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);

// steven.birthYear = 2001;
// steven.firstName = 'steven';
// steven.calcAge();
// console.log(steven);

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h 
(but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h
*/

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     return console.log(`${this.make} accelerated to ${this.speed + 10}Km/h`);
//   }

//   brake() {
//     return console.log(`${this.make} decelerated to ${this.speed - 5}Km/h`);
//   }

//   get speedUS() {
//     return `Your ${this.make} is going ${(this.speed = this.speed / 1.6)}mi/h`;
//   }

//   set speedUS(mph) {
//     this.speed = mph * 1.6;
//     return this.speed;
//   }
// }

// const fordCar = new Car('Ford', 120);

// console.log(fordCar.speedUS);
// fordCar.speedUS = 75;
// console.log(fordCar.speed);
// fordCar.accelerate();
// fordCar.brake();
// prototype chain inheritance with classes/constructors
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //inherit properties from Person constructor. 'this' is referred to newly created object
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Manually links the student and person class prototypes so the object can access their prototype (I THINK)
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

Student.prototype.constructor = Student;

mike.introduce();
