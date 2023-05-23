//_touch _pc _lock
//Определения устройства
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone| iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windosws: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return(
            isMobile.Android() ||
            isMobile.BlackBerry()||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windosws()
        )
    },
};

if (isMobile.any()) {
   
    document.body.classList.add('_touch');
    let headerArrows = document.querySelectorAll(".header__arrow")

    if(headerArrows.length > 0 ){    
        let headerNavItems = document.querySelectorAll('.header__nav__link__item__one')
        for(let i=0; i<headerArrows.length; i++){
            const arrows = headerArrows[i]
            const headerNavItem = headerNavItems[i]
            headerNavItem.addEventListener("click", function(){
                headerNavItem.parentElement.classList.toggle('_active')
            })
     
        }

    }

} else {
    document.body.classList.add('_pc');
}




const iconMenu = document.querySelector(".header__menu__icon")

if(iconMenu) {
    const headerNav = document.querySelector(".header__nav__container")
    const registrationBtn = document.querySelector(".header__registrations")
    const disableBtc = document.querySelector(".header__quotes")
    const containerBody = document.querySelector(".container")
    
    iconMenu.addEventListener("click", function(){
        //document.body.classList.toggle('_lock')
        document.documentElement.classList.toggle("_lock")
        document.body.classList.toggle("_lock")
      
        iconMenu.classList.toggle('_active')
        headerNav.classList.toggle('_active')
        registrationBtn.classList.toggle('_active')
   
    })
}


// let scrollY;
// const modal = document.querySelector(".header__menu__icon")
// console.log(modal)

// if(modal){
// function preventDefault(){
//     e.preventDefault()
// }

//    modal.addEventListener('click', showModal)
//     function showModal(){
//     const headerNav = document.querySelector(".header__nav__container")
//     const registrationBtn = document.querySelector(".header__registrations")

//     scrollY=window.scrollY
//     document.documentElement.classList.add("_lock")
//     document.body.classList.add("lock")

//     modal.classList.add("_active")
//     headerNav.classList.add('_active')
//     registrationBtn.classList.add('_active')
//     modal.addEventListener('pointermove', preventDefault)
// }

    // modal.addEventListener('click', hideModal)
    // function hideModal(){
    //     const headerNav = document.querySelector(".header__nav__container")
    //     const registrationBtn = document.querySelector(".header__registrations")
    
    //     scrollY=window.scrollY
    //     document.documentElement.classList.remove("_lock")
    //     document.body.classList.remove("lock")
    
    //     modal.classList.remove("_active")
    //     headerNav.classList.remove('_active')
    //     registrationBtn.classList.remove('_active')
    //     modal.removeEventListener('pointermove', preventDefault)
    //     window.scroll(0, scrollY)
    // }
// }
// module.exports={isMobile,iconMenu}