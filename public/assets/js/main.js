import { MOCK_COMPANIES } from "./ui/mockCompanies.js";
import { renderResults } from "./ui/resultsRenderer.js";

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
