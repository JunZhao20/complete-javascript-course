const markHeight = 1.69;
const markMass = 78;

const johnHeight = 1.95;
const johnMass = 92;

const markBMI = markMass / markHeight ** 2;

const johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);