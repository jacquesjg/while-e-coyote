const prompt = require('prompt-sync')()
let userInput = Number(prompt('Please eneter a number to add.,--'));
// let done = prompt;
let sum = 0;

while (userInput !== "done") {
    sum = userInput + sum;
    userInput = prompt('Please enter a number to add, or type done if you are finished');
    if (userInput !== 'done') {
        userInput = Number(userInput)

    }
} 

console.log(sum)