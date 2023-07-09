// const clickMe = (button) => {
//   console.log(button.innerText);
// };

let btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    console.log(btn.innerText);
  });
});
// btn.addEventListener("click", function () {
//   console.log("click");
// });
