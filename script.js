const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

const revealTargets = document.querySelectorAll("[data-reveal]");
const textFadeTargets = document.querySelectorAll(
  ".scene-copy-main, .poem, .quote, .section-label, .statement p, .guideline-copy p, .contact-box p, .link-column a, .portal-link"
);

textFadeTargets.forEach((target) => {
  target.classList.add("text-fade");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
  }
);

revealTargets.forEach((target, index) => {
  target.style.transitionDelay = `${index * 70}ms`;
  revealObserver.observe(target);
});

const textFadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      textFadeObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
  }
);

textFadeTargets.forEach((target, index) => {
  target.style.transitionDelay = `${120 + index * 35}ms`;
  textFadeObserver.observe(target);
});
