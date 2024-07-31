
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

// portfolio filter 
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('portfolioModalLabel');
    const modalDescription = document.getElementById('modalDescription');

    // Filter items
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('d-none');
                } else {
                    item.classList.add('d-none');
                }
            });
        });
    });

    // Modal functionality
    document.querySelectorAll('.portfolio-img').forEach(img => {
        img.addEventListener('click', () => {
            const title = img.getAttribute('data-title');
            const description = img.getAttribute('data-description');
            const imageSrc = img.getAttribute('data-image');

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalImage.src = imageSrc;
        });
    });
});