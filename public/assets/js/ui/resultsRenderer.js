// src/ui/resultsRenderer.js

export function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function renderResults(companies) {
  const app = document.querySelector(".app");
  const section = document.getElementById("resultsSection");
  const grid = document.getElementById("resultsGrid");
  const count = document.getElementById("resultsCount");

  if (!app || !section || !grid || !count) return;

  app.classList.add("ui-results");
  section.hidden = false;

  count.textContent =
    companies.length === 0
      ? "Aucun résultat"
      : `${companies.length} entreprise(s)`;

  grid.innerHTML = "";

  for (const company of companies) {
    grid.appendChild(createCompanyCard(company));
  }
}

function createCompanyCard(company) {
  const card = document.createElement("article");
  card.className = "company-card";

  card.innerHTML = `
    <header class="company-card-header">
      <h3 class="company-name">${escapeHtml(company.name)}</h3>

      <div class="company-card-actions">
        <span class="company-status ${company.isActive ? "is-active" : "is-closed"}"></span>
        <button class="company-toggle" aria-label="Afficher les détails">⌄</button>
      </div>
    </header>

    <div class="company-card-body">
      <p><strong>SIRET</strong> ${escapeHtml(company.siret)}</p>
      <p><strong>Ville</strong> ${escapeHtml(company.city) || "—"}</p>
      <p><strong>NAF</strong> ${escapeHtml(company.nafCode)} – ${escapeHtml(company.nafLabel)}</p>
    </div>
  `;

  card.addEventListener("click", () => {
    // UI only aujourd’hui :
    window.openCompanyDetails?.(company);

    // “API link” demain :
    // companiesApi.getCompanyBySiren(company.siren).then(mapper...).then(openCompanyDetails)
  });

  return card;
}
