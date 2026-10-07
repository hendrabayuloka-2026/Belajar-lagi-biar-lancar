const topik = ["Function", "Object", "String", "Array"];

function terimaKasih(nama) {
  return "Terima kasih " + nama + ", semangatnya sangat membantu!";
}

console.log(terimaKasih("Bro"));

for (let i = 0; i < topik.length; i++) {
  console.log((i + 1) + ". " + topik[i] + " sudah dipelajari");
}

console.log("Lanjut terus, target jadi front end engineer!");