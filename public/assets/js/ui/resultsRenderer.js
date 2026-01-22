// src/ui/resultsRenderer.js
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

  const header = document.createElement("header");
  header.className = "company-card-header";

  const h3 = document.createElement("h3");
  h3.className = "company-name";
  h3.textContent = company.name; // textContent échappe automatiquement

  const actions = document.createElement("div");
  actions.className = "company-card-actions";

  const status = document.createElement("span");
  status.className = `company-status ${company.isActive ? "is-active" : "is-closed"}`;

  const toggle = document.createElement("button");
  toggle.className = "company-toggle";
  toggle.setAttribute("aria-label", "Afficher les détails");
  toggle.textContent = "⌄";

  actions.append(status, toggle);
  header.append(h3,actions);

  const body = document.createElement("div");
  body.className = "company-card-body";
  body.append(
  createField("SIRET", company.siret),
  createField("Ville", company.city),
  createField("NAF", `${company.nafCode} – ${company.nafLabel}`)
  );

  card.append(header, body);

  card.addEventListener("click", () => {
    window.openCompanyDetails?.(company);
  });

  return card;
}

function createField(label, value) {
  const p = document.createElement("p");
  const strong = document.createElement("strong");

  strong.textContent = label;
  p.append(strong, " ", value ?? "---");
  return p;
}
