// Get the header element
const header = document.querySelector("header");

function handleScroll() {
  if (!header) return;

  if (window.pageYOffset > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
}

// Attach the scroll event listener to the window
window.addEventListener("scroll", handleScroll);
