const prompt = require("prompt-sync")();


let string1 = prompt("Please enter a string");


while (string1.length < 10) {
    string1 = string1 + string1;
    console.log(string1)
}