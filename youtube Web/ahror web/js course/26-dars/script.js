// Break and Continue

const natijalar = [30, 43, 0, 65, 100, 20, 11];

for (let i = 0; i < natijalar.length; i++) {
  if (natijalar[i] === 0) {
    continue;
  }

  console.log("Sizning natijangiz", natijalar[i]);

  if (natijalar[i] === 100) {
    console.log("Siz eng yuqori natija to'pladingiz");
    break;
  }
}
