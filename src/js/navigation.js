(function(){
    window.addEventListener('scroll', () => {
        const s1 = document.querySelector('.addColor'),
            menu = document.querySelector('.nav'),
            link = document.querySelectorAll('.link'),
            button = document.querySelector('.btn-down-container '),
            s2 = document.querySelector('.description-project');
    
        if (window.pageYOffset >= s1.offsetTop) {
            menu.style.background = 'linear-gradient(to left, #722f37, #970001)';
            for (let i = 0; i < link.length; i++) {
                link[i].style.color = '#722f37';
            }
            // $(.btn-down-container ).css('display', 'block');
         if(button){
            button.classList.add('btn-down-container-visible');
         }
            
    
        } else {
            menu.style.background = 'transparent';
            for (let i = 0; i < link.length; i++) {
                link[i].style.color = '#C29545';
            }
            if(button){
                button.classList.remove('btn-down-container-visible');
            }
         
        }
    
    })
})()
