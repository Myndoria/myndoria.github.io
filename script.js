
// Smooth fade-in effect on scroll
const sections = document.querySelectorAll(".fade-in");
const options = {
  threshold: 0.1,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
