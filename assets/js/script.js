// oul carousel js start
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
// oul carousel js end

// scroll bar js start

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// scroll bar js end

// navtab active class work===================================

// JavaScript to ensure only the clicked tab has the active class
const tabs = document.querySelectorAll(".nav-link");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove the active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));

    // Add the active class to the clicked tab
    tab.classList.add("active");
  });
});
