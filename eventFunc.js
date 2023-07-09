// const clickMe = (button) => {
//   console.log(button.innerText);
// };

// let btns = document.querySelectorAll("button");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (event) {
//     // console.log(btn.innerText);
//     let clickedBtn = event.target;
//     console.log(clickedBtn.innerText);
//   });
// });
// btn.addEventListener("click", function () {
//   console.log("click");
// });
let link = document.querySelector("#link");

link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(link);
});

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("test");
});

let options = document.querySelector("select");

options.addEventListener("change", (event) => {
  console.log(event.target.value);
});
