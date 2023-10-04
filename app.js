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

// JavaScript code to toggle the dropdown
document.addEventListener('DOMContentLoaded', function() {
  const dropdownButtons = document.querySelectorAll('.dropdown__button');
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdownButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          const dropdownContent = button.nextElementSibling;
          const isOpen = dropdownContent.classList.contains('active');

          if (isOpen) {
              // Close the dropdown
              dropdownContent.style.maxHeight = null;
              dropdownContent.classList.remove('active');
          } else {
              // Open the dropdown
              dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
              dropdownContent.classList.add('active');

              // Delayed adjustment of parent dropdown heights
              setTimeout(function() {
                  let parentDropdown = button.closest('.dropdown');
                  while (parentDropdown) {
                      const parentDropdownContent = parentDropdown.querySelector('.dropdown__content');
                      parentDropdownContent.style.maxHeight = parentDropdownContent.scrollHeight + 'px';
                      parentDropdown = parentDropdown.parentElement.closest('.dropdown');
                  }
              }, 300); // Adjust the delay (300 milliseconds) as needed
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