//header sidebar
function headerSidebar() {
  let menuIcon = document.getElementById("menu-icon");
  let navBlackBg = document.getElementById("nav-black-bg");
  let backgroundSidebar = document.getElementById("nav-items");
  
  menuIcon.classList.toggle("active");
  navBlackBg.classList.toggle("active");
  backgroundSidebar.classList.toggle("active");
}


// header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
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
      // Remove active class from all buttons
      document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.classList.remove("active");
      });

      // Add active class to the clicked button
      button.classList.add("active");

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


    
// form start
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
