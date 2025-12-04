# 1. FranceCompanySearch

Annuaire PWA permettant de rechercher des entreprises francaises via l'API publique api.gouv.fr.

# 2. Badges

![CI](https://github.com/alexismoreaullobera/FranceCompanySearch/actions/workflows/ci.yml/badge.svg)
![Deployment](https://img.shields.io/badge/deployment-pending-lightgrey)

<!-- ![Deployment](https://img.shields.io/badge/deployment-GitHub%20Pages-brightgreen) -->

![PWA](https://img.shields.io/badge/PWA-not%20ready-lightgrey)

<!-- ![PWA](https://img.shields.io/badge/PWA-ready-brightgreen) -->

![API](https://img.shields.io/badge/API-entreprises.api.gouv.fr-lightgrey)

<!-- ![API](https://img.shields.io/badge/API-entreprises.api.gouv.fr-brightgreen) -->

![Responsive](https://img.shields.io/badge/UI-responsive-lightgrey)

<!--![Responsive](https://img.shields.io/badge/UI-responsive-brightgreen)-->

# 3. Aperçu

- Todo

# 4. Fonctionnalités :

<!--
- Rechercher une entreprise (nom, SIREN, adresse...)
- Consulter les informations clés: forme juridique, adresse, code NAF etc.
- Filtrer les résultats
- Consulter une fiche détaillée d'entreprise
- Utiliser l'outil sur mobile / desktop (UI responsive)
-->

# 5. Démo

Lien : TODO

# 6. Installation

<!-- A voir selon les modules
```
git clone https://github.com/alexismoreaullobera/FranceCompanySearch
cd FranceCompanySearch
npm install
npm run dev
```
-->

# 7. Usages

- Rechercher : TODO
- Navigation : TODO

# 8. Tech Stack

- HTML / CSS / JS (ES Modules)
- API Recherche d'entreprises (api.gouv.fr)
- Jest (tests)
- GitHub Actions (CI/CD)
- PWA (manifest + service worker)

# 9. Architecture

public/
src/
js/
test/
.github/

# 10. API utilisée

[L’API Recherche d’entreprises permet à tout le monde retrouver une entreprise, une association, ou un service public en France. Elle propose un grand nombre de critères de recherche, en particulier la dénomination, l’adresse et les dirigeants ou élus.](https://recherche-entreprises.api.gouv.fr/docs/?ref=freepublicapis.com)

Exemple de requête pour la recherche "TERM" :

```
GET https://recherche-entreprises.api.gouv.fr/search?q=TERM&page=1
```

# 11. Tests

```
npm test
```

# 12. Licence

Ce projet est distribué sous la licence MIT.
Voir le fichier LICENSE pour plus d'informations.
