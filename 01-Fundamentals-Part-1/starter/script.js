/*
let js = "amazing";
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Bob";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';


//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';

console.log(firstName + ' ' +  lastName);

//Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now -2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10;
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm" + firstName + ', a' + (year - birthYear) 
+ 'years old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`String
multiple
line`);
*/

const age = 15;
let century;
if(age >= 18){
    console.log('Sarah can start driving license 🤣');
} else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too long. Wait another ${yearsLeft} years :`);
}

const birthYear = 1991;

if(birthYear <= 2000){
    century = 20;
} else{
    century = 21;
}
console.log(century)
