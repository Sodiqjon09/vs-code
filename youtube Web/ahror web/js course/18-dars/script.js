// prompt

let ism = prompt("Ismingizni kiriting:");

let firstWord = ism.charAt(0).toUpperCase();
let secondWords = ism.slice(1).toLowerCase();
let result = firstWord + secondWords;

alert(`Salom, ${result}`);
