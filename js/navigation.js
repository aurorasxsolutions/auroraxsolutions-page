function initNavigation() {
  handleNavbarScroll();
  initMobileMenu();
  initSmoothScroll();
}

function handleNavbarScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const updateState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateState();
  window.addEventListener("scroll", updateState, { passive: true });
}

function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const links = document.getElementById("navbar-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", window.AXS.translate(isOpen ? "ui.closeMenu" : "ui.openMenu"));
  });

  links.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => closeMobileMenu(toggle, links));
  });
}

function closeMobileMenu(toggle, links) {
  links.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", window.AXS.translate("ui.openMenu"));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
