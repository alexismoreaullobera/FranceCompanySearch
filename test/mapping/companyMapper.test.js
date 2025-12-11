import { mapCompany, mapSearchResponse } from "../../src/mapping/companyMapper.js";

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
      address: null,
      postalCode: null,
      isActive: false,
    })
  });

  test("mapSearchResponse doit mapper le resultat de recherche d'ensemble", () => {
    //Arrange
    const apiResponse = {
      results: [
        {siren:"987654321", name: "CompanyTestedA"},
        {siren:"123456789", name: "CompanyTestedB"},
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