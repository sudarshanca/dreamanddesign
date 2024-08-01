//header sidebar
function headerSidebar() {
  let menuIcon = document.getElementById("menu-icon");
  let navBlackBg = document.getElementById("nav-black-bg");
  let backgroundSidebar = document.getElementById("nav-items");
  menuIcon.classList.toggle("active");
  navBlackBg.classList.toggle("active");
  backgroundSidebar.classList.toggle("active");
  menuIcon.classList.remove("active");
}

// header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  const backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 1000) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// portfolio filter

document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = Array.from(
    document.querySelectorAll(".portfolio-item")
  );
  const modalContent = document.getElementById("modalContent");
  let currentIndex = -1;

  // Show modal with content
  document.querySelectorAll(".portfolio-img").forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      updateModalContent(index);
    });
  });

  // Navigation buttons
  document.getElementById("prevButton").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateModalContent(currentIndex);
    }
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    if (currentIndex < portfolioItems.length - 1) {
      currentIndex++;
      updateModalContent(currentIndex);
    }
  });

  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      filterItems(filter);
    });
  });

  function filterItems(filter) {
    portfolioItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });
  }

  function updateModalContent(index) {
    const portfolioItem = portfolioItems[index];
    const content = portfolioItem.innerHTML;

    modalContent.innerHTML = content;

    // Remove Bootstrap attributes from modal content to avoid conflicts
    const modalImage = modalContent.querySelector(".card-img-top");
    if (modalImage) {
      modalImage.removeAttribute("data-bs-toggle");
      modalImage.removeAttribute("data-bs-target");
    }
  }
});
