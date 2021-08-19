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