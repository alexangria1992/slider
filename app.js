let slider = document.querySelector(".container .list");
let items = document.querySelectorAll(".container .list .slide");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
// let dots = document.querySelectorAll(".container .dots-container span");
const dots = document.querySelectorAll(".dot");

let active = 0;
let lengthItems = items.length - 1;

console.log(items);
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;

  reloadSlider();
};

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};

let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  let last_active_dot = document.querySelector(".container .dots span.active");
  //   dots.style.background = "#b5b5b5";
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");
  dots[active].style.background = "#fff";

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((span, key) => {
  span.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
