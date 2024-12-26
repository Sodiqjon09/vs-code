// 1 - topshiriq. tovarlarning umumiy narxi qancha.

const array = [];
let sum = 0;

// data.forEach((nums) => {
//   array.push(nums.price);
// });

// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }

// console.log(sum);

// 2 - topshiriq. categoriyalari bo'yicha, alohida qilib filterlab bering.

// const smartphones = data.filter((item) => item.category == "smartphones");
// const laptops = data.filter((item) => item.category == "laptops");

// console.log(smartphones);
// console.log(laptops);

// 3 - topshiriq. Faqat apple brandidagi tovarlarni ajratib bering

// const apples = data.filter((item) => item.brand == "Apple");

// console.log(apples);

// 4 - topshiriq. Narxlari bo'yicha tartiblab bering. yani arzondan boshlab, qimmatlashib ketsin.
// const arr = [];

// toSorted((a, b) => a - b);

data.filter((item) => {
  let array = item.price.toSorted((a, b) => a - b);
  console.log(array);1
});

console.log(result);

// 5 - topshiriq. barcha tovarlarning nomlarini alohida bitta array ga joylashtirib bering.

// const arr = [];

// data.filter((item) => {
//   arr.push(item.title);
// });

// console.log(arr);

// 6 - topshiriq. counter yasab bering.

// const qoshish = document.querySelector("#qoshish");
// const ayrish = document.querySelector("#ayrish");
// const num = document.querySelector("#num");

// let number = 0;
// num.innerHTML = number;

// qoshish.addEventListener("click", () => {
//   number++;
//   num.innerHTML = number;
// });

// ayrish.addEventListener("click", () => {
//   if (number > 0) {
//     number--;
//   }
//   num.innerHTML = number;
// });

// 7 - topshiriq. 2 ta sondan kattasini aniqlab beruvchi funksiya yozib bering.

// const num1 = 23;
// const num2 = 22;

// let result = Math.max(num1, num2);

// console.log(result);

// 8 - topshiriq. "Uzbekistan" so'zini teskari tartibda yozib bering. yani "natsikebzU"

// const country = 'Uzbekistan'

// console.log(country.split("").reverse().join(""));

// 9 - topshiriq.
// arrayligini tekshiring

// const arr = ["false", "sarvar", 0, NaN, 45, true];

// let result = Array.isArray(arr);
// console.log(result);

// 10 - topshiriq. 1 dan 100 gacha bo'lgan sonlar orasida, 2, 3 va 5 ga bo'linmaydigan sonlar yig'indisini topib bering.
