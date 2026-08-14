document.documentElement.classList.add("js");

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

function closeMenu() {
  if (!menuButton || !nav) return;
  menuButton.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
    document.body.classList.toggle("menu-open", !open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const mobileNavigation = window.matchMedia("(max-width: 700px)");
  mobileNavigation.addEventListener("change", (event) => {
    if (!event.matches) closeMenu();
  });
}

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 24);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll("[data-reveal]");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("revealed"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll("[data-email]").forEach((button) => {
  button.addEventListener("click", () => {
    const address = `${button.dataset.user}@${button.dataset.domain}`;
    window.location.href = `mailto:${address}`;
  });
});
