// src/mapping/companyMapper.js

/**
 * Map un item brut de l'API vers un objet exploitable par l'UI.
 */
export function mapCompany(raw) {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  const siege = raw.siege || raw.matching_etablissements || {};

  return {
    siren: raw.siren ?? null,
    siret: siege.siret ?? null,
    name: raw.nom_complet || raw.nom_raison_sociale || null,
    nafCode: siege.activite_principale || raw?.siege?.activite_principale || null,
    nafLabel:
      siege.activite_principale_registre_metier ||
      raw?.siege?.activite_principale_registre_metier ||
      null,
    address: siege.adresse || null,
    postalCode: siege.code_postal || null,
    isActive: (raw.etat_administratif || siege.etat_administratif) === "A",
  };
}

/**
 * Map la réponse complète de l'API de recherche.
 */
export function mapSearchResponse(rawResponse) {
  const results = Array.isArray(rawResponse?.results)
    ? rawResponse.results.map(mapCompany).filter(Boolean)
    : [];

  return {
    results,
    totalResults: rawResponse?.total_results ?? results.length,
    page: rawResponse?.page ?? 1,
    perPage: rawResponse?.per_page ?? results.length,
    totalPages: rawResponse?.total_pages ?? 1,
  };
}
