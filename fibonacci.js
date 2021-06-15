// prompt user for n

const prompt = require('prompt-sync')();
const input = Number(prompt('how many Fibonacci values should we print?'));

let num1 = 0;
let num2 = 1
let sum = 0;
let count = 0;

 while (input !== count) {
    sum = num1+num2;
    num1 = num2;
    num2 = sum;
    count++
    console.log(sum)
 }
