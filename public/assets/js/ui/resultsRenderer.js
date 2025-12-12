// src/ui/resultsRenderer.js
export function renderResults(companies) {
  const app = document.querySelector(".app");
  const section = document.getElementById("resultsSection");
  const grid = document.getElementById("resultsGrid");
  const count = document.getElementById("resultsCount");

  app.classList.add("ui-results");
  section.hidden = false;

  count.textContent = `${companies.length} entreprise(s)`;

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
      <h3 class="company-name">${company.name}</h3>

      <div class="company-card-actions">
        <span class="company-status ${company.isActive ? "is-active" : "is-closed"}"></span>
        <button class="company-toggle" aria-label="Afficher les détails">⌄</button>
      </div>
    </header>

    <div class="company-card-body">
      <p><strong>SIRET</strong> ${company.siret}</p>
      <p><strong>Ville</strong> ${company.city}</p>
      <p><strong>NAF</strong> ${company.nafCode} – ${company.nafLabel}</p>
    </div>
  `;

  card.querySelector(".company-toggle").addEventListener("click", () => {
    card.classList.toggle("is-open");
  });

  return card;
}
