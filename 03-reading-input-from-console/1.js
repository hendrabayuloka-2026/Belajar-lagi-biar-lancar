const readline = require('readline-sync');

const number1 = readline.question('Enter first number:');
const number2 = readline.question('Enter second number:');
const number3 = readline.question('Enter third number:');

const avg = (number1 + number2 + number3) / 3

console.log('\nThe average of ' + firstNumber +', ' + secondNumber + ',' + thirdNumber + ' is ' + average);
