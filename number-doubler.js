const prompt = require("prompt-sync")();

let num = Number(prompt("Please enter a number. "))

while (num <= 100) {
    num = num * 2;
    console.log(num)
}