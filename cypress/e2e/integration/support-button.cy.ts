type ParseMailto = { recipient: string; [key: string]: string };

function parseMailto(s: string) {
  const [start, params] = s.split("?");
  const recipient = start.split(":")[1];
  const result: ParseMailto = { recipient };
  params.split("&").forEach((param) => {
    const [key, encoded] = param.split("=");
    result[key] = decodeURIComponent(encoded);
  });
  return result;
}

describe("Support button", () => {
  beforeEach(() => {
    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard");
  });

  it("should open user's email application with the recipent and subject line filled out", () => {
    cy.get("nav")
      .find("a")
      .contains("Support")
      .should("have.attr", "href")
      .then(($href) => {
        const href = $href.toString();
        return parseMailto(href);
      })
      .should("deep.equal", {
        recipient: "support@prolog-app.com",
        subject: "Support Request:",
      });
  });
});
