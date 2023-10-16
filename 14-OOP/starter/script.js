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

console.log();
