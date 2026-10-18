const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter size: ', (input) => {
  const size = parseInt(input, 10);

  console.log();

  for (let row = 0; row < size; row++) {
    let line = '';
    for (let col = 0; col < size; col++) {
      line += '*';
    }
    console.log(line);
  }

  rl.close();
});