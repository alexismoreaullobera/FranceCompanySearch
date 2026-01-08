import { searchCompanies } from "../../public/assets/js/api/companiesApi.js";

describe("companiesApi", () => {

  test("appelle fetchImpl avec la bonne URL", async () => {
    const fakeJson = jest.fn().mockResolvedValue({
      results: [],
      total_results: 0,
    });

    const fakeFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: fakeJson,
    });

    await searchCompanies({ query: "La Poste" }, fakeFetch);

    expect(fakeFetch).toHaveBeenCalledTimes(1);

    const calledUrl = fakeFetch.mock.calls[0][0];
    expect(calledUrl).toContain("q=La+Poste");
  });

  test("lève une erreur si query est vide", async () => {
    const fakeFetch = jest.fn();

    await expect(searchCompanies({ query: "" }, fakeFetch))
      .rejects
      .toThrow("query");
  });

  test("lève une erreur si l’API renvoie une erreur HTTP", async () => {
    const fakeFetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Server Error",
      json: jest.fn().mockResolvedValue({ message: "boom" }),
    });

    await expect(searchCompanies({ query: "test" }, fakeFetch))
      .rejects
      .toThrow("500");
  });
});
