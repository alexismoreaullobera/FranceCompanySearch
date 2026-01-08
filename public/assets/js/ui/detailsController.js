import { renderCompanyDetails } from "./companyDetailsRenderer.js";

export function initDetailsController() {
    const results = document.getElementById("resultsSection");
    const details = document.getElementById("companyDetailsSection");
    const back = document.getElementById("btnBackToResults");

    if (!results || !details) return;

    back?.addEventListener("click", () => {
        details.hidden = true;
        results.hidden = false;
    });

    // MOCK pour tester l’affichage (à remplacer par le vrai click card)
    const mock = {
        name: "LA POSTE",
        isActive: true,
        siren: "356000000",
        siret: "35600000000048",
        creationDate: "—",
        legalForm: "—",
        nafCode: "5310Z",
        nafLabel: "—",
        sector: "—",
        address: "9 RUE DU COLONEL PIERRE AVIA",
        postalCode: "75015",
        city: "PARIS",
        department: "75",
    };

    //openCompanyDetails(mock);

    // ✅ hook “API-ready”
    window.openCompanyDetails = openCompanyDetails;

    function openCompanyDetails(company) {
        renderCompanyDetails(company);
        results.hidden = true;
        details.hidden = false;
    }
}
