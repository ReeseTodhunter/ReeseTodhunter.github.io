// Transparent navbar
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
  var logoLink = document.getElementById('navbar__logo');
  var currentPage = window.location.pathname;

  if (logoLink && (currentPage === '/index.html' || currentPage === '/')) {
    logoLink.addEventListener('click', function(event) {
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});