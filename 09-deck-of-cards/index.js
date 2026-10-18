const readlineSync = require("readline-sync");

const SUITS = ["Spades", "Hearts", "Diamonds", "Clubs"];
const RANKS = [
    "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King",
];

const identifyCard = (cardNumber) => ({
    rank: RANKS[cardNumber % 13],
    suit: SUITS[Math.floor(cardNumber / 13)],
});

const cardNumber = +readlineSync.question("Enter card number: ");
const { rank, suit } = identifyCard(cardNumber);

console.log(`Card number ${cardNumber}: ${rank} of ${suit}`);