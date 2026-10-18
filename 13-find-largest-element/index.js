const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

function toNumbers(line) {
  return line.trim().split(/\s+/).map(Number);
}

function printLargest(table, rowCount, columnCount) {
  // Mulai dari elemen pertama, bukan 0, supaya tabel berisi angka negatif tetap benar.
  let largest = table[0][0];
  let largestRow = 0;
  let largestColumn = 0;

  for (let row = 0; row < rowCount; row++) {
    for (let column = 0; column < columnCount; column++) {
      if (table[row][column] > largest) {
        largest = table[row][column];
        largestRow = row;
        largestColumn = column;
      }
    }
  }

  console.log(
    `The location of the largest element is ${largest} at (${largestRow}, ${largestColumn})`
  );
}

const table = [];
let rowCount = null;
let columnCount = null;

process.stdout.write("Enter the number of rows and columns in the array: ");

rl.on("line", (line) => {
  // Baris pertama = ukuran tabel.
  if (rowCount === null) {
    const size = toNumbers(line);
    rowCount = size[0];
    columnCount = size[1];
    console.log("Enter the array:");
    return;
  }

  table.push(toNumbers(line));

  if (table.length === rowCount) {
    rl.close();
    printLargest(table, rowCount, columnCount);
  }
});