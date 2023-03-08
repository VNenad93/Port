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

const items = document.querySelectorAll(".information");
const hidden = document.querySelectorAll(".hidden");
const imgs = document.querySelectorAll(".info img");


window.addEventListener('load', () => {
  home.classList.add('active');
  tooltips[0].style.visibility = "visible";
});

let activeItem = null;
let rotatedImg = null;


for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    if (activeItem !== null && activeItem !== i) {
      hidden[activeItem].style.maxHeight = null;
      if (rotatedImg !== null) {
        imgs[rotatedImg].style.transform = "rotateX(0)";
      }
    }

    if (hidden[i].style.maxHeight) {
      hidden[i].style.maxHeight = null;
      activeItem = null;
      if (rotatedImg === i) {

        imgs[i].style.transform = "rotateX(0)";
        rotatedImg = null;
      } else {

        imgs[i].style.transform = "rotate(90deg)";
        rotatedImg = i;
      }
    } else {
      hidden[i].style.maxHeight = hidden[i].scrollHeight + "px";
      activeItem = i;
      if (rotatedImg !== null) {
        imgs[rotatedImg].style.transform = "rotateX(0)";
      }
      imgs[i].style.transform = "rotate(90deg)";
      rotatedImg = i;
    }
  });
}


// :root {
//   --lightGray: #d8d4d4;   FONT COLOR
//   --midGray: #535151;    FORM AND NAVBAR COLOR
//   --darkGray: #272626;   BACKGROUND COLOR
//   --light: #d68b12;    BUTTON COLOR
// }



const svg = document.querySelectorAll('nav img');
const root = document.documentElement;

svg.forEach((item) => { 
    item.style.filter = 'invert(0%) sepia(90%) saturate(7500%) hue-rotate(184deg) brightness(98%) contrast(108%)'
});

root.style.setProperty('--lightGray', '#343a40');
root.style.setProperty('--darkGray', '#edf6f9');
root.style.setProperty('--midGray', '#adb5bd');
