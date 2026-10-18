const prompt = require("prompt-sync")();

const input = prompt("Enter the integers between 1 and 100: ");
const counts = {};


for (const part of input.split("")) {
    if(part ==="") continue;

    const num = Number (part);
    counts[num] = (counts[num] || 0) + 1;
}

const sortedNums = Object.keys(counts).sort((a,b) => a - b);

for (const num of sortedNums) {
    const total = counts[num];
    console.log(`${num} occurs ${total} ${total === 1 ? "time" : "times"}`);
}
