const readline = require("readline");

// Gedung ini tidak punya lantai 13
const MISSING_FLOOR = 13;

function Elevator(from, to) {
  this.from = from;
  this.to = to;
}

Elevator.prototype[Symbol.iterator] = function () {
  const destination = this.to;
  const direction = this.to >= this.from ? 1 : -1;
  let nextFloor = this.from;
  let arrived = false;

  return {
    next() {
      if (arrived) {
        return { value: undefined, done: true };
      }

      const floor = nextFloor;

      if (floor === destination) {
        arrived = true;
      } else {
        nextFloor += direction;
        if (nextFloor === MISSING_FLOOR) {
          nextFloor += direction;
        }
      }

      return { value: floor, done: false };
    },
  };
};

function ride(from, to) {
  const elevator = new Elevator(from, to);

  for (const floor of elevator) {
    console.log(`Floor ${floor}`);
  }

  console.log(`Arrived at floor ${to}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Current floor: ", (current) => {
  rl.question("Destination floor: ", (destination) => {
    rl.close();
    ride(Number(current), Number(destination));
  });
});