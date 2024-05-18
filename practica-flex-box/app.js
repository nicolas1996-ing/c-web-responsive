const btns = document.querySelectorAll(".btn-justify");
const containter = document.getElementById("container");

function onHandleClick(param) {
  containter.style.justifyContent = param;
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const param = btn.getAttribute("data-param");
    onHandleClick(param);
  });
});