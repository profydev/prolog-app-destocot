describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      forceNetworkError: true,
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
      cy.wait(5000);
    });

    it("renders error message for failed projects request", () => {
      cy.get("main")
        .find("span")
        .contains("There was a problem while loading the project data");
    });

    it("refetches data on click", () => {
      it("renders error message for failed projects request", () => {
        cy.get("main").find("button").contains("Try again").click();
        cy.get("main div").contains("Loading");
        cy.wait(5000);
        cy.get("main")
          .find("span")
          .contains("There was a problem while loading the project data");
      });
    });
  });
});
