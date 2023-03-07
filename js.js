const list = document.querySelectorAll('li');
const tooltips = document.querySelectorAll(".tooltip");
const home = document.querySelector(".home");

list.forEach((item) => {
  item.addEventListener("click", () => {
    list.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

tooltips.forEach((tooltip) => {
  tooltip.previousElementSibling.addEventListener("click", () => {
    tooltips.forEach((t) => {
      t.style.visibility = "hidden";
    });
    tooltip.style.visibility = "visible";
  });
});

const items = document.querySelectorAll(".item");
const drop = document.querySelectorAll(".drop");
const imgs = document.querySelectorAll(".flex img");


let activeItem = null;
let rotatedImg = null;

window.addEventListener('load', () => {
  home.classList.add('active');
  tooltips[0].style.visibility = "visible";
});

console.log(home)


// for (let i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", () => {
//     if (activeItem !== null && activeItem !== i) {
//       drop[activeItem].style.maxHeight = null;
//       if (rotatedImg !== null) {
//         imgs[rotatedImg].style.transform = "rotateX(0)";
//       }
//     }

//     if (drop[i].style.maxHeight) {
//       drop[i].style.maxHeight = null;
//       activeItem = null;
//       if (rotatedImg === i) {

//         imgs[i].style.transform = "rotateX(0)";
//         rotatedImg = null;
//       } else {

//         imgs[i].style.transform = "rotate(90deg)";
//         rotatedImg = i;
//       }
//     } else {
//       drop[i].style.maxHeight = drop[i].scrollHeight + "px";
//       activeItem = i;
//       if (rotatedImg !== null) {
//         imgs[rotatedImg].style.transform = "rotateX(0)";
//       }
//       imgs[i].style.transform = "rotate(90deg)";
//       rotatedImg = i;
//     }
//   });
// }

