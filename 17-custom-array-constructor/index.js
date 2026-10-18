const readline = require("readline");

// ---------- Constructor Arr ----------

function Arr() {
  this.length = 0;
}

Arr.prototype.push = function (element) {
  this[this.length] = element;
  this.length++;
  return this.length;
};

Arr.prototype.pop = function () {
  if (this.length === 0) return undefined;

  const lastIndex = this.length - 1;
  const lastElement = this[lastIndex];

  delete this[lastIndex];
  this.length--;
  return lastElement;
};

Arr.prototype.indexOf = function (element) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === element) return i;
  }
  return -1;
};

// includes tinggal numpang di indexOf, tidak perlu loop sendiri
Arr.prototype.includes = function (element) {
  return this.indexOf(element) !== -1;
};

Arr.prototype.findIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) return i;
  }
  return -1;
};

Arr.prototype.find = function (callback) {
  const index = this.findIndex(callback);
  if (index === -1) return undefined;
  return this[index];
};

Arr.prototype.filter = function (callback) {
  const result = new Arr();
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) result.push(this[i]);
  }
  return result;
};

Arr.prototype.map = function (callback) {
  const result = new Arr();
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i));
  }
  return result;
};

// Supaya bisa dipakai for...of
Arr.prototype[Symbol.iterator] = function () {
  const list = this; // `this` di dalam next() beda objek, jadi disimpan dulu
  let index = 0;

  return {
    next() {
      if (index < list.length) {
        return { value: list[index++], done: false };
      }
      return { value: undefined, done: true };
    },
  };
};

// ---------- Baca input dari keyboard ----------

const rl = readline.createInterface({ input: process.stdin });
const lines = rl[Symbol.asyncIterator]();

// Tampilkan pertanyaan, tunggu satu baris jawaban, kembalikan sebagai string
async function ask(question) {
  process.stdout.write(question);
  const { value, done } = await lines.next();

  if (done) {
    rl.close();
    process.exit(0); // input habis, hentikan program
  }
  return value.trim();
}

async function askNumber(question) {
  const answer = await ask(question);
  return Number(answer);
}

// ---------- Tampilan ----------

function formatList(label, list) {
  if (list.length === 0) return `${label}: none`;

  let text = "";
  for (const score of list) {
    text += " " + score;
  }
  return `${label}:${text}`;
}

function showMenu() {
  console.log("\nScore Tracker Menu");
  console.log("1. Display scores");
  console.log("2. Add a score");
  console.log("3. Remove the last score");
  console.log("4. Check whether a score exists");
  console.log("5. Find the index of a score");
  console.log("6. Find the first failing score");
  console.log("7. Show passing scores");
  console.log("8. Exit");
}

// ---------- Program utama ----------

async function main() {
  const scores = new Arr();

  const total = await askNumber("Number of scores: ");
  for (let i = 1; i <= total; i++) {
    const score = await askNumber(`Score ${i}: `);
    scores.push(score);
  }

  let running = true;

  while (running) {
    showMenu();
    const choice = await ask("Choose an option: ");

    switch (choice) {
      case "1":
        console.log(formatList("Scores", scores));
        break;

      case "2": {
        const score = await askNumber("Enter a score: ");
        const newTotal = scores.push(score);
        console.log(`${score} added. Total scores: ${newTotal}`);
        break;
      }

      case "3":
        if (scores.length === 0) {
          console.log("No scores to remove.");
        } else {
          console.log(`Removed: ${scores.pop()}`);
        }
        break;

      case "4": {
        const score = await askNumber("Enter a score to check: ");
        console.log(`${score} exists: ${scores.includes(score)}`);
        break;
      }

      case "5": {
        const score = await askNumber("Enter a score to find: ");
        console.log(`Index of ${score}: ${scores.indexOf(score)}`);
        break;
      }

      case "6": {
        const isFailing = (score) => score < 60;
        const index = scores.findIndex(isFailing);

        if (index === -1) {
          console.log("First failing score: none");
        } else {
          const failing = scores.find(isFailing);
          console.log(`First failing score: ${failing} at index ${index}`);
        }
        break;
      }

      case "7": {
        const passing = scores.filter((score) => score >= 60);
        console.log(formatList("Passing scores", passing));
        break;
      }

      case "8":
        console.log("Goodbye!");
        running = false;
        break;

      default:
        console.log("Invalid option.");
    }
  }

  rl.close();
}

main();