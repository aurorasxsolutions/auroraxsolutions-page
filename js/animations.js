function initScrollAnimations() {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!elements.length) return;

  elements.forEach((el, index) => {
    el.style.setProperty("--stagger", index % 4);
    el.classList.add("is-visible");
  });
}
