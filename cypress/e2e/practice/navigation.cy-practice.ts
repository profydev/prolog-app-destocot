describe("Sidebar Navigation", () => {
  beforeEach(() => {
    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard");
  });

  it("links are working", () => {
    const links = [
      { href: "http://localhost:3000/dashboard/issues", label: "Issues" },
      { href: "http://localhost:3000/dashboard/alerts", label: "Alerts" },
      { href: "http://localhost:3000/dashboard/users", label: "Users" },
      { href: "http://localhost:3000/dashboard/settings", label: "Settings" },
      { href: "http://localhost:3000/dashboard", label: "Projects" },
    ];

    // check that links lead to the right pages
    links.forEach((link) => {
      cy.get("nav").contains(link.label).click();
      cy.url().should("eq", link.href);
    });
  });

  it("is collapsible", () => {
    // collapse navigation
    cy.get("nav").contains("Collapse").click();
    cy.get("nav").find("a").should("have.length", 5).eq(1).click();
    cy.url().should("eq", "http://localhost:3000/dashboard/issues");
    cy.get("nav").contains("Issues").should("not.exist");
  });
});
