document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const titles = document.querySelectorAll(".titles li");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    titles.forEach((title) => {
      title.classList.remove("active");
      if (title.getAttribute("data-section") === current) {
        title.classList.add("active");
      }
    });
  });

  // Smooth scroll when clicking a title
  titles.forEach((title) => {
    title.addEventListener("click", () => {
      const sectionId = title.getAttribute("data-section");
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    });
  });
});