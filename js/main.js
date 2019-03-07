let menuItems = document.querySelectorAll('.nav-link');
let menuIconOpen = document.querySelector('.open');
let menuIconClose = document.querySelector('.close');

menuIconClose.style.display = 'none';
const open = () => {
  menuIconClose.style.display = "block";
  menuIconOpen.style.display = 'none';
  menuDisplay('show', menuItems)


}
const close = () => {
  menuIconOpen.style.display = 'block';
  menuIconClose.style.display = 'none';
  // menuItems.style.display = 'none';
  menuDisplay('hide', menuItems)

}

function menuDisplay(state, items) {
  if (state == "show") {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add("show");

    }
  } else {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove("show");
    }
  }
}



menuIconClose.addEventListener('click', close)
menuIconOpen.addEventListener('click', open)