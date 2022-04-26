const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const mobileNav = document.querySelector('.sideNav');
const arrow1 = document.querySelector('.arrows1');
const arrow2 = document.querySelector('.arrows2');
const featuresButton = document.getElementById('featuresButton');
const companyButton = document.getElementById('companyButton');
const featuresMenu = document.getElementById('featuresMenu');
const companyMenu = document.getElementById('companyMenu');
let overlay = document.getElementById('backOverlay');
const main = document.querySelector('main');
console.log(main);

openMenu.addEventListener('click', () => {
    mobileNav.classList.add('show-nav');
    overlay.style.display = "block";
    console.log("clicked");
    
});


closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('show-nav');
    overlay.style.display = "none";
    
});


featuresButton.addEventListener('click', () => {
    
    featuresMenu.classList.toggle('sub-menu-toggle');
    if(featuresMenu.classList.contains('sub-menu-toggle')){
        arrow1.style.transform ="rotate(180deg)";
        featuresMenu.style.display = "block";
    }else{
        arrow1.style.transform ="rotate(0deg)";
        featuresMenu.style.display = "none";

    }
    
});


companyButton.addEventListener('click', () => {
    companyMenu.classList.toggle('sub-menu-toggle');
    if(companyMenu.classList.contains('sub-menu-toggle')){
        companyMenu.style.display = "block";
        arrow2.style.transform ="rotate(180deg)";
    }else{
        companyMenu.style.display = "none";
        arrow2.style.transform ="rotate(0deg)";

    }
    
});




