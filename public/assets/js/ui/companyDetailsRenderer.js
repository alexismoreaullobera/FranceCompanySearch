export function renderCompanyDetails(company) {
    setText("detailsName", company.name);
    setStatus(company.isActive);

    setText("detailsSiren", formatSiren(company.siren));
    setText("detailsSiret", formatSiret(company.siret));

    setText("detailsCreationDate", company.creationDate);
    setText("detailsLegalForm", company.legalForm);

    setText("detailsNafCode", company.nafCode);
    setText("detailsNafLabel", company.nafLabel);
    setText("detailsSector", company.sector);

    setText("detailsAddress", company.address);
    setText("detailsPostalCode", company.postalCode);
    setText("detailsCity", company.city);
    setText("detailsDepartment", company.department);
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value ?? "—";
}

function setStatus(isActive) {
    const el = document.getElementById("detailsStatus");
    if (!el) return;

    el.textContent = isActive ? "Active" : "Fermée";
    el.classList.toggle("is-active", !!isActive);
    el.classList.toggle("is-closed", !isActive);
}

function formatSiren(s) {
    if (!s) return "—";
    return String(s).replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");
}
function formatSiret(s) {
    if (!s) return "—";
    return String(s).replace(/(\d{3})(\d{3})(\d{3})(\d{5})/, "$1 $2 $3 $4");
}
