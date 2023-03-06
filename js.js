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
    // remove the "show" class from all the tooltips
    tooltips.forEach((t) => {
      t.style.opacity = 0;
    });
    // toggle the "show" class on the clicked button's tooltip
    tooltip.style.opacity = 1;
  });
});
