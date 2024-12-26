// 1 - misol

// 1 dan 100 gacha bo'lgan har bir raqamni yangi satrda chop etadigan qisqa dastur yozing.

// 3 ning har bir karrali uchun raqam o'rniga "Algo" ni chop eting.

// 5 ning har bir ko'paytmasi uchun raqam o'rniga "Ritm" ni chop eting.

// 3 va 5 ga karrali raqamlar uchun raqam o'rniga "AlgoRitm" ni chop eting.

// 2 - misol

// Sum Methodni for loopda yozib bering

// dom uchun js code
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const email = document.getElementById("email");
const addCreatButton = document.getElementById("add");
const list = document.getElementById("list");

addCreatButton.addEventListener("click", (e) => {
  e.preventDefault();
  let tr = document.createElement("tr");

  if (firstName.value == "") {
    firstName.style.border = "3px solid red";
  }
  if (lastName.value == "") {
    lastName.style.border = "3px solid red";
  }
  if (age.value == "") {
    age.style.border = "3px solid red";
  }
  if (email.value == "") {
    email.style.border = "3px solid red";
  }
  
  list.innerHTML = `
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${age.value}</td>
    <td>${email.value}</td>
    <span class='delete'>Delete</span>
  `;
  list.prepend(tr);

  firstName.value = "";
  lastName.value = "";
  age.value = "";
  email.value = "";
});

list.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classList == "delete") {
    e.target.parentElement.remove();
  }
});
