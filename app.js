const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 1) {
		header.style.backgroundColor = 'black';
	} else {
		header.style.backgroundColor = 'black';
	}
}); 

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


function toggleContainer() {
    var container = document.getElementById("container");
    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}


var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumb = document.getElementsByClassName("thumb");
var hero = document.getElementById("banane");

var backgroundImg = new Array(
  "img/Gran.jpg",
  "img/bg3.png",
  "img/bg4.png",
  "img/bg5.png"
);

let i = 0;
next.onclick = function () {
  if (i < 4) {
    hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
    thumb[i + 1].classList.add("active");
    thumb[i].classList.remove("active");
    i++;
  }
};

prev.onclick = function () {
  if (i > 0) {
    hero.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
    thumb[i - 1].classList.add("active");
    thumb[i].classList.remove("active");
    i--;
  }
};


/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
      }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
      }
  })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 



document.addEventListener("DOMContentLoaded", function(event) {
    var progress = document.querySelector('.progress');
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            progress.style.width = width + '%';
        }
    }
});