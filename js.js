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


const svg = document.querySelectorAll('nav img');
const root = document.documentElement;
const theme = document.querySelector('.theme');
const themeIcon = document.querySelector('#home img');
const signature = document.querySelector('.signature');

let isDarkMode = false;

theme.addEventListener('click', () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    svg.forEach((item) => {
      item.style.filter = 'invert(0%) sepia(90%) saturate(7500%) hue-rotate(184deg) brightness(98%) contrast(108%)'
    });
    root.style.setProperty('--lightGray', '#343a40');
    root.style.setProperty('--midGray', '#adb5bd');
    root.style.setProperty('--darkGray', '#edf6f9');
    themeIcon.src = 'imgs/moon.svg';
    themeIcon.style.filter = 'invert(0%) sepia(90%) saturate(7500%) hue-rotate(184deg) brightness(98%) contrast(108%)';
  } else {
    svg.forEach((item) => {
      item.style.filter = 'invert(100%) sepia(1%) saturate(7422%) hue-rotate(186deg) brightness(121%) contrast(67%)';
    });
    root.style.setProperty('--lightGray', '#d8d4d4');
    root.style.setProperty('--midGray', '#535151');
    root.style.setProperty('--darkGray', '#272626');
    themeIcon.src = 'imgs/sun.svg';
    themeIcon.style.filter = 'invert(57%) sepia(99%) saturate(541%) hue-rotate(355deg) brightness(87%) contrast(91%)';
  }
});

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  let name = e.target.elements.name.value;
  let email = e.target.elements.email.value;
  let message = e.target.elements.message.value;
  let param = `name=${name}&email=${email}&message=${message}`;
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://nenad.codefactory.live/email.php');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      e.target.reset();
      alert('Email sent successfully!');
    } else {
      console.error(`Request failed. Returned status of ${xhr.status}`);
      alert(`Request failed. Returned status of ${xhr.status}`);
    }
  };
  xhr.onerror = () => {
    console.error('There was an error sending the request.');
    alert('There was an error sending the request.');
  };
  xhr.send(param);
});


const arrow = document.getElementById('sendArrow')
const btn = document.getElementById('sendBtn')
const text = document.getElementById('ptag')


btn.addEventListener('mouseover', () => {
  arrow.style.display = 'block';
  text.style.display = 'none';
})

btn.addEventListener('mouseout', () => {
  arrow.style.display = 'none';
  text.style.display = 'block';
})

btn.addEventListener('click', () => {
  text.innerHTML = 'Thank you for your message!'

  arrow.addEventListener('animationend', () => {
    arrow.style.opacity = '0';
  })
})