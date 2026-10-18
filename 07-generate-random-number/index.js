const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

rl.question('Enter minimum: ', (minInput) => {
  rl.question('Enter maximum: ', (maxInput) => {
    const min = parseInt(minInput, 10);
    const max = parseInt(maxInput, 10);

    const randomNumber = generateRandomNumber(min, max);

    console.log();
    console.log(`Random number between ${min} and ${max}: ${randomNumber}`);

    rl.close();
  });
});