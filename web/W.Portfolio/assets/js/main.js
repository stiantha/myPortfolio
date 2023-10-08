/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=============== MENU SHOW===============*/
/*===== VALIDATE IF CONSTANT EXISTS=======*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classlist.add('show-menu')
    })
}

/*============== MENU HIDDEN==============*/
/*===== VALIDATE IF CONSTANT EXISTS=======*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/



/*=============== ADD BLUR TO HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
