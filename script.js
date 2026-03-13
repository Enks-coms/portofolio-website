//Reveal Section Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;

    if (top < trigger) {
      section.classList.add("show");
    }
  });
});

//Navbar Scroll Effect
window.addEventListener("scroll", function () {
  let.navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//Scroll Progress Bar
window.unscroll = function () {
  let winscroll = document.body.scrollTop || document.documentElement.scrollTop;

  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrolled = (winscroll / height) * 100;
  document.querySelector(".scrollbar").style.width = scrolled + "%";
};

//Loader
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.display = "none";
  }
});
