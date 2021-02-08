


(function () {
  let navLink = document.querySelectorAll('.nav-link'),
    mobilMenu = document.querySelector('.mobile-menu'),

    navbar = document.querySelector('.navbar'),
    faBars = document.querySelector('i.fa-bars'),
    faTimes = document.querySelector('i.fa-times'),
    backDrop = document.querySelector('.backdrop'),
    body = document.querySelector('#body'),
    links = document.querySelectorAll('.link');

  navLink.forEach(i => i.addEventListener(
    "click",
    e => {
      
   for(let j=0; j<navLink.length; j++){
        navLink[j].classList.remove('active');

   }
      e.currentTarget.classList.add('active')

    }))
  mobilMenu.addEventListener('click', () => {
    navbar.classList.toggle('is-active');
    faBars.classList.toggle('hide');
    faTimes.classList.toggle('show');
    backDrop.style.display = 'block';
    body.classList.toggle('body-no-scroll');

  })

  links.forEach(i => i.addEventListener(
    'click',
    e => {
      navbar.classList.remove('is-active');
      faBars.classList.toggle('hide');
      faTimes.classList.toggle('show');
      backDrop.style.display = 'none';
      body.classList.remove('body-no-scroll');
    }
  ))

  backDrop.addEventListener('click', () => {
    navbar.classList.remove('is-active');
    faBars.classList.toggle('hide');
    faTimes.classList.toggle('show');
    body.classList.remove('body-no-scroll');
    backDrop.style.display = 'none';

  })

  function windowSize() {
    const width = window.innerWidth;

    if (width >= 800) {
      navbar.classList.remove('is-active');
      backDrop.style.display = 'none';
      body.classList.remove('body-no-scroll');
      faBars.classList.remove('hide');
      faTimes.classList.remove('show');
    }
  }

  window.onresize = windowSize;
//scroll animated
const alink = document.querySelectorAll('a[href*="#"]')
// alink.filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))


alink.forEach(i=>i.addEventListener('click', (e)=>{

if(e.currentTarget.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`)){

  e.preventDefault();

  e.currentTarget.getAttribute('href')
 let currentId =e.currentTarget.getAttribute('href');

document.querySelector(currentId).scrollIntoView({behavior: 'smooth'}, 1000)
}


}))
})();




