import { mapCompany, mapSearchResponse } from "../../public/assets/js/mapping/companyMapper.js";

describe("companyMapper", () => {

  test("mapCompany doit mapper un item minimal correctement", async () => {

    // Arrange
    const raw = {
      siren: "123456789",
      nom_complet: "COMPANY TESTED",
      siege: {
        siret: "123456123456",
      }
    }

    // Act
    const mapped = mapCompany(raw);

    // Assert
    expect(mapped).toEqual({
      siren: "123456789",
      siret: "123456123456",
      name: "COMPANY TESTED",
      nafCode: null,
      nafLabel: null,
      sector: null,
      address: null,
      postalCode: null,
      city: null,
      department: null,
      creationDate: null,
      legalForm: null,
      isActive: false,
    })
  });

  test("mapCompany doit mapper une réponse API complète correctement", () => {
    // Arrange - données réalistes de l'API
    const raw = {
      siren: "356000000",
      nom_complet: "LA POSTE",
      nom_raison_sociale: "LA POSTE",
      date_creation: "1991-01-01",
      nature_juridique: "5510",
      section_activite_principale: "H",
      etat_administratif: "A",
      siege: {
        siret: "35600000000048",
        activite_principale: "53.10Z",
        libelle_activite_principale: "Activités de poste dans le cadre d'une obligation de service universel",
        adresse: "9 RUE DU COLONEL PIERRE AVIA 75015 PARIS",
        code_postal: "75015",
        libelle_commune: "PARIS 15",
        departement: "75",
        etat_administratif: "A",
      },
    };

    // Act
    const mapped = mapCompany(raw);

    // Assert
    expect(mapped).toEqual({
      siren: "356000000",
      siret: "35600000000048",
      name: "LA POSTE",
      nafCode: "53.10Z",
      nafLabel: "Activités de poste dans le cadre d'une obligation de service universel",
      sector: "H",
      address: "9 RUE DU COLONEL PIERRE AVIA 75015 PARIS",
      postalCode: "75015",
      city: "PARIS 15",
      department: "75",
      creationDate: "1991-01-01",
      legalForm: "5510",
      isActive: true,
    });
  });

  test("mapSearchResponse doit mapper le resultat de recherche d'ensemble", () => {
    //Arrange
    const apiResponse = {
      results: [
        { siren: "987654321", name: "CompanyTestedA" },
        { siren: "123456789", name: "CompanyTestedB" },
      ],
      total_results: 2,
      page: 1,
      per_page: 10,
    }

    //Act
    const mapped = mapSearchResponse(apiResponse);

    //Assert
    expect(mapped.results.length).toBe(2);
    expect(mapped.page).toBe(1);
    expect(mapped.perPage).toBe(10);
    expect(mapped.totalResults).toBe(2);
  });
});
