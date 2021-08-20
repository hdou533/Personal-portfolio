// Show and hide Nav menu

const navMenu = document.getElementById('navMenu');

const navToogle = document.getElementById('navToggle');

const navClose = document.getElementById('navClose');

if(navToggle){
    navToogle.addEventListener('click',()=>{
        navMenu.classList.add('showMenu');
    });
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('showMenu');
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('showMenu');
    })
}

const navLink = document.querySelectorAll('.navLink');
navLink.forEach(link => {
    link.addEventListener('click', ()=>{
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('showMenu');
    })
})

/* theme button */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon';

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme);
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})


/* Skills dropdown*/
const skillsContent = document.querySelectorAll('.skillsContent')
const  skillsHeader = document.querySelectorAll('.skillsHeader');
//console.log(navLink);

skillsHeader.forEach((e)=>{
    e.addEventListener('click', ()=>{
        let item = e.parentNode.className;
        for (let i = 0; i < skillsContent.length; i++){
            if(item === 'skillsContent skillsOpen'){
                e.parentNode.className = 'skillsContent skillsClose';
            }
            if(item == 'skillsContent skillsClose'){
                e.parentNode.className = 'skillsContent skillsOpen';
            }
        }
        })      
})

let swiper = new Swiper('.portfolioContainer', {
    // Optional parameters
    cssMode: true,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });