const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.question('Enter a number: ', (input) => {
  const number = parseInt(input, 10);
 
  if (isNaN(number)) {
    console.log('Please enter a valid integer.');
  } else if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
 
  rl.close();
});
 