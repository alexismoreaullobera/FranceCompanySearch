import { escapeHtml } from "../../public/assets/js/ui/resultsRenderer.js";

describe("escapeHtml", () => {
  it("should escape < and > characters", () => {
    expect(escapeHtml("<script>alert('XSS')</script>")).toBe(
      "&lt;script&gt;alert(&#039;XSS&#039;)&lt;/script&gt;"
    );
  });

  it("should escape & character", () => {
    expect(escapeHtml("Tom & Jerry")).toBe("Tom &amp; Jerry");
  });

  it("should escape double quotes", () => {
    expect(escapeHtml('He said "hello"')).toBe("He said &quot;hello&quot;");
  });

  it("should escape single quotes", () => {
    expect(escapeHtml("It's fine")).toBe("It&#039;s fine");
  });

  it("should return empty string for null", () => {
    expect(escapeHtml(null)).toBe("");
  });

  it("should return empty string for undefined", () => {
    expect(escapeHtml(undefined)).toBe("");
  });

  it("should handle numbers by converting to string", () => {
    expect(escapeHtml(12345)).toBe("12345");
  });

  it("should return unchanged string when no special characters", () => {
    expect(escapeHtml("Normal company name")).toBe("Normal company name");
  });
});
