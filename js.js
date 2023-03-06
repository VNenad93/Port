const list = document.querySelectorAll('li');
const tooltips = document.querySelectorAll(".tooltip");

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
const info = document.querySelector(".info");
const grid = document.querySelector(".items");

items.forEach((item) => {
  item.addEventListener("click", () => {
    info.style.display = "block";
    grid.classList.add("slide-out")
  });
});