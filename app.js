const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

//Transparent navbar
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('transparent');
  } else {
      navbar.classList.remove('transparent');
  }
});

// Smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav a');
  
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        var targetSection = document.querySelector(this.getAttribute('href'));
        scrollToSection(targetSection.offsetTop);
      });
    }
  
    function scrollToSection(offset) {
      var scrollOptions = {
        top: offset,
        behavior: 'smooth'
      };
      window.scrollTo(scrollOptions);
    }
});

//Return to the top of the page or to the home page
document.addEventListener('DOMContentLoaded', function() {
  const logoLink = document.getElementById('navbar__logo');

  logoLink.addEventListener('click', function(event) {
      const currentPage = window.location.pathname;

      if (currentPage === '/index.html' || currentPage === '/') {
          // If on index page, scroll to the top
          event.preventDefault();
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      }
      // Otherwise, let the link behave as normal
  });
});