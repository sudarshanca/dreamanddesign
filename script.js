
//header sidebar
function headerSidebar() {
  let menuIcon = document.getElementById('menu-icon')
  let navBlackBg = document.getElementById('nav-black-bg')
  let backgroundSidebar = document.getElementById('nav-items')
  menuIcon.classList.toggle('active');
  navBlackBg.classList.toggle('active');
  backgroundSidebar.classList.toggle('active');
  menuIcon.classList.remove('active');
}

// header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  const backToTop = document.querySelector('.back-to-top');
  if (window.scrollY > 1000) {
    backToTop.classList.add('active');
  } else {
    backToTop.classList.remove('active');
  }
});
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  })};


// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  const contents = document.querySelectorAll('.section');

  function checkVisibility() {
      contents.forEach(content => {
          const rect = content.getBoundingClientRect();
          const elementHeight = rect.height;
          const elementTop = rect.top;
          const elementBottom = rect.bottom;

          // Check if the element is 50% in the viewport
          if ((elementTop + elementHeight * 0.5 < window.innerHeight) && (elementBottom - elementHeight * 0.5 > 0)) {
              content.classList.add('visible');
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);

  // Initial check in case elements are already in view on page load
  checkVisibility();
});










