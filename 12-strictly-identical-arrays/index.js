const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function toNumbers(line) {
  const text = line.trim();
  if (text === "") {
    return [];
  }
  return text.split(/\s+/).map(Number);
}
function equals(arr1, arr2) {
  // panjang beda berarti sudah pasti beda
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; 
    }
  }

  return true;
}

rl.question("Enter list1: ", (line1) => {
  rl.question("Enter list2: ", (line2) => {
    rl.close();

    const list1 = toNumbers(line1);
    const list2 = toNumbers(line2);

    if (equals(list1, list2)) {
      console.log("Two lists are strictly identical");
    } else {
      console.log("Two lists are not strictly identical");
    }
  });
});