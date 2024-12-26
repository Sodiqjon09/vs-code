/* ----- ko'p ishlatiladigan string metodlari ----- */

let email = "akhrorweb@gmail.com";

// lastIndexOf()
// oxiridan boshlab element bo'yicha index qidiradi

// let result = email.lastIndexOf("o");
/* console.log(result);
indexOf() */

// slice()
// kesib beradi
/*let result = email.slice(10);
console.log(result);*/

// substr()
// substr index dad index gacha chaqirib oladi
/* let result = email.substr(1, 9);
console.log(result); */

// replace()
// replace() bir element ni boshqa element bilan almash tirish
/* let result = email.replace("a", "d");
console.log(result) */

// charAt()
/* let result = email.charAt(0);
console.log(result); */

// toUpperCase() - toLowerCase()
/* let result = email.toUpperCase();
console.log(result); */

// trim()
// trim() boshidan va oxiridan bo'shliqlarni qirqib beradi
/* let result = email.trim();
console.log(result.length, email.length);*/

// split()
// array ga olib beradi 
let result = email.split('')
console.log(result)