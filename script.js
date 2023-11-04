/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height  = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
              link.classList.remove('active')
            });
            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            activeLink.classList.add('active');
          };

    });
};


/*==================== sticky navbar ====================*/


/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/


/*==================== scroll reveal ====================*/

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form ', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});



/*==================== typed js ====================*/

var typed = new Typed(".multiple-text", {
    strings: ["Kulton", "Mahmood", "JacK"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });