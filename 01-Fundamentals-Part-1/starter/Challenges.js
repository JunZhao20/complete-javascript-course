//Challenge 1
/*
const markHeight = 1.69;
const markMass = 78;

const johnHeight = 1.95;
const johnMass = 92;

const markBMI = markMass / markHeight ** 2;

const johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
*/

//Challenge 2

/*
const markHeight = 1.69;
const markMass = 78;

const johnHeight = 1.95;
const johnMass = 92;

const markBMI = markMass / markHeight ** 2;

const johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

if(markHigherBMI == true){
    console.log(`Marks BMI (${markBMI}) is higher than Johns BMI (${johnBMI})`)
}else{
    console.log(`Johns BMI (${johnBMI}) is higher than Marks BMI (${markBMI})`)
}
*/

//Challenge 3

//1.
const dolphinsAvgScore = (96 + 108 + 89) / 3;
const KoalasAvgScore = (88 + 91 + 110) / 3;

/*
//2.
if(dolphinsAvgScore > KoalasAvgScore){
    console.log('dolphines wins');
} else if(dolphinsAvgScore < KoalasAvgScore){
    console.log('koalas win');
} else {
    console.log('Its a draw!')
}
*/

/*
//3 and 4.
const dolphinsAvgScore1 = (97 + 112 + 101) / 3;
const KoalasAvgScore1 = (109 + 95 + 123) / 3;

let minScore = 100;

if((dolphinsAvgScore1 >= minScore) && 
    (dolphinsAvgScore1 > KoalasAvgScore1)){
        console.log('dolphine wins');
} else if((KoalasAvgScore1 >= minScore) &&
    (KoalasAvgScore1 > dolphinsAvgScore1)){
        console.log('koalas wins');
} else if((dolphinsAvgScore1 && KoalasAvgScore1) >= minScore && 
(dolphinsAvgScore1 === KoalasAvgScore1)){
    console.log('its a draw!');
} else{
    console.log('No team qualified');
}
*/

// Challenge 4
 
//1.
const bill = 40;
const tip = bill < 50 || bill > 300 ? bill * 0.2 : bill * 0.15;

console.log(`bill: ${bill}, tip: ${tip}, total value: ${bill + tip}.`)



