window.addEventListener('scroll', () => {
    const s1 = document.querySelector('.about-me'),
        menu = document.querySelector('.nav'),
        link = document.querySelectorAll('.link'),
        button = document.querySelector('.btn-down-container ');

    if (window.pageYOffset >= s1.offsetTop) {
        menu.style.background = 'linear-gradient(to left, #722f37, #970001)';
        for (let i = 0; i < link.length; i++) {
            link[i].style.color = '#722f37';
        }
        // $(.btn-down-container ).css('display', 'block');
     
        button.classList.add('btn-down-container-visible');

    } else {
        menu.style.background = 'transparent';
        for (let i = 0; i < link.length; i++) {
            link[i].style.color = '#C29545';
        }
        button.classList.remove('btn-down-container-visible');
    }

})