const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter size: ', (input) => {
  const size = parseInt(input, 10);

  for (let row = size; row >= 1; row--) {
    let line = '';
    for (let col = 0; col < row; col++) {
      line += '*';
    }
    console.log(line);
  }

  rl.close();
});