const slideList = [{
    img: "img/apple.jpg",
    text: "An apple a day keeps the doctor away.",
    p: "English sayings"
  },
  {
    img: "img/bird-pt.jpg",
    text: "ajuda-te que Deus te ajudará",
    p: "Bóg pomaga, tym co sami sobie pomagają"
  },
  {
    img: "img/way.jpg",
    text: "ller Anfang ist schwer ",
    p: "Wszystkie początki są trudne"
  }
];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const p = document.querySelector("p.slider");
const dots = [...document.querySelectorAll(".dots span")];
const time = 3000;
let active = 0;

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};
const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  p.textContent = slideList[active].p;
  changeDot();
};

let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = e => {
  console.log("działa");
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexInterval);

    e.keyCode == 37 ? active-- : active++;

    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    p.textContent = slideList[active].p;
    changeDot();
    indexInterval = setInterval(changeSlide, time);
  }
};

window.addEventListener("keydown", keyChangeSlide);


//menu

let menuIconOpen = document.querySelector('.open');
let menuIconClose = document.querySelector('.close');
let menuItems = document.querySelectorAll('.menu')

menuIconClose.style.display = "none"
const open = () => {
  menuIconClose.style.display = "block";
  menuIconOpen.style.display = 'none'
  menuDisplay('show', menuItems)
}

const close = () => {
  menuIconOpen.style.display = "block";
  menuIconClose.style.display = "none";
  menuDisplay('hide', menuItems)
}

function menuDisplay(state, items) {
  if (state == 'show') {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add('show');
    }
  } else {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('show')
    }

  }
}

menuIconClose.addEventListener('click', close)
menuIconOpen.addEventListener('click', open)