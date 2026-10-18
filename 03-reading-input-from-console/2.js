const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter miles: ', (input) => {
  const miles = parseFloat(input);
  const kilometers = miles * 1.60934;

  console.log(`\n${miles} miles is equal to ${kilometers} kilometers`);
  rl.close();
});