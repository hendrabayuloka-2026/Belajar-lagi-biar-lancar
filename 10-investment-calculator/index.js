const readline = require("readline");

const PROMPTS = [
  "The amount invested: ",
  "Annual interest rate: ",
  "Years to project: ",
];

// Format a value to a maximum of two decimal places, truncating any
// extra precision and dropping unnecessary trailing zeros
// (e.g. 1093.806898 -> "1093.8", 1196.413529 -> "1196.41").
function formatValue(value) {
  return (Math.trunc(value * 100) / 100).toString();
}

// Value of the investment at the end of `year`, compounding monthly.
function projectedValue(amount, annualRatePercent, year) {
  const monthlyRate = annualRatePercent / 100 / 12;
  return amount * Math.pow(1 + monthlyRate, year * 12);
}

// Prints each prompt in turn and collects the user's answers in order.
async function readAnswers(rl) {
  const answers = [];
  process.stdout.write(PROMPTS[0]);

  for await (const line of rl) {
    answers.push(line.trim());
    if (answers.length === PROMPTS.length) break;
    process.stdout.write(PROMPTS[answers.length]);
  }

  return answers;
}

async function main() {
  const rl = readline.createInterface({ input: process.stdin, terminal: false });
  const [amountInput, rateInput, yearsInput] = await readAnswers(rl);
  rl.close();

  const amount = parseFloat(amountInput);
  const annualRatePercent = parseFloat(rateInput);
  const years = parseInt(yearsInput, 10);

  console.log();

  for (let year = 1; year <= years; year++) {
    const value = projectedValue(amount, annualRatePercent, year);
    console.log(`Year ${year}, value: ${formatValue(value)}`);
  }
}

main();