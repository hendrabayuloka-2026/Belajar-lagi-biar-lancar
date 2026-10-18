const readline = require("readline-sync");

const first = Number(readline.question("Enter first number: "));
const second = Number(readline.question("Enter second number: "));
const userAnswer = Number(
  readline.question("What is " + first + " + " + second + "? ")
);

const actualSum = first + second;
const isCorrect = userAnswer === actualSum;

console.log(
  first + " + " + second + " = " + userAnswer + " is " + isCorrect
);