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
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const ten = document.querySelector(".ten");


items.forEach((item) => {
  item.addEventListener("click", () => {
    if (info.style.display = "none") {
      info.style.display = "block";
      grid.classList.add('slide-out')
    } else { 
      info.style.display = "none";
    }
    

    if (item.querySelector('div h2').innerHTML === 'HTML/CSS') {
      info.innerHTML = one.innerHTML;
      one.classList.add('op')
    } else if (item.querySelector('div h2').innerHTML === 'JavaScript') {
      info.innerHTML = two.innerHTML;
      two.classList.add('op')
    } else if (item.querySelector('div h2').innerHTML === 'SCSS/SASS') {
      info.innerHTML = three.innerHTML;
    } else if (item.querySelector('div h2').innerHTML === 'TailwindCSS') {
      info.innerHTML = four.innerHTML;
    } else if (item.querySelector('div h2').innerHTML === 'Bootstrap') {
      info.innerHTML = five.innerHTML;
    } else if (item.querySelector('div h2').innerHTML === 'Figma') {
      info.innerHTML = six.innerHTML;
    } else if (item.querySelector('div h2').innerHTML === 'Angular') {
      info.innerHTML = seven.innerHTML;
    } else if (item.querySelector('div h2').innerHTML === 'React') {
      info.innerHTML = eight.innerHTML;
    } else if (item.querySelector('div h2').innerHTML === 'Git') {
      info.innerHTML = nine.innerHTML;
    } else if (item.querySelector('div h2').innerHTML === 'TypeScript') {
      info.innerHTML = ten.innerHTML;
    }
  });
});


