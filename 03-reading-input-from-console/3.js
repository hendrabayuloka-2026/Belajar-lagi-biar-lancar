const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
 
rl.question('Enter seconds: ', (input) => {
  const totalSeconds = parseInt(input, 10);
 
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
 
  console.log();
  console.log(`${totalSeconds} seconds is ${minutes} minutes and ${seconds} seconds`);
 
  rl.close();
});
 