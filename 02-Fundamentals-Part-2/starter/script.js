//'use strict'

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('i can drive');
*/

/*
function logger(){
    console.log('my name is jonas');

}

logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and
${oranges} oranges.`;
    return juice;
}

const appleJuice= fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice= fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
*/

// Arrow function
/*
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} `
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
 const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3
}

const scoreDolphins = calcAverage(85, 54, 41);

console.log(scoreDolphins)

const scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreKoalas)

function checkWinner(avgDolphins, avgKoalas){
    if (scoreKoalas >= 2 * scoreDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    } else if (scoreDolphins >= 2 * scoreKoalas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else {
        console.log('no teams win')
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas))} 
 
 */

/*function checkWinner(avgDolphins, avgKoalas){
    if ((avgKoalas / avgDolphins) >= 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    } else if ((avgDolphins/avgKoalas) >= 2){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else {
        console.log('no teams win')
    }
}
*/

//Arrays

//Array() Func

//const years = new Array(111,222,333,444);

//console.log(years);

// Oject == dictionary

let jun = {
  first: "Jun",
  last: "Zhao",
  age: 21,
  job: "software developer",
  list: [1, 2, 3, 4],
  haslicense: true,
};

// Object notation

/*
console.log(jun.last); // dot

console.log(jun['last']); // bracket

let rest = 'last'

function interest(){
    return jun[rest] ? console.log(jun[rest]) : console.log('no');
}

console.log(interest())

*/

//console.log(`${jun.first} has ${jun['list'].length} and his best number is ${jun['list'][0]}`)

/*
let doc = jun['haslicense'] ? console.log(`${jun.first} is ${jun.age} years old and has a license`) : console.log(`${jun.first} is ${jun.age} years old and has no license`);

console.log(doc)
*/
const mark = {
  fullname: "mark",
  mass: 78,
  height: 1.69,
};

const john = {
  fullname: "john",
  mass: 92,
  height: 1.95,
};

/*
const stringToNumber = function(str){
    str = parseInt(str);
    return str;
  }

console.log(stringToNumber("1234"))
 */

/*
function findMultiples(integer, limit) {
    //your code here
    let lst = [];
    let i = 0
    while(i !== limit){   
        lst.push(i += integer);  
    } 

    
  }
  
  console.log(findMultiples(5,25))
  */

/*
let num = 0
 while(num !== 6){
    let dice = Math.trunc(Math.random() * 6) + 1;
    num = dice;
    console.log(num);

} 
*/
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

for (let i = 0; i < bill.length; i++) {
  tips.push(calcTip(bill[i]));
  totals.push(calcTip(bill[i]) + bill[i]);
}

console.log(tips);

console.log(totals);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log(calcAverage(totals));
