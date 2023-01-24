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

/*
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
*/

/*
//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

//type coercion
console.log('I am' + 23 + 'years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
*/

/*
// 5 falsey values: 0, '', undefined, null, NaN
const money = 0;
if(money){
    console.log("Don't spend it all ;)");
}else{
    console.log('You should get a job')
}

let height = 1.6;
if(height){
    console.log('YAY! Height is defined');
}else{
    console.log('Height is UNDEFINED');
}
*/

/*
const age = '18';
if( age === 18) console.log('You just became an adult (strict)');

if( age == 18) console.log('You just became an adult (loose)');

const favourite = Number(prompt("What's your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) { 
    console.log('cool! 23 is an amazing number!');
} else if(favourite === 7){
    console.log('7 is also a cool number');
}else if(favourite === 9){
    console.log('9 is also cool');
}
 else{
    console.log('Numner is no 23 or 9 or 7!');
}

if(favourite !== 23) console.log('Why not 23?');
*/

/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); //AND operator
console.log(hasDriversLicense || hasGoodVision); //OR operator
console.log(!hasDriversLicense); //NOT operator

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone should drive...');
// }

const isTired = false; //C
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone should drive...');
}
*/

const day = 'thursday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break
    case 'wednesday' || 'thursday':
        console.log('Write code examples');
        break;
    case 'friday' :
        console.log('record, videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekdend');
        break;
    default:
        console.log('not a valid day');
}   

if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if(day === 'tuesday'){
    console.log('Prepare theory videos');
} else if(day === 'wednesday' || day == 'thursday' ){
    console.log('Write code examples');
} else if(day === 'friday'){
    console.log('record, videos');
}else if(day === 'saturday' || day === 'sunday'){
    console.log('enjoy your weekend');
} else{
    console.log('not a valid day!');
}



