const prompt = require("prompt-sync")();

let num = prompt("Please a enter a number.");
let num2 = prompt("Please a enter second  a number.");

while (num % num2 !== 0)
num++
console.log(`${num} is divisible by ${num2}`)
