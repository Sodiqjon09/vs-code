const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const element = document.getElementById("element");
const div = document.createElement("li");

function ValueFunc() {
  return input.value;
}

addBtn.addEventListener("click", () => {
  if (ValueFunc() === "") {
    input.style.border = "2px solid red";
  } else {
    div.innerHTML = `
    <a href='#' >${ValueFunc()}</a>
    <span class="material-symbols-outlined"> unpublished </span>
    `;
  }
  element.appendChild(div);
  input.value = "";
});

div.addEventListener("click", () => {
  div.innerHTML = `
    <a href='#' >${ValueFunc()}</a>
    <span style="color: #4caf4f" class="material-symbols-outlined"> task_alt </span>
    `;
});
