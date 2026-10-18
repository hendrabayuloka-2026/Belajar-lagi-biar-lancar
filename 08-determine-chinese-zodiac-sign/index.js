const readlineSync = require("readline-sync");

const ZODIAC_SIGNS = [
  "monkey", "rooster", "dog", "pig", "rat", "ox",
  "tiger", "rabbit", "dragon", "snake", "horse", "sheep",
];

const getZodiacSign = (year) => ZODIAC_SIGNS[((year % 12) + 12) % 12];

const year = readlineSync.questionInt("Enter a year: ");
console.log(`\nThe Chinese zodiac for year ${year} is ${getZodiacSign(year)}`);