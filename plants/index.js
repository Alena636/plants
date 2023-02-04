const iconBurger = document.querySelector('.nav-icon');
const navList = document.querySelector('.nav-list');
if (iconBurger) {
    iconBurger.addEventListener("click",  function () {
            document.body.classList.toggle('_lock');
            iconBurger.classList.toggle('_active');
            navList.classList.toggle('_active');
        });
}


const navLinks = document.querySelectorAll('.nav-link[data-goto]');
if (navLinks.length > 0) {
    navLinks.forEach(navLink => {
        navLink.addEventListener("click", onNavLinkClick);
    });

    function onNavLinkClick(e) {
        const navLink = e.target;
        if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
            const gotoBlock = document.querySelector(navLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if(iconBurger.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconBurger.classList.remove('_active');
                navList.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    
    }
}

const gardens = document.querySelector('.service-button.gardens')
const blur = document.querySelector('.service-item.planting1') 
const plant2 = document.querySelector('.service-item.planting2')
const plant3 = document.querySelector('.service-item.planting3')
const lawnImg = document.querySelector('.service-item.lawn')
const lawn = document.querySelector('.service-button.lawn')
const garden1 = document.querySelector('.service-item.garden')
const garden2 = document.querySelector('.service-item.garden2')
const plantBtn = document.querySelector('.service-button.plant')


gardens.addEventListener("click",  function () {
    blur.classList.toggle('_bluring');
     plant2.classList.toggle('_bluring');
    plant3.classList.toggle('_bluring');
    lawnImg.classList.toggle('_bluring');
    gardens.classList.toggle('_active-button')
} )

lawn.addEventListener("click", function() {
    garden1.classList.toggle('_bluring')
     garden2.classList.toggle('_bluring')
     blur.classList.toggle('_bluring');
    plant2.classList.toggle('_bluring');
    plant3.classList.toggle('_bluring');
    lawn.classList.toggle('_active-button') 
 })

 plantBtn.addEventListener("click", function() {
     garden1.classList.toggle('_bluring')
     garden2.classList.toggle('_bluring')
    lawnImg.classList.toggle('_bluring');
    plantBtn.classList.toggle('_active-button')
 })

 


 document.querySelectorAll('.accordion').forEach((el) => {
    el.addEventListener("click", () => {
        let description = el.nextElementSibling;

        description.classList.add('active-accordion')
        if(description.style.maxHeight) {
            document.querySelectorAll('.description-wrapper').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.description-wrapper').forEach((el) => el.style.maxHeight = null)
            description.style.maxHeight = description.scrollHeight + 'px'
        }
    })
})



let dropdown = document.querySelector('.drop-name')
let wrapper = document.querySelector('.dropdown-wrapper')
let dropWrapper = document.querySelector('.dropdown')
dropdown.addEventListener("click", () => {
    dropdown.classList.toggle('active-drop')
    wrapper.classList.toggle('active-wrapper')
    dropWrapper.classList.toggle('active-dropdown')
    city1.classList.remove('active-city')
    city2.classList.remove('active-city2')
    city3.classList.remove('active-city2')
    city4.classList.remove('active-city2')
})


let city1 = document.querySelector('.city1')
let dropItem1 = document.querySelector('.drop-item.cana')
dropItem1.addEventListener("click", () => {
city1.classList.toggle('active-city')
dropWrapper.classList.remove('active-dropdown')
})

let city2 = document.querySelector('.city2')
let dropItem2 = document.querySelector('.drop-item.ny')
dropItem2.addEventListener("click", () => {
    city2.classList.toggle('active-city2')
    dropWrapper.classList.remove('active-dropdown')
})

let city3 = document.querySelector('.city3')
let dropItem3 = document.querySelector('.drop-item.yonkers')
dropItem3.addEventListener("click", () => {
    city3.classList.toggle('active-city2')
    dropWrapper.classList.remove('active-dropdown')
})

let city4 = document.querySelector('.city4')
let dropItem4 = document.querySelector('.drop-item.sherrill')
dropItem4.addEventListener("click", () => {
    city4.classList.toggle('active-city2')
    dropWrapper.classList.remove('active-dropdown')
})













    

    
