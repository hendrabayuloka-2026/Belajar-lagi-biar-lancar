const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function toNumbers(text) {
  const parts = text.split(" ");
  const numbers = [];

  for (let i = 0; i < parts.length; i++) {
    if (parts[i] !== "") {
      numbers.push(Number(parts[i]));
    }
  }

  return numbers;
}

rl.question("Enter list1: ", (answer1) => {
  rl.question("Enter list2: ", (answer2) => {
    const list1 = toNumbers(answer1);
    const list2 = toNumbers(answer2);

    const merged = list1.concat(list2);

    merged.sort((a, b) => a - b);

    console.log("The merged list is " + merged.join(" "));

    rl.close();
  });
});