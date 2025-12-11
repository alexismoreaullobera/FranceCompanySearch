// src/api/companiesApi.js

import { mapSearchResponse } from "../mapping/companyMapper.js";

const BASE_URL = "https://recherche-entreprises.api.gouv.fr/search";

/**
 * Appelle l'API de recherche d'entreprises.
 *
 * @param {Object} options
 * @param {string} options.query    Texte recherché (raison sociale, etc.)
 * @param {number} [options.page=1]
 * @param {number} [options.perPage=10]  max 25 selon la doc
 * @param {AbortSignal} [options.signal] Pour annuler la requête
 * @param {Function} [fetchImpl=fetch]   Injecté pour les tests
 */

export async function searchCompanies(
  { query, page = 1, perPage = 10, signal } = {},
  fetchImpl = fetch
) {
    if (!query || !query.trim()) {
        throw new Error("La requête de recherche (query) est obligatoire.");
    }

    const params = new URLSearchParams({
        q: query.trim(),
        page: String(page),
        per_page: String(perPage),
    });

    const url = `${BASE_URL}?${params.toString()}`;

    const response = await fetchImpl(url, { signal });

    if (!response.ok) {
        let errorDetails = "";
        try {
        const body = await response.json();
        errorDetails = body?.message || JSON.stringify(body);
        } catch {
        // on ignore si le body n'est pas JSON
        }
        throw new Error(
        `Erreur API (${response.status}) ${response.statusText} ${errorDetails}`
        );
    }

    const data = await response.json();
    return mapSearchResponse(data);
}
