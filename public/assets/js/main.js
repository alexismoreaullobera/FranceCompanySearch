import { MOCK_COMPANIES } from "./ui/mockCompanies.js";
import { renderResults } from "./ui/resultsRenderer.js";
import { initDetailsController } from "./ui/detailsController.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // plus tard : lire la vraie valeur input
    renderResults(MOCK_COMPANIES);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  initDetailsController();
});

function initAutoHideHeader() {
  const header = document.querySelector(".app-header");
  if (!header) return;

  let lastY = window.scrollY;
  let ticking = false;

  const THRESHOLD = 8; // évite les micro scrolls qui clignotent

  function onScroll() {
    const y = window.scrollY;
    const delta = y - lastY;

    // si on est quasi en haut, on force visible
    if (y < 20) header.classList.remove("is-hidden");
    else if (Math.abs(delta) > THRESHOLD) {
      if (delta > 0) header.classList.add("is-hidden");     // scroll down => hide
      else header.classList.remove("is-hidden");            // scroll up => show
      lastY = y;
    }

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  initAutoHideHeader();
});

