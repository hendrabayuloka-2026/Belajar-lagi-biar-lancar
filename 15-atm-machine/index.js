const prompt = require("prompt-sync")({ sigint: true });

//Buat 10 akun, id 0 sampai 9, saldo awal 100
const accounts = [];
for (let i = 0; i < 10; i++) {
  accounts.push({ id: i, balance: 100 });
}

//Minta id terus sampai valid
const askId = () => {
  while (true) {
    const input = prompt("Enter an id: ").trim();
    const id = Number(input);

    if (input.length > 0 && Number.isInteger(id) && id >= 0 && id < accounts.length) {
      return id;
    }
  }
};

const showMenu = () => {
  console.log("\nMain menu");
  console.log("1: check balance");
  console.log("2: withdraw");
  console.log("3: deposit");
  console.log("4: exit");
};

//Jalankan menu untuk satu akun sampai user pilih exit
const runMenu = (account) => {
  let isRunning = true;

  while (isRunning) {
    showMenu();
    const choice = prompt("Enter a choice: ").trim();

    if (choice === "1") {
      console.log(`The balance is ${account.balance.toFixed(1)}`);
    } else if (choice === "2") {
      const amount = Number(prompt("Enter an amount to withdraw: "));
      if (amount > 0 && amount <= account.balance) {
        account.balance -= amount;
      }
    } else if (choice === "3") {
      const amount = Number(prompt("Enter an amount to deposit: "));
      if (amount > 0) {
        account.balance += amount;
      }
    } else if (choice === "4") {
      isRunning = false;
    }
  }
};

//Program utama: tidak pernah berhenti
while (true) {
  const id = askId();
  runMenu(accounts[id]);
  console.log();
}