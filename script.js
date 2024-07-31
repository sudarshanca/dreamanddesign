
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










